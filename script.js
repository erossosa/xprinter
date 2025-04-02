document.addEventListener('DOMContentLoaded', function() {
    const { jsPDF } = window.jspdf;

    // Elementos del DOM
    const generarBtn = document.getElementById('generarBtn');
    const descargarBtn = document.getElementById('descargarBtn');
    const etiqueta = document.getElementById('etiqueta');

    // Actualizar vista previa
    generarBtn.addEventListener('click', function() {
        document.getElementById('previewNombre').textContent = document.getElementById('destinatario').value || "[Nombre]";
        document.getElementById('previewCI').textContent = document.getElementById('ci').value || "[CI]";
        document.getElementById('previewTelefono').textContent = document.getElementById('telefono').value || "[Teléfono]";
        document.getElementById('previewDireccion').textContent = document.getElementById('direccion').value || "[Dirección]";
        document.getElementById('previewDepto').textContent = document.getElementById('departamento').value || "[Depto]";
        document.getElementById('previewAgencia').textContent = document.getElementById('agencia').value || "[Agencia]";
    });

    // Descargar PDF
    descargarBtn.addEventListener('click', async function() {
        try {
            const canvas = await html2canvas(etiqueta, {
                scale: 2,
                useCORS: false, // Desactiva CORS
                allowTaint: false, // No permitir "taint"
                backgroundColor: '#FFFFFF',
                logging: false
            });

            const pdf = new jsPDF('p', 'mm', [100, 150]);
            pdf.addImage(canvas, 'PNG', 0, 0, 100, 150);
            pdf.save('etiqueta_cafini.pdf');
        } catch (error) {
            console.error("Error al generar PDF:", error);
            alert("Error al descargar. Verifica la consola.");
        }
    });
});