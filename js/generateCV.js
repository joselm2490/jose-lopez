// js/generateCV.js

window.generateCV = async function () {
    if (typeof jspdf === 'undefined') {
        alert('Error: jsPDF library is not loaded.');
        return;
    }

    const lang = typeof window.getCurrentLang === 'function' ? window.getCurrentLang() : 'es';
    const rootData = window.PORTFOLIO_DATA && window.PORTFOLIO_DATA[lang === 'en' ? 'en' : 'es'];
    if (!rootData || !rootData.cv) {
        alert('Error: Portfolio data is not loaded.');
        return;
    }

    const data = rootData.cv;
    const expKeys = ['alcaravan', 'unerg', 'tappers', 'ivss'];
    const experiences = expKeys.map(key => {
        const item = rootData.exp[key];
        return {
            role: item.role,
            company: item.company,
            date: item.date,
            bullets: item.cvBullets
        };
    });

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');

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

    experiences.forEach(exp => {
        renderExperience(exp.role, exp.company, exp.date, exp.bullets);
    });

    doc.save(data.fileName);
};
