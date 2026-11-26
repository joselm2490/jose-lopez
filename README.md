# José López — Portafolio Personal

Portafolio web profesional de **José López**, Ingeniero en Informática y Desarrollador Full Stack.

## Características
- **Diseño adaptable (Dark / Light mode)** con ilustración SVG dinámica y fondo interactivo en Canvas (`SubstrateEffect`) optimizado para rendimiento y `prefers-reduced-motion`.
- **Soporte bilingüe (ES / EN)** con persistencia en `localStorage` y fuente única de datos (`js/data.js`).
- **Generación de CV en PDF** al instante desde el navegador usando `jsPDF` en el idioma activo (`CV_Jose_Lopez_ES.pdf` / `CV_Jose_Lopez_EN.pdf`).
- **Tailwind CSS compilado estáticamente** (`css/tailwind.css`) sin dependencias de CDN en tiempo de ejecución.

## Estructura del proyecto
```text
├── css/
│   ├── styles.css          # Estilos personalizados, animaciones y tema futurista
│   ├── tailwind-input.css  # Entrada de Tailwind CSS
│   └── tailwind.css        # CSS compilado y minificado
├── img/                    # Recursos gráficos y logos de tecnologías
├── js/
│   ├── data.js             # Fuente única de verdad (UI, proyectos, experiencia y CV)
│   ├── i18n.js             # Traducción dinámica ES / EN y renderizado de proyectos
│   ├── main.js             # Typewriter, canvas animado, tema, toast y formulario
│   ├── svg-theme.js        # Adaptación de colores de la ilustración SVG
│   └── generateCV.js       # Generador de CV en PDF con jsPDF
├── index.html
├── package.json
└── tailwind.config.js
```

## Desarrollo local
Si modificas clases de Tailwind en `index.html` o `js/`, recompila el CSS estático con:

```bash
npm install
npm run build:css
```
