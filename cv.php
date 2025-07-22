<?php
require_once('tcpdf/tcpdf.php');

// Crear nuevo documento PDF
$pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// Información del documento
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('José López');
$pdf->SetTitle('CV - José López');
$pdf->SetSubject('Curriculum Vitae');
$pdf->SetKeywords('CV, José López, Desarrollador Web, PHP, Laravel');

// Establecer márgenes
$pdf->SetMargins(15, 15, 15);
$pdf->SetHeaderMargin(0);
$pdf->SetFooterMargin(0);

// Eliminar cabecera y pie de página por defecto
$pdf->setPrintHeader(false);
$pdf->setPrintFooter(false);

// Añadir una página
$pdf->AddPage();

// Contenido HTML
$content = '
<style>

    .name {
        font-size: 20px;
        font-weight: bold;
    }

        .name_2 {
        font-size: 20px;
        font-weight: bold;
        color: #2c3e50;

    }



    .section-title {
        font-size: 14px;
        font-weight: bold;
        color: #2c3e50;
        border-bottom: 1px solid #ddd;
        padding-bottom: 2px;
    }
    .job-title {
        font-weight: bold;
        font-size: 13px;
        margin-top: 2px; /* Reducido de 5px a 2px */
    }
    .company {
        font-style: italic;
        margin-top: 2px; /* Añadido para consistencia */
    }
    .date {
        color: #666;
        font-size: 11px;
        margin-bottom: 2px; /* Reducido el espacio inferior */
    }
    .skills-category {
        font-weight: bold;
        margin-top: 2px;
    }
    .skills-list {
        margin-left: 15px;
    }
    table.col2 {
        width: 100%;
    }
    table.col2 td {
        width: 50%;
        vertical-align: top;
    }
    .experience-item {
        margin-bottom: 2px;
    }
</style>

<div>
       <table border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td width="50%"><div class="name">José López
            <br>Ingeniero en Informática</div></td>

        </tr>

    </table>
     

    <table border="0" cellspacing="0" cellpadding="0">
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

<table class="col2">
    <tr>
        <td>
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
            
            <div class="skills-category">Gestión de Proyectos:</div>
            <div class="skills-list">Trello</div>
        </td>
        
        <td>
                    
            <div class="section-title">EXPERIENCIA</div>
            
            <div class="date"  >Mayo de 2025 - julio de 2025</div>
            <div class="job-title">Desarrollador</div>
            <div class="company">Universidad Nacional Experimental Rómulo Gallegos | Presencial | Venezuela</div>
            <div>
                Reingeniería del sistema odontológico universitario con Laravel 12, Livewire 3, Tailwind CSS y MySQL. 
                Mejora de atención clínica y evaluación académica. Implementación de protocolos de seguridad, 
                automatización de procesos y optimización de la gestión de datos.
            </div>
            
            
            <div class="date">Septiembre de 2022 - junio de 2023</div>
            <div class="job-title">Soporte técnico</div>
            <div class="company">Tappers | Remoto | Colombia</div>
            <div>
                Responsable de la consulta y mantenimiento de bases de datos SQL Server para el sistema interno de la empresa. 
                Brindé soporte técnico en PHP, solucionando fallas funcionales y mejorando la estabilidad del sistema.
            </div>
            
            
            <div class="date">Abril de 2021 - junio de 2021</div>
            <div class="job-title">Pasante de ingeniería en informática</div>
            <div class="company">IVSS Hospital Jose Antonio Vargas | Híbrido | Venezuela</div>
            <div>
                Desarrollé un sistema web para control de citas médicas e inventario farmacéutico usando PHP y MySQL. 
                Esta experiencia fortaleció mis habilidades en desarrollo backend y gestión de bases de datos.
            </div>
        </td>
    </tr>
</table>';

// Escribir el contenido HTML
$pdf->writeHTML($content, true, false, true, false, '');

// Cerrar y generar el PDF
$pdf->Output('CV_Jose_Lopez.pdf', 'D');
?>