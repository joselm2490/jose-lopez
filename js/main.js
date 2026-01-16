// --- SUBSTRATE EFFECT MODULE (FONDO ANIMADO) ---
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
                context.strokeStyle = 'rgba(226, 232, 240, 0.1)';
                context.lineWidth = 0.8;
            } else {
                context.strokeStyle = 'rgba(0, 0, 0, 0.08)';
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


document.addEventListener('DOMContentLoaded', function () {
    SubstrateEffect.init();
    SubstrateEffect.start();

    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }
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
        });
    }

    // --- GENERADOR DE BURBUJAS PARA EL FOOTER ---
    const footerBubbles = document.getElementById('footer-bubbles');

    if (footerBubbles) {
        for (let i = 0; i < 128; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            const size = 2 + Math.random() * 4;
            const distance = 2 + Math.random() * 3;
            const position = -5 + Math.random() * 110;
            const time = 2 + Math.random() * 2;
            const delay = -1 * (2 + Math.random() * 2);

            bubble.style.setProperty('--size', `${size}rem`);
            bubble.style.setProperty('--distance', `${distance}rem`);
            bubble.style.setProperty('--position', `${position}%`);
            bubble.style.setProperty('--time', `${time}s`);
            bubble.style.setProperty('--delay', `${delay}s`);

            footerBubbles.appendChild(bubble);
        }
    }

    // --- DINO SKILLS ARCADE EFFECT ---
    const SKILLS = [
        "PHP", "Laravel", "Livewire", "Python", "Odoo",
        "HTML5", "Tailwind", "Bootstrap", "JavaScript",
        "Next.js", "MySQL", "SQL Server", "PostgreSQL",
        "Git", "GitHub", "GitLab", "Trello",
        "OpenProject", "Google Meet", "Zoom", "Docker", "Postman"
    ];

    const SKILL_CONTAINER = document.getElementById('skill-cloud-container');
    let lastLaneIndex = -1;

    function spawnSkillBird() {
        if (!SKILL_CONTAINER || document.hidden) return;

        const skillName = SKILLS[Math.floor(Math.random() * SKILLS.length)];
        const bird = document.createElement('div');

        bird.classList.add('skill-bird', 'font-pixel');
        bird.innerText = skillName;

        // --- SOLUCIÓN: SOLO 2 CARRILES SUPERIORES ---
        // 5% y 20% para asegurar que pasan MUY arriba del Dino gigante
        const lanes = [5, 20];

        let laneIndex;
        // Alternar carriles para evitar colisiones
        do {
            laneIndex = Math.floor(Math.random() * lanes.length);
        } while (laneIndex === lastLaneIndex && lanes.length > 1);

        lastLaneIndex = laneIndex;

        bird.style.top = `${lanes[laneIndex]}%`;

        // --- SOLUCIÓN SUPERPOSICIÓN: VELOCIDAD CONSTANTE ---
        // Al usar un tiempo fijo (8s), las palabras nunca se alcanzan entre sí.
        bird.style.animationDuration = `8s`;

        SKILL_CONTAINER.appendChild(bird);

        setTimeout(() => {
            bird.remove();
        }, 8000); // Coincide con la duración
    }

    function startSkillRotation() {
        spawnSkillBird();

        const loop = () => {
            // Intervalo de aparición fijo y suficiente para dar espacio
            const timeNext = 2500;
            setTimeout(() => {
                spawnSkillBird();
                loop();
            }, timeNext);
        };
        loop();
    }

    // --- TERMINAL TEXT EFFECT ---
    const consoleElement = document.getElementById('text');
    if (consoleElement) {
        const words = ['Ingeniero en Informática', 'Desarrollador Full Stack', 'Desarrollador Web'];
        const colors = ['#0284c7', '#0ea5e9', '#38bdf8'];

        consoleText(words, 'text', colors);
    }

    function consoleText(words, id, colors) {
        if (colors === undefined) colors = ['#fff'];
        var visible = true;
        var con = document.getElementById('console');
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id);

        target.setAttribute('style', 'color:' + colors[0]);

        window.setInterval(function () {
            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount);
                window.setTimeout(function () {
                    var usedColor = colors.shift();
                    colors.push(usedColor);
                    var usedWord = words.shift();
                    words.push(usedWord);
                    x = 1;
                    target.setAttribute('style', 'color:' + colors[0]);
                    letterCount += x;
                    waiting = false;
                }, 1000);
            } else if (letterCount === words[0].length + 1 && waiting === false) {
                waiting = true;
                window.setTimeout(function () {
                    x = -1;
                    letterCount += x;
                    waiting = false;
                }, 1000);
            } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount);
                letterCount += x;
            }
        }, 120);

        window.setInterval(function () {
            if (visible === true) {
                con.className = 'console-underscore hidden';
                visible = false;
            } else {
                con.className = 'console-underscore';
                visible = true;
            }
        }, 400);
    }

    // --- SCROLL HELPERS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) backToTopButton.classList.add('visible');
            else backToTopButton.classList.remove('visible');
        });
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.experience-card, .section-title, .about-content').forEach(element => {
        observer.observe(element);
    });

    // --- TILT & GLOW ---
    VanillaTilt.init(document.querySelectorAll(".js-tilt"), {
        max: 2, speed: 800, glare: true, "max-glare": 0.05, scale: 1.00, gyroscope: false
    });

    const glowCards = document.querySelectorAll('.glow-card');
    glowCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
            card.style.setProperty('--glow-opacity', '1');
        });
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--glow-opacity', '0');
        });
    });

    // --- LOAD FADE-IN ---
    window.addEventListener('load', function () {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            document.body.style.opacity = '1';
            startSkillRotation();
        }, 100);
    });

    // --- CONTACT FORM HANDLER (FORMSPREE) ---
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Estado de carga
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Enviando...</span>';
            formStatus.classList.add('hidden');

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formStatus.className = "col-span-1 md:col-span-2 text-center p-3 rounded-lg text-sm font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 animate-fade-in";
                    formStatus.innerHTML = "¡Gracias! Tu mensaje ha sido enviado correctamente.";
                    contactForm.reset();
                } else {
                    throw new Error('Error en el envío');
                }
            } catch (error) {
                formStatus.className = "col-span-1 md:col-span-2 text-center p-3 rounded-lg text-sm font-medium bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 animate-fade-in";
                formStatus.innerHTML = "Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.";
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
                formStatus.classList.remove('hidden');
            }
        });
    }
});

// --- FUNCIÓN GLOBAL PARA COPIAR EMAIL ---
window.copyEmail = function (e) {
    e.preventDefault();
    const email = "joselm2490@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("¡Correo copiado al portapapeles!\n" + email);
    }).catch(err => {
        console.error('Error al copiar: ', err);
        window.location.href = "mailto:" + email;
    });
};