// Función global para actualizar colores del SVG según el tema
function updateSVGColors() {
    const isDark = document.documentElement.classList.contains('dark');
    const svg = document.querySelector('.hero-illustration');

    if (!svg) {
        console.log('SVG illustration not found');
        return;
    }

    console.log('Updating SVG colors, dark mode:', isDark);

    // Colores MUY OSCUROS para las líneas (siempre visibles contra fondos claros)
    const veryDarkBlue1 = '#0c4a6e'; // Azul muy oscuro
    const veryDarkBlue2 = '#075985'; // Azul oscuro medio
    const veryDarkBlue3 = '#0369a1'; // Azul oscuro

    // Colores claros para elementos decorativos externos
    const lightBlue = '#7dd3fc';
    const softBlue = '#bae6fd';
    const whiteBlue = '#e0f2fe';

    if (isDark) {
        // --- MODO OSCURO del portafolio: Ventana CLARA con líneas OSCURAS ---
        console.log('=== DARK MODE: Light window + DARK lines (for contrast) ===');

        // 1. Fondo de la ventana (OSCURO)
        const codeWindow = document.getElementById('codeWindowBg');
        if (codeWindow) {
            codeWindow.setAttribute('fill', '#0f172a');
            console.log('Set code window to DARK (#0f172a)');
        }

        // 2. Líneas de código DENTRO del cuadro (CLARAS para verse contra fondo oscuro)
        svg.querySelectorAll('line').forEach((line, index) => {
            const colors = [lightBlue, softBlue, whiteBlue];
            line.setAttribute('stroke', colors[index % colors.length]);
        });
        console.log('Set lines to LIGHT colors (for contrast against dark slate window)');

        // 3. Textos (BLANCO EN MODO OSCURO)
        svg.querySelectorAll('text').forEach(text => {
            if (text.classList.contains('stay-white')) {
                text.setAttribute('fill', '#ffffff');
                text.setAttribute('filter', 'url(#soft-white-glow)');
            } else {
                text.setAttribute('fill', lightBlue);
            }
        });

        // 4. Elementos decorativos (BLANCO EN MODO OSCURO)
        svg.querySelectorAll('circle[stroke], path, polygon, rect[stroke]').forEach(el => {
            if (el.classList.contains('stay-white')) {
                if (el.getAttribute('fill') && el.getAttribute('fill') !== 'none') {
                    el.setAttribute('fill', '#ffffff');
                }
                if (el.getAttribute('stroke') && el.getAttribute('stroke') !== 'none') {
                    el.setAttribute('stroke', '#ffffff');
                }
                el.setAttribute('filter', 'url(#soft-white-glow)');
            } else {
                if (el.tagName === 'circle' && el.hasAttribute('stroke')) {
                    el.setAttribute('stroke', softBlue);
                } else if (el.tagName === 'path') {
                    el.setAttribute('stroke', whiteBlue);
                } else if (el.tagName === 'polygon') {
                    el.setAttribute('stroke', softBlue);
                }
            }
        });

    } else {
        // --- MODO CLARO del portafolio: Ventana CLARA con líneas OSCURAS ---
        console.log('=== LIGHT MODE: Light window + DARK lines ===');

        // 1. Fondo de la ventana (CLARO)
        const codeWindow = document.getElementById('codeWindowBg');
        if (codeWindow) {
            codeWindow.setAttribute('fill', '#f1f5f9'); // Slate 100
            console.log('Set code window to LIGHT (#f1f5f9)');
        }

        // 2. Líneas de código DENTRO del cuadro (OSCURAS)
        svg.querySelectorAll('line').forEach((line, index) => {
            const colors = [veryDarkBlue1, veryDarkBlue2, veryDarkBlue3];
            line.setAttribute('stroke', colors[index % colors.length]);
        });
        console.log('Set lines to DARK colors for light window');

        // 3. Textos (ADAPTIVE GRADIENT)
        svg.querySelectorAll('text').forEach(text => {
            if (text.classList.contains('stay-white')) {
                text.setAttribute('fill', 'url(#holoGradient)');
                text.setAttribute('filter', 'url(#glow)');
            } else {
                text.setAttribute('fill', veryDarkBlue1);
            }
        });

        // 4. Elementos decorativos (ADAPTIVE GRADIENT)
        svg.querySelectorAll('circle[stroke], path, polygon, rect[stroke]').forEach(el => {
            if (el.classList.contains('stay-white')) {
                if (el.getAttribute('fill') && el.getAttribute('fill') !== 'none') {
                    el.setAttribute('fill', 'url(#holoGradient)');
                }
                if (el.getAttribute('stroke') && el.getAttribute('stroke') !== 'none') {
                    el.setAttribute('stroke', 'url(#holoGradient)');
                    el.setAttribute('stroke-width', '3');
                }
                el.setAttribute('filter', 'url(#glow)');
            } else {
                if (el.tagName === 'circle' && el.hasAttribute('stroke')) {
                    el.setAttribute('stroke', veryDarkBlue2);
                } else if (el.tagName === 'path') {
                    el.setAttribute('stroke', veryDarkBlue1);
                } else if (el.tagName === 'polygon') {
                    el.setAttribute('stroke', veryDarkBlue2);
                }
            }
        });
    }

    // Mark SVG as initialized to trigger CSS fade-in
    if (svg) {
        svg.classList.add('colors-initialized');
    }
}

// Function is called from main.js after theme is initialized
// This ensures the dark class is applied before we update SVG colors
svg - theme.js