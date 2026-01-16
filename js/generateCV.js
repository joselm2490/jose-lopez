// js/generateCV.js

document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadCV'); // Asegúrate de que tu botón tenga este ID o la clase que usaste en el HTML
    // En tu HTML el botón tiene onclick="generateCV()", así que la función debe ser global.
});

// Hacemos la función global para que funcione con el onclick del HTML
window.generateCV = async function() {
    if (typeof jspdf === 'undefined') {
        alert('Error: La librería jsPDF no está cargada.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');

    // --- CONFIGURACIÓN DE ESTILO ---
    const primaryColor = [31, 41, 55];    // Gris oscuro (Tailwind gray-800)
    const accentColor = [75, 85, 99];     // Gris medio (Tailwind gray-600)
    const highlightColor = [37, 99, 235]; // Azul (Primary-600 aproximado)
    
    const margin = 15;
    const gutter = 8; 
    const leftColWidth = 60; 
    const rightColStart = margin + leftColWidth + gutter;
    const rightColWidth = 210 - margin - rightColStart;
    
    let cursorY = 20;

    // --- HELPER: Escribir texto con ajuste de línea ---
    const writeWrappedText = (text, x, y, maxWidth, fontSize, isBold = false, color = [0,0,0], align = 'left') => {
        doc.setFontSize(fontSize);
        doc.setTextColor(...color);
        doc.setFont("helvetica", isBold ? "bold" : "normal");
        
        const lines = doc.splitTextToSize(text, maxWidth);
        doc.text(lines, x, y, { align: align });
        
        // Calcular altura: (número de líneas * tamaño de fuente * conversión a mm * interlineado)
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
    doc.text("INGENIERO EN INFORMÁTICA | DESARROLLADOR FULL STACK", margin, cursorY);

    cursorY += 6;
    doc.setFontSize(9);
    doc.setTextColor(...accentColor);
    doc.setFont("helvetica", "normal");
    
    // Datos de contacto extraídos del HTML
    const contactLine1 = "Email: joselm2490@gmail.com   |   Tel: +58 414 5883454";
    const contactLine2 = "LinkedIn: linkedin.com/in/joselm2490   |   Ubicación: Palo Negro, Venezuela";
    
    doc.text(contactLine1, margin, cursorY);
    cursorY += 4.5;
    doc.text(contactLine2, margin, cursorY);

    cursorY += 6;
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, cursorY, 210 - margin, cursorY);
    cursorY += 6;

    const columnStartTop = cursorY;

    // ==========================================
    // --- 2. COLUMNA IZQUIERDA (Perfil y Skills) ---
    // ==========================================
    let leftY = columnStartTop;

    // Títulos de sección
    const renderSectionTitle = (text, x, y) => {
        doc.setFontSize(10);
        doc.setTextColor(...primaryColor);
        doc.setFont("helvetica", "bold");
        doc.text(text.toUpperCase(), x, y);
        doc.setDrawColor(...highlightColor);
        doc.line(x, y + 1, x + 15, y + 1); // Pequeña línea azul decorativa
        return 7;
    };

    // --- PERFIL ---
    leftY += renderSectionTitle("PERFIL", margin, leftY);
    const profileText = "Desarrollador Full Stack con experiencia en desarrollo web utilizando Laravel, PHP, Python y Odoo, y gestión de bases de datos (SQL Server, MySQL y PostgreSQL). Comprometido con la resolución de problemas técnicos, capacidad analítica y adaptación a metodologías ágiles.";
    
    leftY += writeWrappedText(profileText, margin, leftY, leftColWidth, 8.5, false, [60,60,60]);
    leftY += 6;

    // --- HABILIDADES ---
    leftY += renderSectionTitle("HABILIDADES", margin, leftY);

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

    renderSkillGroup("Backend", "PHP, Laravel, Livewire, Python, Odoo");
    renderSkillGroup("Frontend", "HTML5, Tailwind CSS, Bootstrap CSS, JavaScript, Next.js");
    renderSkillGroup("Bases de Datos", "MySQL, SQL Server, PostgreSQL");
    renderSkillGroup("Control de Versiones", "Git, GitHub, GitLab");
    renderSkillGroup("Gestión y Com.", "Trello, OpenProject, Google Meet, Zoom");
    renderSkillGroup("Otros", "Docker, Postman");

    // ==========================================
    // --- 3. COLUMNA DERECHA (Experiencia) ---
    // ==========================================
    let rightY = columnStartTop;

    rightY += renderSectionTitle("EXPERIENCIA PROFESIONAL", rightColStart, rightY);

    // FUNCIÓN EDITADA: Fecha y Ubicación ahora debajo del cargo para evitar sobreposición
    const renderExperience = (role, company, date, bullets) => {
        // Cargo
        doc.setFontSize(10.5);
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "bold");
        doc.text(role, rightColStart, rightY);
        rightY += 4.5;
        
        // Fecha y Ubicación (Debajo del cargo)
        doc.setFontSize(8.5);
        doc.setTextColor(100, 100, 100);
        doc.setFont("helvetica", "italic");
        doc.text(date, rightColStart, rightY);
        rightY += 5;

        // Empresa
        doc.setFontSize(9.5);
        doc.setTextColor(...highlightColor); 
        doc.setFont("helvetica", "bold");
        doc.text(company, rightColStart, rightY);
        rightY += 5;

        // Bullets (Lista)
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

    // DATA EXTRAÍDA DEL HTML
    
    // 1. Alcaraván
    renderExperience(
        "Desarrollador Web",
        "SISTEMAS TECNOLÓGICOS ALCARAVÁN, S.A",
        "Ago 2025 - Presente • Venezuela",
        [
            "Plataforma 'Güirirí', sistema de gestión tributaria municipal utilizado activamente por diversas alcaldías a nivel nacional.",
            "Implementación de funcionalidades para la automatización de trámites en línea, optimizando la gestión al contribuyente sobre la infraestructura existente.",
            "Colaboración con el equipo, utilizando Python, Odoo y Next.js para el soporte y escalabilidad del sistema."
        ]
    );

    // 2. UNERG
    renderExperience(
        "Desarrollador Web",
        "UNERG",
        "May 2025 - Jul 2025 • Venezuela",
        [
            "Reingeniería integral del Sistema Clínico Odontológico utilizando PHP y Laravel 12 para optimizar la atención y gestión administrativa.",
            "Desarrollo de interfaces interactivas con Livewire 3 y Tailwind CSS para la administración de historias clínicas y evaluación académica.",
            "Gestión de datos con MySQL para proteger la información sensible."
        ]
    );

    // 3. TAP SOLUTIONS S.A.S
    renderExperience(
        "Consultor BD / Desarrollador Web",
        "TAP SOLUTIONS S.A.S",
        "Sep 2022 - Jun 2023 • Colombia (Remoto)",
        [
            "Consultoría y administración de bases de datos SQL Server, realizando mantenimiento y optimización de consultas para asegurar la integridad de la información.",
            "Desarrollo web y soporte técnico especializado en PHP, diagnosticando y resolviendo incidencias para garantizar la continuidad operativa de la plataforma.",
            "Ejecución de análisis de datos y generación de informes estratégicos para la toma de decisiones empresariales."
        ]
    );

    // 4. IVSS
    renderExperience(
        "Desarrollador Web (Pasantía)",
        "IVSS HOSPITAL “JOSÉ ANTONIO VARGAS”",
        "Abr 2021 - Jun 2021 • Venezuela",
        [
            "Desarrollo de un sistema web integral utilizando PHP (Laravel) y MySQL para la automatización de citas médicas, control de inventario en farmacia y gestión de archivos.",
            "Digitalización de registros manuales vulnerables, migrando la información a una base de datos segura para garantizar la integridad del inventario y los datos de pacientes.",
            "Optimización de los tiempos de respuesta en la búsqueda de historias médicas y generación reportes automatizados en PDF para la toma de decisiones."
        ]
    );

    // Guardar PDF
    doc.save('CV_Jose_Lopez.pdf');
};