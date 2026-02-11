// js/main.js

// --- 1. ANIMACIÓN DE TEXTO (TYPEWRITER) "Hola, soy..." ---
const TextTyper = (() => {
    const words = [
        "Ingeniero en Informática",
        "Desarrollador Web",
        "Backend Developer",
        "Full Stack Developer"
    ];
    let i = 0;
    let timer;

    function type(element, text, index = 0) {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            timer = setTimeout(() => type(element, text, index + 1), 100);
        } else {
            setTimeout(() => erase(element), 2000);
        }
    }

    function erase(element) {
        const text = element.textContent;
        if (text.length > 0) {
            element.textContent = text.substring(0, text.length - 1);
            timer = setTimeout(() => erase(element), 50);
        } else {
            i = (i + 1) % words.length;
            setTimeout(() => type(element, words[i]), 500);
        }
    }

    function init() {
        const element = document.getElementById('text');
        if (element) {
            type(element, words[0]);
        }
    }

    return { init };
})();

// --- 2. SUBSTRATE EFFECT MODULE (FONDO ANIMADO) ---
const SubstrateEffect = (() => {
    let canvas, context, width, height, dpr;
    let boids = [];
    let animationId;
    let isRunning = false;

    const random = Math.random;

    const Boid = function (x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = Math.pow(random(), 20) + angle;
        this.dx = Math.cos(this.angle);
        this.dy = Math.sin(this.angle);
        this.life = random() * 100 + 100;
        this.isDead = false;

        this.update = function (data) {
            const isDark = document.documentElement.classList.contains('dark');
            if (isDark) {
                context.strokeStyle = 'rgba(56, 189, 248, 0.3)';
                context.lineWidth = 1.2;
            } else {
                context.strokeStyle = 'rgba(0, 0, 0, 0.1)';
                context.lineWidth = 1.0;
            }

            context.beginPath();
            context.moveTo(this.x, this.y);
            this.x += this.dx * 2;
            this.y += this.dy * 2;
            this.life -= 2;
            context.lineTo(this.x, this.y);
            context.stroke();

            const index = (Math.floor(this.x) + Math.floor(this.y) * width) * 4;
            if (this.life <= 0) this.kill();
            if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) this.kill();
            if (data && data[index + 3] > 0) this.kill();
        };

        this.kill = function () {
            const idx = boids.indexOf(this);
            if (idx > -1) boids.splice(idx, 1);
            this.isDead = true;
        };
    };

    function init() {
        if (!document.getElementById('substrate-canvas')) {
            canvas = document.createElement('canvas');
            canvas.id = 'substrate-canvas';
            document.body.insertBefore(canvas, document.body.firstChild);
            context = canvas.getContext('2d', { willReadFrequently: true });
            window.addEventListener('resize', resize);
            resize();
            window.addEventListener('pointerdown', function (event) {
                const x = event.clientX * dpr;
                const y = event.clientY * dpr;
                const angle = random() * 360 * Math.PI / 180;
                boids.push(new Boid(x, y, angle));
            });
        }
    }

    function resize() {
        dpr = window.devicePixelRatio || 1;
        width = window.innerWidth * dpr;
        height = window.innerHeight * dpr;
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        context.scale(1, 1);
        boids = [];
        startBoids();
    }

    function startBoids() {
        const x = width * 0.25 + random() * width * 0.5;
        const y = height * 0.25 + random() * height * 0.5;
        const angle = random() * 360 * Math.PI / 180;
        boids.push(new Boid(x, y, angle));
    }

    function loop() {
        if (!isRunning) return;
        const image = context.getImageData(0, 0, width, height);
        const data = image.data;
        for (let i = 0; i < boids.length; i++) {
            const boid = boids[i];
            boid.update(data);
            if (!boid.isDead && random() > 0.8 && boids.length < 500) {
                const angle = boid.angle + (random() > 0.5 ? 90 : -90) * Math.PI / 180;
                boids.push(new Boid(boid.x, boid.y, angle));
            }
        }
        if (boids.length === 0 && random() > 0.99) startBoids();
        animationId = requestAnimationFrame(loop);
    }

    function start() { if (isRunning) return; isRunning = true; loop(); }
    function stop() { isRunning = false; cancelAnimationFrame(animationId); }
    function reset() { context.clearRect(0, 0, width, height); boids = []; startBoids(); }

    return { init, start, stop, reset };
})();

// --- 3. INICIALIZACIÓN GENERAL ---
document.addEventListener('DOMContentLoaded', function () {

    // Iniciar Animación de Texto (Restaurado)
    TextTyper.init();

    // Iniciar Fondo Substrate
    SubstrateEffect.init();
    SubstrateEffect.start();

    // Gestión del Tema (Dark/Light)
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }

    if (typeof updateSVGColors === 'function') {
        updateSVGColors();
    }

    // Resetear efecto al cambiar tema
    setTimeout(() => { SubstrateEffect.reset(); }, 50);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                htmlElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
            SubstrateEffect.reset();
            if (typeof updateSVGColors === 'function') {
                updateSVGColors();
            }
        });
    }

    // --- SCROLL REVEAL OBSERVER ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('reveal-on-scroll')) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.add('animate-fade-in');
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05, // More lenient for mobile
        rootMargin: "0px 0px -20px 0px" // Less aggressive bottom margin
    });

    document.querySelectorAll('.experience-card, .section-title, .about-content, .reveal-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // --- TILT & GLOW (Para tarjetas normales) ---
    VanillaTilt.init(document.querySelectorAll(".info-card, .contact-card"), {
        max: 3,
        speed: 1000,
        glare: true,
        "max-glare": 0.1,
        scale: 1.02,
        gyroscope: true
    });

    // --- LOAD FADE-IN ---
    window.addEventListener('load', function () {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // --- CONTACT FORM HANDLER ---
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Enviando...</span>';
            if (formStatus) formStatus.classList.add('hidden');

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    if (formStatus) {
                        formStatus.className = "col-span-1 md:col-span-2 text-center p-3 rounded-lg text-sm font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 animate-fade-in";
                        formStatus.innerHTML = "¡Gracias! Tu mensaje ha sido enviado correctamente.";
                    }
                    contactForm.reset();
                } else {
                    throw new Error('Error en el envío');
                }
            } catch (error) {
                if (formStatus) {
                    formStatus.className = "col-span-1 md:col-span-2 text-center p-3 rounded-lg text-sm font-medium bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 animate-fade-in";
                    formStatus.innerHTML = "Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.";
                }
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
                if (formStatus) formStatus.classList.remove('hidden');
            }
        });
    }
});

// Función global para copiar email
window.copyEmail = function (e) {
    e.preventDefault();
    const email = "joselm2490@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("¡Correo copiado al portapapeles!\n" + email);
    }).catch(err => {
        window.location.href = "mailto:" + email;
    });
};