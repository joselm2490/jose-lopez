// js/i18n.js

(function () {
    const translations = {
        es: {
            metaTitle: "José López - Ingeniero en Informática",
            nav: {
                home: "Inicio",
                about: "Sobre Mí",
                experience: "Experiencia",
                contact: "Contacto"
            },
            hero: {
                badge: "Transformando ideas en código",
                greeting: "Hola, soy",
                stack: "Laravel | PHP | Python | Django | Odoo | Next.js | Base de Datos (SQL Server, MySQL y PostgreSQL) | HTML | JavaScript",
                downloadCv: "Descargar CV",
                viewExperience: "Ver experiencia",
                typerWords: [
                    "Ingeniero en Informática",
                    "Desarrollador Web",
                    "Backend Developer",
                    "Full Stack Developer"
                ]
            },
            about: {
                title: "Sobre Mí",
                role: "Ingeniero en Informática",
                headline: "Desarrollador Full Stack",
                p1: 'Especializado en el desarrollo de soluciones web robustas con <strong class="text-primary-600 dark:text-primary-400 font-bold">Laravel, PHP, Python, Django y Odoo</strong>. Mi trayectoria se centra en la creación de arquitecturas eficientes y la gestión avanzada de bases de datos como <strong class="text-primary-600 dark:text-primary-400 font-bold">SQL Server, MySQL y PostgreSQL</strong>, integrando siempre las mejores prácticas del sector.',
                p2: "Me distingo por un enfoque analítico en el diagnóstico de sistemas y una sólida capacidad para transformar requerimientos técnicos en productos escalables. Soy un firme creyente en el aprendizaje continuo y la agilidad, lo que me permite colaborar eficazmente en equipos multidisciplinarios bajo metodologías modernas.",
                catBackend: "Backend",
                catFrontend: "Frontend",
                catDatabases: "Bases de Datos",
                catVersioning: "Versiones",
                catManagement: "Gestión",
                catTools: "Herramientas"
            },
            exp: {
                title: "Experiencia",
                alcaravan: {
                    role: "Desarrollador Web",
                    date: "Ago 2025 - Presente • Venezuela",
                    b1: 'Plataforma <a href="https://impuestosroscio.guiriri.com.ve/" target="_blank" rel="noopener noreferrer" class="font-semibold text-primary-600 dark:text-primary-400 hover:underline">Güirirí</a> (Odoo): sistema de gestión tributaria municipal utilizado activamente por diversas alcaldías a nivel nacional, automatizando trámites en línea para el contribuyente.',
                    b2: 'Plataforma <a href="https://sergidesol.com.ve/login/?next=/" target="_blank" rel="noopener noreferrer" class="font-semibold text-primary-600 dark:text-primary-400 hover:underline">SERGIDESOL</a> (Django): Servicio Desconcentrado de Gestión Integral de los Desechos Sólidos; sistema integral de recaudación y gestión municipal (contribuyentes, inmuebles, facturación, taquillas, retenciones fiscales, portal de autogestión y reportes) con PostgreSQL, Tailwind CSS y Docker.',
                    b3: "Colaboración con el equipo utilizando Python, Django, Odoo, Next.js y PostgreSQL para el soporte, evolución y escalabilidad de ambos ecosistemas."
                },
                unerg: {
                    role: "Desarrollador Web",
                    date: "May 2025 - Jul 2025 • Venezuela",
                    b1: "Reingeniería integral del Sistema Clínico Odontológico utilizando PHP y Laravel 12 para optimizar la gestión.",
                    b2: "Desarrollo de interfaces interactivas con Livewire 3 y Tailwind CSS para la administración de historias clínicas.",
                    b3: "Gestión de bases de datos con MySQL para asegurar la integridad y seguridad de la información académica."
                },
                tappers: {
                    role: "Consultor BD / Desarrollador",
                    date: "Sep 2022 - Jun 2023 • Colombia (Remoto)",
                    b1: "Consultoría y administración de bases de datos SQL Server, optimizando consultas complejas.",
                    b2: "Desarrollo web y soporte técnico especializado en PHP, diagnosticando y resolviendo incidencias operativas.",
                    b3: "Ejecución de análisis de datos y generación de informes estratégicos para la gerencia."
                },
                ivss: {
                    role: "Desarrollador Web (Pasantía)",
                    date: "Abr 2021 - Jun 2021 • Venezuela",
                    b1: "Desarrollo de un sistema web integral con PHP (Laravel) y MySQL para citas e inventario.",
                    b2: "Digitalización de registros manuales, migrando la información a bases de datos seguras.",
                    b3: "Optimización de los tiempos de respuesta en la búsqueda de historias médicas."
                }
            },
            contact: {
                title: "Contacto",
                nameLabel: "Nombre",
                namePlaceholder: "Tu nombre",
                emailLabel: "Correo electrónico",
                emailPlaceholder: "tucorreo@ejemplo.com",
                messageLabel: "Mensaje",
                messagePlaceholder: "¿En qué puedo ayudarte?",
                send: "Enviar mensaje",
                sending: "Enviando...",
                success: "¡Gracias! Tu mensaje ha sido enviado correctamente.",
                error: "Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.",
                copied: "¡Correo copiado al portapapeles!"
            },
            footer: {
                summary: "Ingeniero en Informática enfocado en crear soluciones web escalables, robustas y eficientes.",
                navTitle: "Navegación",
                quote: '"Si puedes imaginarlo, puedes programarlo"',
                rights: "© 2026 José López."
            }
        },
        en: {
            metaTitle: "José López - Computer Engineer | Full Stack Developer",
            nav: {
                home: "Home",
                about: "About",
                experience: "Experience",
                contact: "Contact"
            },
            hero: {
                badge: "Turning ideas into code",
                greeting: "Hi, I'm",
                stack: "Laravel | PHP | Python | Django | Odoo | Next.js | Databases (SQL Server, MySQL & PostgreSQL) | HTML | JavaScript",
                downloadCv: "Download CV",
                viewExperience: "View experience",
                typerWords: [
                    "Computer Engineer",
                    "Web Developer",
                    "Backend Developer",
                    "Full Stack Developer"
                ]
            },
            about: {
                title: "About Me",
                role: "Computer Engineer",
                headline: "Full Stack Developer",
                p1: 'Specialized in building robust web solutions with <strong class="text-primary-600 dark:text-primary-400 font-bold">Laravel, PHP, Python, Django, and Odoo</strong>. My background focuses on designing efficient architectures and managing databases such as <strong class="text-primary-600 dark:text-primary-400 font-bold">SQL Server, MySQL, and PostgreSQL</strong>, always following industry best practices.',
                p2: "I stand out for an analytical approach to system diagnostics and a strong ability to turn technical requirements into scalable products. I am a firm believer in continuous learning and agility, collaborating effectively in multidisciplinary teams under modern methodologies.",
                catBackend: "Backend",
                catFrontend: "Frontend",
                catDatabases: "Databases",
                catVersioning: "Version Control",
                catManagement: "Management",
                catTools: "Tools"
            },
            exp: {
                title: "Experience",
                alcaravan: {
                    role: "Web Developer",
                    date: "Aug 2025 - Present • Venezuela",
                    b1: '<a href="https://impuestosroscio.guiriri.com.ve/" target="_blank" rel="noopener noreferrer" class="font-semibold text-primary-600 dark:text-primary-400 hover:underline">Güirirí</a> Platform (Odoo): municipal tax management system actively used by multiple municipalities nationwide, automating online taxpayer procedures.',
                    b2: '<a href="https://sergidesol.com.ve/login/?next=/" target="_blank" rel="noopener noreferrer" class="font-semibold text-primary-600 dark:text-primary-400 hover:underline">SERGIDESOL</a> Platform (Django): Decentralized Service for Integrated Solid Waste Management; comprehensive municipal billing and collection system (taxpayers, properties, invoicing, cashier desks, tax withholdings, self-service portal, and reports) built with PostgreSQL, Tailwind CSS, and Docker.',
                    b3: "Team collaboration using Python, Django, Odoo, Next.js, and PostgreSQL for ongoing support, evolution, and scalability across both ecosystems."
                },
                unerg: {
                    role: "Web Developer",
                    date: "May 2025 - Jul 2025 • Venezuela",
                    b1: "Full re-engineering of the University Dental Clinical System using PHP and Laravel 12 to streamline operations.",
                    b2: "Development of interactive interfaces with Livewire 3 and Tailwind CSS for clinical record management.",
                    b3: "MySQL database management to ensure the integrity and security of academic and patient records."
                },
                tappers: {
                    role: "DB Consultant / Developer",
                    date: "Sep 2022 - Jun 2023 • Colombia (Remote)",
                    b1: "SQL Server database consulting and administration, optimizing complex queries.",
                    b2: "Web development and specialized technical support in PHP, diagnosing and resolving operational incidents.",
                    b3: "Data analysis and generation of strategic reports for management decision-making."
                },
                ivss: {
                    role: "Web Developer (Internship)",
                    date: "Apr 2021 - Jun 2021 • Venezuela",
                    b1: "Development of a comprehensive web system with PHP (Laravel) and MySQL for medical appointments and pharmacy inventory.",
                    b2: "Digitization of manual records, migrating information into secure relational databases.",
                    b3: "Optimization of response times when searching medical histories."
                }
            },
            contact: {
                title: "Contact",
                nameLabel: "Name",
                namePlaceholder: "Your name",
                emailLabel: "Email",
                emailPlaceholder: "you@example.com",
                messageLabel: "Message",
                messagePlaceholder: "How can I help you?",
                send: "Send message",
                sending: "Sending...",
                success: "Thank you! Your message has been sent successfully.",
                error: "There was a problem sending your message. Please try again.",
                copied: "Email copied to clipboard!"
            },
            footer: {
                summary: "Computer Engineer focused on building scalable, robust, and efficient web solutions.",
                navTitle: "Navigation",
                quote: '"If you can imagine it, you can program it"',
                rights: "© 2026 José López."
            }
        }
    };

    function getNestedValue(obj, path) {
        return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), obj);
    }

    function getCurrentLang() {
        const stored = localStorage.getItem('lang');
        if (stored === 'en' || stored === 'es') return stored;
        return 'es';
    }

    function setLanguage(lang) {
        const targetLang = lang === 'en' ? 'en' : 'es';
        const dict = translations[targetLang];
        localStorage.setItem('lang', targetLang);
        document.documentElement.lang = targetLang;
        document.title = dict.metaTitle;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = getNestedValue(dict, key);
            if (val !== null) el.textContent = val;
        });

        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            const val = getNestedValue(dict, key);
            if (val !== null) el.innerHTML = val;
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const val = getNestedValue(dict, key);
            if (val !== null) el.setAttribute('placeholder', val);
        });

        const langLabel = document.getElementById('langLabel');
        if (langLabel) {
            langLabel.textContent = targetLang === 'es' ? 'EN' : 'ES';
        }

        const langToggleBtn = document.getElementById('langToggle');
        if (langToggleBtn) {
            langToggleBtn.setAttribute(
                'aria-label',
                targetLang === 'es' ? 'Switch language to English' : 'Cambiar idioma a Español'
            );
        }

        if (window.TextTyper && typeof window.TextTyper.setWords === 'function') {
            window.TextTyper.setWords(dict.hero.typerWords);
        }
    }

    function toggleLanguage() {
        const next = getCurrentLang() === 'es' ? 'en' : 'es';
        setLanguage(next);
    }

    window.I18N_DICT = translations;
    window.getCurrentLang = getCurrentLang;
    window.setLanguage = setLanguage;
    window.toggleLanguage = toggleLanguage;

    document.addEventListener('DOMContentLoaded', function () {
        const langToggleBtn = document.getElementById('langToggle');
        if (langToggleBtn) {
            langToggleBtn.addEventListener('click', toggleLanguage);
        }
        setLanguage(getCurrentLang());
    });
})();
