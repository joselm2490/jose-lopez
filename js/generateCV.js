// js/generateCV.js
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadCV');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            generateCV();
        });
    } else {
        console.error('No se encontró el botón con ID "downloadCV"');
    }
});

async function generateCV() {
    try {
        // Verificar si jsPDF y las dependencias están cargadas
        if (typeof jspdf === 'undefined') {
            throw new Error('La librería jsPDF no está cargada correctamente');
        }
        if (typeof html2canvas === 'undefined') {
            throw new Error('La librería html2canvas no está cargada correctamente');
        }

        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        // Crear el contenido HTML del CV
        const cvContent = document.createElement('div');
        cvContent.style.width = '190mm';
        cvContent.style.padding = '15mm';
        cvContent.style.fontFamily = 'Helvetica, Arial, sans-serif';
        cvContent.style.fontSize = '12pt';
        cvContent.style.lineHeight = '1.4';
        cvContent.style.color = '#333';
        cvContent.style.backgroundColor = '#ffffff';
        
        cvContent.innerHTML = `
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Helvetica, Arial, sans-serif;
            }
            .name {
                font-size: 22pt;
                font-weight: bold;
                margin-bottom: 8px;
                color: #2c3e50;
            }
            .title {
                font-size: 16pt;
                font-weight: bold;
                margin-bottom: 15px;
                color: #2c3e50;
            }
            .section-title {
                font-size: 14pt;
                font-weight: bold;
                color: #2c3e50;
                border-bottom: 1px solid #ddd;
                padding-bottom: 4px;
                margin-top: 15px;
                margin-bottom: 10px;
            }
            .job-title {
                font-weight: bold;
                font-size: 12pt;
                margin-top: 8px;
                color: #2c3e50;
            }
            .company {
                font-style: italic;
                margin-top: 3px;
                font-size: 11pt;
                color: #555;
            }
            .date {
                color: #666;
                font-size: 10pt;
                margin-bottom: 3px;
            }
            .skills-category {
                font-weight: bold;
                margin-top: 8px;
                font-size: 11pt;
            }
            .skills-list {
                margin-left: 15px;
                margin-bottom: 8px;
                font-size: 10.5pt;
            }
            .skill-item {
                margin-left: 10px;
                margin-bottom: 3px;
            }
            .col2-table {
                width: 100%;
                border-collapse: collapse;
            }
            .col2-table td {
                width: 50%;
                vertical-align: top;
                padding-right: 15px;
            }
            .contact-table {
                width: 100%;
                margin-bottom: 20px;
                font-size: 10.5pt;
            }
            .contact-table td {
                padding: 3px 0;
            }
            .experience-item {
                margin-bottom: 15px;
            }
            .experience-desc {
                font-size: 10.5pt;
                line-height: 1.4;
                margin-top: 5px;
            }
        </style>

        <div style="margin-bottom: 20px;">
            <div class="name">José López</div>
            <div class="title">Ingeniero en Informática</div>
             
            <table class="contact-table">
                <tr>
                    <td width="50%">Teléfono: +58 414 5883454</td>
                    <td width="50%">GitHub: github.com/joselm2490</td>
                </tr>
                <tr>
                    <td>Correo Electrónico: joselm2490@gmail.com</td>
                    <td>LinkedIn: linkedin.com/in/joselm2490</td>
                </tr>
                <tr>
                    <td>Dirección: Palo Negro, Venezuela</td>
                    <td>Residencia adicional: Caracas - Venezuela</td>
                </tr>
            </table>
        </div>

        <table class="col2-table">
            <tr>
                <td style="padding-right: 20px;">
                    <div class="section-title">EDUCACIÓN</div>
                                          
                    <div class="date">Julio de 2010 - julio de 2025</div>
                    <div class="job-title">Grado en Ingeniería Informática</div>
                    <div class="company">Universidad Nacional Experimental Rómulo Gallegos</div>
                    
                    <div class="section-title">HABILIDADES</div>
                    
                    <div class="skills-category">Backend:</div>
                    <div class="skills-list">PHP, Laravel, Livewire</div>
                    
                    <div class="skills-category">Frontend:</div>
                    <div class="skills-list">HTML, JavaScript, Tailwind CSS, Bootstrap</div>
                    
                    <div class="skills-category">Bases de Datos:</div>
                    <div class="skills-list">MySQL, SQL Server</div>
                    
                    <div class="skills-category">Control de Versiones:</div>
                    <div class="skill-item">Git</div>
                    <div class="skill-item">GitHub</div>
                    
                    <div class="skills-category">Gestión de Proyectos:</div>
                    <div class="skill-item">Trello</div>
                    
                    <div class="skills-category">Plataformas de Comunicación:</div>
                    <div class="skill-item">Google Meet</div>
                    <div class="skill-item">Zoom</div>
                </td>
                
                <td>
                    <div class="section-title">EXPERIENCIA</div>
                    
                    <div class="experience-item">
                        <div class="date">Mayo de 2025 - julio de 2025</div>
                        <div class="job-title">Desarrollador</div>
                        <div class="company">Universidad Nacional Experimental Rómulo Gallegos | Presencial | Venezuela</div>
                        <div class="experience-desc">
                            Reingeniería del sistema odontológico universitario con Laravel 12, Livewire 3, Tailwind CSS y MySQL. 
                            Mejora de atención clínica y evaluación académica. Implementación de protocolos de seguridad, 
                            automatización de procesos y optimización de la gestión de datos.
                        </div>
                    </div>
                    
                    <div class="experience-item">
                        <div class="date">Septiembre de 2022 - junio de 2023</div>
                        <div class="job-title">Soporte técnico</div>
                        <div class="company">Tappers | Remoto | Colombia</div>
                        <div class="experience-desc">
                            Responsable de la consulta y mantenimiento de bases de datos SQL Server para el sistema interno de la empresa. 
                            Brindé soporte técnico en PHP, solucionando fallas funcionales y mejorando la estabilidad del sistema.
                        </div>
                    </div>
                    
                    <div class="experience-item">
                        <div class="date">Abril de 2021 - junio de 2021</div>
                        <div class="job-title">Pasante de ingeniería en informática</div>
                        <div class="company">IVSS Hospital Jose Antonio Vargas | Híbrido | Venezuela</div>
                        <div class="experience-desc">
                            Desarrollé un sistema web para control de citas médicas e inventario farmacéutico usando PHP y MySQL. 
                            Esta experiencia fortaleció mis habilidades en desarrollo backend y gestión de bases de datos.
                        </div>
                    </div>
                </td>
            </tr>
        </table>
        `;

        // Añadir temporalmente al body
        document.body.appendChild(cvContent);
        
        // Configuración de html2canvas para mejor calidad
        const canvas = await html2canvas(cvContent, {
            scale: 3, // Aumentar escala para mejor calidad
            logging: false,
            useCORS: true,
            allowTaint: true,
            letterRendering: true
        });
        
        // Eliminar temporal
        document.body.removeChild(cvContent);
        
        // Ajustar tamaño de imagen para el PDF
        const imgWidth = 190; // mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        // Añadir imagen al PDF con posición centrada
        const pageWidth = pdf.internal.pageSize.getWidth();
        const x = (pageWidth - imgWidth) / 2;
        
        pdf.addImage(canvas, 'PNG', x, 10, imgWidth, imgHeight);
        
        // Guardar PDF
        pdf.save('CV_Jose_Lopez.pdf');
        
        console.log('CV generado con éxito');
    } catch (error) {
        console.error('Error al generar el CV:', error);
        alert('Error al generar el CV: ' + error.message);
    }
}