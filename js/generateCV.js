// js/generateCV.js

window.generateCV = async function () {
    if (typeof jspdf === 'undefined') {
        alert('Error: jsPDF library is not loaded.');
        return;
    }

    const lang = typeof window.getCurrentLang === 'function' ? window.getCurrentLang() : 'es';

    const cvContent = {
        es: {
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
                ["Control de Versiones", "Git, GitHub, GitLab"],
                ["Gestión y Com.", "Trello, OpenProject, Google Meet, Zoom"],
                ["Otros", "Docker, Postman"]
            ],
            experiences: [
                {
                    role: "Desarrollador Web",
                    company: "SISTEMAS TECNOLÓGICOS ALCARAVÁN, S.A",
                    date: "Ago 2025 - Presente • Venezuela",
                    bullets: [
                        "Plataforma 'Güirirí' (Odoo): sistema de gestión tributaria municipal utilizado activamente por diversas alcaldías a nivel nacional para la automatización de trámites en línea.",
                        "Plataforma SERGIDESOL (Django): Servicio Desconcentrado de Gestión Integral de los Desechos Sólidos; desarrollo en sistema integral de recaudación y gestión municipal (contribuyentes, inmuebles, facturación, taquillas, retenciones fiscales y reportes) con PostgreSQL, Tailwind CSS y Docker.",
                        "Colaboración con el equipo utilizando Python, Django, Odoo, Next.js y PostgreSQL para el soporte y escalabilidad de ambos sistemas."
                    ]
                },
                {
                    role: "Desarrollador Web",
                    company: "UNERG",
                    date: "May 2025 - Jul 2025 • Venezuela",
                    bullets: [
                        "Reingeniería integral del Sistema Clínico Odontológico utilizando PHP y Laravel 12 para optimizar la atención y gestión administrativa.",
                        "Desarrollo de interfaces interactivas con Livewire 3 y Tailwind CSS para la administración de historias clínicas y evaluación académica.",
                        "Gestión de datos con MySQL para proteger la información sensible."
                    ]
                },
                {
                    role: "Consultor BD / Desarrollador Web",
                    company: "TAP SOLUTIONS S.A.S",
                    date: "Sep 2022 - Jun 2023 • Colombia (Remoto)",
                    bullets: [
                        "Consultoría y administración de bases de datos SQL Server, realizando mantenimiento y optimización de consultas para asegurar la integridad de la información.",
                        "Desarrollo web y soporte técnico especializado en PHP, diagnosticando y resolviendo incidencias para garantizar la continuidad operativa de la plataforma.",
                        "Ejecución de análisis de datos y generación de informes estratégicos para la toma de decisiones empresariales."
                    ]
                },
                {
                    role: "Desarrollador Web (Pasantía)",
                    company: "IVSS HOSPITAL “JOSÉ ANTONIO VARGAS”",
                    date: "Abr 2021 - Jun 2021 • Venezuela",
                    bullets: [
                        "Desarrollo de un sistema web integral utilizando PHP (Laravel) y MySQL para la automatización de citas médicas, control de inventario en farmacia y gestión de archivos.",
                        "Digitalización de registros manuales vulnerables, migrando la información a una base de datos segura para garantizar la integridad del inventario y los datos de pacientes.",
                        "Optimización de los tiempos de respuesta en la búsqueda de historias médicas y generación de reportes automatizados en PDF para la toma de decisiones."
                    ]
                }
            ],
            fileName: "CV_Jose_Lopez_ES.pdf"
        },
        en: {
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
                ["Version Control", "Git, GitHub, GitLab"],
                ["Management & Comm.", "Trello, OpenProject, Google Meet, Zoom"],
                ["Tools", "Docker, Postman"]
            ],
            experiences: [
                {
                    role: "Web Developer",
                    company: "SISTEMAS TECNOLÓGICOS ALCARAVÁN, S.A",
                    date: "Aug 2025 - Present • Venezuela",
                    bullets: [
                        "'Güirirí' Platform (Odoo): municipal tax management system actively used by multiple municipalities nationwide to automate online taxpayer procedures.",
                        "SERGIDESOL Platform (Django): Decentralized Service for Integrated Solid Waste Management; development on a comprehensive municipal billing and collection system (taxpayers, properties, invoicing, cashier desks, tax withholdings, and reports) with PostgreSQL, Tailwind CSS, and Docker.",
                        "Team collaboration using Python, Django, Odoo, Next.js, and PostgreSQL for ongoing support and scalability across both platforms."
                    ]
                },
                {
                    role: "Web Developer",
                    company: "UNERG",
                    date: "May 2025 - Jul 2025 • Venezuela",
                    bullets: [
                        "Full re-engineering of the University Dental Clinical System using PHP and Laravel 12 to optimize patient care and administrative workflows.",
                        "Development of interactive interfaces with Livewire 3 and Tailwind CSS for clinical record management and academic evaluation.",
                        "MySQL database management to safeguard sensitive patient and academic data."
                    ]
                },
                {
                    role: "DB Consultant / Web Developer",
                    company: "TAP SOLUTIONS S.A.S",
                    date: "Sep 2022 - Jun 2023 • Colombia (Remote)",
                    bullets: [
                        "SQL Server database consulting and administration, performing maintenance and query optimization to ensure data integrity.",
                        "Web development and specialized PHP technical support, diagnosing and resolving incidents to guarantee platform uptime.",
                        "Data analysis and generation of strategic reports for management decision-making."
                    ]
                },
                {
                    role: "Web Developer (Internship)",
                    company: "IVSS HOSPITAL “JOSÉ ANTONIO VARGAS”",
                    date: "Apr 2021 - Jun 2021 • Venezuela",
                    bullets: [
                        "Developed a comprehensive web system using PHP (Laravel) and MySQL for medical appointment scheduling, pharmacy inventory control, and record management.",
                        "Digitized vulnerable manual records, migrating data into a secure relational database to protect inventory and patient records.",
                        "Optimized search response times for medical histories and implemented automated PDF report generation."
                    ]
                }
            ],
            fileName: "CV_Jose_Lopez_EN.pdf"
        }
    };

    const data = cvContent[lang === 'en' ? 'en' : 'es'];
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');

    // --- CONFIGURACIÓN DE ESTILO ---
    const primaryColor = [31, 41, 55];
    const accentColor = [75, 85, 99];
    const highlightColor = [37, 99, 235];

    const margin = 15;
    const gutter = 8;
    const leftColWidth = 60;
    const rightColStart = margin + leftColWidth + gutter;
    const rightColWidth = 210 - margin - rightColStart;

    let cursorY = 20;

    const writeWrappedText = (text, x, y, maxWidth, fontSize, isBold = false, color = [0, 0, 0], align = 'left') => {
        doc.setFontSize(fontSize);
        doc.setTextColor(...color);
        doc.setFont("helvetica", isBold ? "bold" : "normal");

        const lines = doc.splitTextToSize(text, maxWidth);
        doc.text(lines, x, y, { align: align });

        return lines.length * (fontSize * 0.3527 * 1.3);
    };

    // --- 1. ENCABEZADO ---
    doc.setFontSize(22);
    doc.setTextColor(...primaryColor);
    doc.setFont("helvetica", "bold");
    doc.text("JOSÉ LÓPEZ", margin, cursorY);

    cursorY += 7;
    doc.setFontSize(11);
    doc.setTextColor(...highlightColor);
    doc.setFont("helvetica", "bold");
    doc.text(data.subtitle, margin, cursorY);

    cursorY += 6;
    doc.setFontSize(9);
    doc.setTextColor(...accentColor);
    doc.setFont("helvetica", "normal");

    doc.text("Email: joselm2490@gmail.com   |   Tel: +58 414 5883454", margin, cursorY);
    cursorY += 4.5;
    doc.text(`LinkedIn: linkedin.com/in/joselm2490   |   ${data.locationLabel}`, margin, cursorY);

    cursorY += 6;
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, cursorY, 210 - margin, cursorY);
    cursorY += 6;

    const columnStartTop = cursorY;

    // --- 2. COLUMNA IZQUIERDA ---
    let leftY = columnStartTop;

    const renderSectionTitle = (text, x, y) => {
        doc.setFontSize(10);
        doc.setTextColor(...primaryColor);
        doc.setFont("helvetica", "bold");
        doc.text(text.toUpperCase(), x, y);
        doc.setDrawColor(...highlightColor);
        doc.line(x, y + 1, x + 15, y + 1);
        return 7;
    };

    leftY += renderSectionTitle(data.sectionProfile, margin, leftY);
    leftY += writeWrappedText(data.profileText, margin, leftY, leftColWidth, 8.5, false, [60, 60, 60]);
    leftY += 6;

    leftY += renderSectionTitle(data.sectionSkills, margin, leftY);

    const renderSkillGroup = (title, items) => {
        doc.setFontSize(9);
        doc.setTextColor(...primaryColor);
        doc.setFont("helvetica", "bold");
        doc.text(title, margin, leftY);
        leftY += 4;

        doc.setFontSize(8.5);
        doc.setTextColor(...accentColor);
        doc.setFont("helvetica", "normal");
        const height = writeWrappedText(items, margin, leftY, leftColWidth, 8.5);
        leftY += height + 3;
    };

    data.skills.forEach(([title, items]) => renderSkillGroup(title, items));

    // --- 3. COLUMNA DERECHA ---
    let rightY = columnStartTop;
    rightY += renderSectionTitle(data.sectionExperience, rightColStart, rightY);

    const renderExperience = (role, company, date, bullets) => {
        doc.setFontSize(10.5);
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "bold");
        doc.text(role, rightColStart, rightY);
        rightY += 4.5;

        doc.setFontSize(8.5);
        doc.setTextColor(100, 100, 100);
        doc.setFont("helvetica", "italic");
        doc.text(date, rightColStart, rightY);
        rightY += 5;

        doc.setFontSize(9.5);
        doc.setTextColor(...highlightColor);
        doc.setFont("helvetica", "bold");
        doc.text(company, rightColStart, rightY);
        rightY += 5;

        doc.setFontSize(9);
        doc.setTextColor(50, 50, 50);
        doc.setFont("helvetica", "normal");

        bullets.forEach(bullet => {
            doc.text("•", rightColStart, rightY);
            const height = writeWrappedText(bullet, rightColStart + 4, rightY, rightColWidth - 4, 9);
            rightY += height + 1.5;
        });

        rightY += 3;
    };

    data.experiences.forEach(exp => {
        renderExperience(exp.role, exp.company, exp.date, exp.bullets);
    });

    doc.save(data.fileName);
};
