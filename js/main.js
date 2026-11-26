// js/main.js

// --- 1. ANIMACIÓN DE TEXTO (TYPEWRITER) ---
const TextTyper = (() => {
    let words = [
        "Ingeniero en Informática",
        "Desarrollador Web",
        "Backend Developer",
        "Full Stack Developer"
    ];
    let i = 0;
    let timer = null;
    let element = null;

    function clearTimers() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }

    function type(target, text, index = 0) {
        if (index < text.length) {
            target.textContent += text.charAt(index);
            timer = setTimeout(() => type(target, text, index + 1), 85);
        } else {
            timer = setTimeout(() => erase(target), 2200);
        }
    }

    function erase(target) {
        const text = target.textContent;
        if (text.length > 0) {
            target.textContent = text.substring(0, text.length - 1);
            timer = setTimeout(() => erase(target), 45);
        } else {
            i = (i + 1) % words.length;
            timer = setTimeout(() => type(target, words[i]), 400);
        }
    }

    function init() {
        element = document.getElementById('text');
        if (element) {
            clearTimers();
            element.textContent = '';
            i = 0;
            type(element, words[0]);
        }
    }

    function setWords(newWords) {
        if (!Array.isArray(newWords) || newWords.length === 0) return;
        words = newWords;
        if (element) {
            clearTimers();
            element.textContent = '';
            i = 0;
            type(element, words[0]);
        }
    }

    return { init, setWords };
})();

window.TextTyper = TextTyper;

// --- 2. TOAST HELPER ---
function showToast(message) {
    let toast = document.getElementById('app-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'app-toast';
        toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-[10000] px-4 py-2.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium shadow-lg transition-all duration-300 opacity-0 pointer-events-none';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.remove('opacity-0', 'translate-y-2');
    toast.classList.add('opacity-100', 'translate-y-0');

    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => {
        toast.classList.remove('opacity-100', 'translate-y-0');
        toast.classList.add('opacity-0', 'translate-y-2');
    }, 2600);
}

// --- 3. INICIALIZACIÓN GENERAL ---
document.addEventListener('DOMContentLoaded', function () {
    TextTyper.init();

    // Gestión del Tema (Dark/Light)
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                htmlElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
        });
    }

    // --- SCROLL REVEAL OBSERVER ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px"
    });

    document.querySelectorAll('.reveal-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // --- CONTACT FORM HANDLER ---
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const lang = typeof window.getCurrentLang === 'function' ? window.getCurrentLang() : 'es';
            const dict = (window.I18N_DICT && window.I18N_DICT[lang]) ? window.I18N_DICT[lang].contact : {
                sending: 'Enviando...',
                success: '¡Gracias! Tu mensaje ha sido enviado correctamente.',
                error: 'Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.'
            };

            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>${dict.sending}</span>`;
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
                        formStatus.className = "md:col-span-2 text-center p-3 rounded-lg text-sm font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50";
                        formStatus.textContent = dict.success;
                    }
                    contactForm.reset();
                } else {
                    throw new Error('Error en el envío');
                }
            } catch (error) {
                if (formStatus) {
                    formStatus.className = "md:col-span-2 text-center p-3 rounded-lg text-sm font-medium bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-300 border border-red-200 dark:border-red-800/50";
                    formStatus.textContent = dict.error;
                }
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
                if (formStatus) formStatus.classList.remove('hidden');
            }
        });
    }

    // --- BOTÓN VOLVER ARRIBA ---
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 320) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// Función global para copiar email
window.copyEmail = function (e) {
    if (e) e.preventDefault();
    const email = "joselm2490@gmail.com";
    const lang = typeof window.getCurrentLang === 'function' ? window.getCurrentLang() : 'es';
    const copiedMsg = (window.I18N_DICT && window.I18N_DICT[lang])
        ? window.I18N_DICT[lang].contact.copied
        : "¡Correo copiado al portapapeles!";

    navigator.clipboard.writeText(email).then(() => {
        showToast(`${copiedMsg} (${email})`);
    }).catch(() => {
        window.location.href = "mailto:" + email;
    });
};
