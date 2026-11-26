// js/data.js — Single source of truth for Portfolio UI & PDF CV

window.PORTFOLIO_DATA = {
    es: {
        metaTitle: "José López - Ingeniero en Informática",
        nav: {
            home: "Inicio",
            projects: "Proyectos",
            experience: "Experiencia",
            about: "Sobre Mí",
            contact: "Contacto"
        },
        hero: {
            badge: "Disponible para proyectos remotos",
            greeting: "Hola, soy",
            summary: "Desarrollo aplicaciones web escalables con Django, Odoo, Laravel y Next.js, respaldadas por arquitecturas sólidas en PostgreSQL, MySQL y SQL Server.",
            downloadCv: "Descargar CV",
            viewProjects: "Ver proyectos",
            typerWords: [
                "Ingeniero en Informática",
                "Desarrollador Web",
                "Backend Developer",
                "Full Stack Developer"
            ]
        },
        projects: {
            title: "Proyectos Destacados",
            liveBtn: "Ver plataforma",
            privateBadge: "Privado / Producción",
            items: [
                {
                    badge: "Producción • Sector Público",
                    title: "SERGIDESOL",
                    description: "Sistema integral de recaudación y gestión municipal (contribuyentes, inmuebles, facturación, taquillas, retenciones fiscales, portal de autogestión y reportes).",
                    stack: ["Python", "Django", "PostgreSQL", "Tailwind CSS", "Docker"],
                    url: "https://sergidesol.com.ve/login/?next=/"
                },
                {
                    badge: "Producción • Multialcaldía",
                    title: "Plataforma Güirirí",
                    description: "Sistema de gestión tributaria municipal utilizado activamente por diversas alcaldías a nivel nacional, automatizando trámites y pagos en línea para el contribuyente.",
                    stack: ["Odoo", "Python", "Next.js", "PostgreSQL", "Docker"],
                    url: "https://impuestosroscio.guiriri.com.ve/"
                },
                {
                    badge: "Institucional • Salud / Académico",
                    title: "Sistema Clínico Odontológico",
                    description: "Reingeniería integral para la UNERG enfocada en la administración segura de historias clínicas, atención de pacientes y evaluación académica en tiempo real.",
                    stack: ["PHP", "Laravel 12", "Livewire 3", "Tailwind CSS", "MySQL"],
                    url: null
                }
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
            catDevops: "DevOps y Flujo"
        },
        exp: {
            title: "Experiencia",
            alcaravan: {
                role: "Desarrollador Web",
                company: "SISTEMAS TECNOLÓGICOS ALCARAVÁN, S.A",
                date: "Ago 2025 - Presente • Venezuela",
                b1: 'Plataforma <a href="https://impuestosroscio.guiriri.com.ve/" target="_blank" rel="noopener noreferrer" class="font-semibold text-primary-600 dark:text-primary-400 hover:underline">Güirirí</a> (Odoo): sistema de gestión tributaria municipal utilizado activamente por diversas alcaldías a nivel nacional, automatizando trámites en línea para el contribuyente.',
                b2: 'Plataforma <a href="https://sergidesol.com.ve/login/?next=/" target="_blank" rel="noopener noreferrer" class="font-semibold text-primary-600 dark:text-primary-400 hover:underline">SERGIDESOL</a> (Django): Servicio Desconcentrado de Gestión Integral de los Desechos Sólidos; sistema integral de recaudación y gestión municipal (contribuyentes, inmuebles, facturación, taquillas, retenciones fiscales, portal de autogestión y reportes) con PostgreSQL, Tailwind CSS y Docker.',
                b3: "Colaboración con el equipo utilizando Python, Django, Odoo, Next.js y PostgreSQL para el soporte, evolución y escalabilidad de ambos ecosistemas.",
                cvBullets: [
                    "Plataforma 'Güirirí' (Odoo): sistema de gestión tributaria municipal utilizado activamente por diversas alcaldías a nivel nacional para la automatización de trámites en línea.",
                    "Plataforma SERGIDESOL (Django): Servicio Desconcentrado de Gestión Integral de los Desechos Sólidos; desarrollo en sistema integral de recaudación y gestión municipal (contribuyentes, inmuebles, facturación, taquillas, retenciones fiscales y reportes) con PostgreSQL, Tailwind CSS y Docker.",
                    "Colaboración con el equipo utilizando Python, Django, Odoo, Next.js y PostgreSQL para el soporte y escalabilidad de ambos sistemas."
                ]
            },
            unerg: {
                role: "Desarrollador Web",
                company: "UNERG",
                date: "May 2025 - Jul 2025 • Venezuela",
                b1: "Reingeniería integral del Sistema Clínico Odontológico utilizando PHP y Laravel 12 para optimizar la gestión.",
                b2: "Desarrollo de interfaces interactivas con Livewire 3 y Tailwind CSS para la administración de historias clínicas.",
                b3: "Gestión de bases de datos con MySQL para asegurar la integridad y seguridad de la información académica.",
                cvBullets: [
                    "Reingeniería integral del Sistema Clínico Odontológico utilizando PHP y Laravel 12 para optimizar la atención y gestión administrativa.",
                    "Desarrollo de interfaces interactivas con Livewire 3 y Tailwind CSS para la administración de historias clínicas y evaluación académica.",
                    "Gestión de datos con MySQL para proteger la información sensible."
                ]
            },
            tappers: {
                role: "Consultor BD / Desarrollador",
                company: "TAP SOLUTIONS S.A.S",
                date: "Sep 2022 - Jun 2023 • Colombia (Remoto)",
                b1: "Consultoría y administración de bases de datos SQL Server, optimizando consultas complejas.",
                b2: "Desarrollo web y soporte técnico especializado en PHP, diagnosticando y resolviendo incidencias operativas.",
                b3: "Ejecución de análisis de datos y generación de informes estratégicos para la gerencia.",
                cvBullets: [
                    "Consultoría y administración de bases de datos SQL Server, realizando mantenimiento y optimización de consultas para asegurar la integridad de la información.",
                    "Desarrollo web y soporte técnico especializado en PHP, diagnosticando y resolviendo incidencias para garantizar la continuidad operativa de la plataforma.",
                    "Ejecución de análisis de datos y generación de informes estratégicos para la toma de decisiones empresariales."
                ]
            },
            ivss: {
                role: "Desarrollador Web (Pasantía)",
                company: "IVSS HOSPITAL “JOSÉ ANTONIO VARGAS”",
                date: "Abr 2021 - Jun 2021 • Venezuela",
                b1: "Desarrollo de un sistema web integral con PHP (Laravel) y MySQL para citas e inventario.",
                b2: "Digitalización de registros manuales, migrando la información a bases de datos seguras.",
                b3: "Optimización de los tiempos de respuesta en la búsqueda de historias médicas.",
                cvBullets: [
                    "Desarrollo de un sistema web integral utilizando PHP (Laravel) y MySQL para la automatización de citas médicas, control de inventario en farmacia y gestión de archivos.",
                    "Digitalización de registros manuales vulnerables, migrando la información a una base de datos segura para garantizar la integridad del inventario y los datos de pacientes.",
                    "Optimización de los tiempos de respuesta en la búsqueda de historias médicas y generación de reportes automatizados en PDF para la toma de decisiones."
                ]
            }
        },
        contact: {
            title: "Contacto",
            copyBtn: "Copiar correo",
            location: "Palo Negro, Venezuela (Remoto)",
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
        },
        cv: {
            subtitle: "INGENIERO EN INFORMÁTICA | DESARROLLADOR FULL STACK",
            locationLabel: "Ubicación: Palo Negro, Venezuela",
            sectionProfile: "PERFIL",
            sectionSkills: "HABILIDADES",
            sectionExperience: "EXPERIENCIA PROFESIONAL",
            profileText: "Desarrollador Full Stack con experiencia en desarrollo web utilizando Laravel, PHP, Python, Django y Odoo, y gestión de bases de datos (SQL Server, MySQL y PostgreSQL). Comprometido con la resolución de problemas técnicos, capacidad analítica y adaptación a metodologías ágiles.",
            skills: [
                ["Backend", "PHP, Laravel, Livewire, Python, Django, Odoo"],
                ["Frontend", "HTML5, Tailwind CSS, Bootstrap CSS, JavaScript, Next.js"],
                ["Bases de Datos", "MySQL, SQL Server, PostgreSQL"],
                ["DevOps y Flujo", "Docker, Git, GitHub, GitLab, Postman, Trello, OpenProject"]
            ],
            fileName: "CV_Jose_Lopez_ES.pdf"
        }
    },
    en: {
        metaTitle: "José López - Computer Engineer | Full Stack Developer",
        nav: {
            home: "Home",
            projects: "Projects",
            experience: "Experience",
            about: "About",
            contact: "Contact"
        },
        hero: {
            badge: "Available for remote work",
            greeting: "Hi, I'm",
            summary: "I build scalable web applications with Django, Odoo, Laravel, and Next.js, backed by solid PostgreSQL, MySQL, and SQL Server architectures.",
            downloadCv: "Download CV",
            viewProjects: "View projects",
            typerWords: [
                "Computer Engineer",
                "Web Developer",
                "Backend Developer",
                "Full Stack Developer"
            ]
        },
        projects: {
            title: "Featured Projects",
            liveBtn: "Visit platform",
            privateBadge: "Private / Production",
            items: [
                {
                    badge: "Production • Public Sector",
                    title: "SERGIDESOL",
                    description: "Comprehensive municipal billing and collection system (taxpayers, properties, invoicing, cashier desks, tax withholdings, self-service portal, and reports).",
                    stack: ["Python", "Django", "PostgreSQL", "Tailwind CSS", "Docker"],
                    url: "https://sergidesol.com.ve/login/?next=/"
                },
                {
                    badge: "Production • Multi-Municipality",
                    title: "Güirirí Platform",
                    description: "Municipal tax management platform actively used by multiple municipalities nationwide, automating online taxpayer procedures and payments.",
                    stack: ["Odoo", "Python", "Next.js", "PostgreSQL", "Docker"],
                    url: "https://impuestosroscio.guiriri.com.ve/"
                },
                {
                    badge: "Institutional • Healthcare",
                    title: "Dental Clinical System",
                    description: "Full re-engineering for UNERG focused on secure clinical record management, patient scheduling, and real-time academic evaluation.",
                    stack: ["PHP", "Laravel 12", "Livewire 3", "Tailwind CSS", "MySQL"],
                    url: null
                }
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
            catDevops: "DevOps & Workflow"
        },
        exp: {
            title: "Experience",
            alcaravan: {
                role: "Web Developer",
                company: "SISTEMAS TECNOLÓGICOS ALCARAVÁN, S.A",
                date: "Aug 2025 - Present • Venezuela",
                b1: '<a href="https://impuestosroscio.guiriri.com.ve/" target="_blank" rel="noopener noreferrer" class="font-semibold text-primary-600 dark:text-primary-400 hover:underline">Güirirí</a> Platform (Odoo): municipal tax management system actively used by multiple municipalities nationwide, automating online taxpayer procedures.',
                b2: '<a href="https://sergidesol.com.ve/login/?next=/" target="_blank" rel="noopener noreferrer" class="font-semibold text-primary-600 dark:text-primary-400 hover:underline">SERGIDESOL</a> Platform (Django): Decentralized Service for Integrated Solid Waste Management; comprehensive municipal billing and collection system (taxpayers, properties, invoicing, cashier desks, tax withholdings, self-service portal, and reports) built with PostgreSQL, Tailwind CSS, and Docker.',
                b3: "Team collaboration using Python, Django, Odoo, Next.js, and PostgreSQL for ongoing support, evolution, and scalability across both ecosystems.",
                cvBullets: [
                    "'Güirirí' Platform (Odoo): municipal tax management system actively used by multiple municipalities nationwide to automate online taxpayer procedures.",
                    "SERGIDESOL Platform (Django): Decentralized Service for Integrated Solid Waste Management; development on a comprehensive municipal billing and collection system (taxpayers, properties, invoicing, cashier desks, tax withholdings, and reports) with PostgreSQL, Tailwind CSS, and Docker.",
                    "Team collaboration using Python, Django, Odoo, Next.js, and PostgreSQL for ongoing support and scalability across both platforms."
                ]
            },
            unerg: {
                role: "Web Developer",
                company: "UNERG",
                date: "May 2025 - Jul 2025 • Venezuela",
                b1: "Full re-engineering of the University Dental Clinical System using PHP and Laravel 12 to streamline operations.",
                b2: "Development of interactive interfaces with Livewire 3 and Tailwind CSS for clinical record management.",
                b3: "MySQL database management to ensure the integrity and security of academic and patient records.",
                cvBullets: [
                    "Full re-engineering of the University Dental Clinical System using PHP and Laravel 12 to optimize patient care and administrative workflows.",
                    "Development of interactive interfaces with Livewire 3 and Tailwind CSS for clinical record management and academic evaluation.",
                    "MySQL database management to safeguard sensitive patient and academic data."
                ]
            },
            tappers: {
                role: "DB Consultant / Developer",
                company: "TAP SOLUTIONS S.A.S",
                date: "Sep 2022 - Jun 2023 • Colombia (Remote)",
                b1: "SQL Server database consulting and administration, optimizing complex queries.",
                b2: "Web development and specialized technical support in PHP, diagnosing and resolving operational incidents.",
                b3: "Data analysis and generation of strategic reports for management decision-making.",
                cvBullets: [
                    "SQL Server database consulting and administration, performing maintenance and query optimization to ensure data integrity.",
                    "Web development and specialized PHP technical support, diagnosing and resolving incidents to guarantee platform uptime.",
                    "Data analysis and generation of strategic reports for management decision-making."
                ]
            },
            ivss: {
                role: "Web Developer (Internship)",
                company: "IVSS HOSPITAL “JOSÉ ANTONIO VARGAS”",
                date: "Apr 2021 - Jun 2021 • Venezuela",
                b1: "Development of a comprehensive web system with PHP (Laravel) and MySQL for medical appointments and pharmacy inventory.",
                b2: "Digitization of manual records, migrating information into secure relational databases.",
                b3: "Optimization of response times when searching medical histories.",
                cvBullets: [
                    "Developed a comprehensive web system using PHP (Laravel) and MySQL for medical appointment scheduling, pharmacy inventory control, and record management.",
                    "Digitized vulnerable manual records, migrating data into a secure relational database to protect inventory and patient records.",
                    "Optimized search response times for medical histories and implemented automated PDF report generation."
                ]
            }
        },
        contact: {
            title: "Contact",
            copyBtn: "Copy email",
            location: "Palo Negro, Venezuela (Remote)",
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
        },
        cv: {
            subtitle: "COMPUTER ENGINEER | FULL STACK DEVELOPER",
            locationLabel: "Location: Palo Negro, Venezuela",
            sectionProfile: "PROFILE",
            sectionSkills: "SKILLS",
            sectionExperience: "PROFESSIONAL EXPERIENCE",
            profileText: "Full Stack Developer experienced in building web applications with Laravel, PHP, Python, Django, and Odoo, and managing relational databases (SQL Server, MySQL, PostgreSQL). Strong analytical problem-solving skills and seamless adaptation to agile workflows.",
            skills: [
                ["Backend", "PHP, Laravel, Livewire, Python, Django, Odoo"],
                ["Frontend", "HTML5, Tailwind CSS, Bootstrap CSS, JavaScript, Next.js"],
                ["Databases", "MySQL, SQL Server, PostgreSQL"],
                ["DevOps & Workflow", "Docker, Git, GitHub, GitLab, Postman, Trello, OpenProject"]
            ],
            fileName: "CV_Jose_Lopez_EN.pdf"
        }
    }
};
