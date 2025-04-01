const { jsPDF } = window.jspdf;
const pdf = new jsPDF();
// En script.js
document.addEventListener('DOMContentLoaded', function() {
    const generarBtn = document.getElementById('generarBtn');
    generarBtn.addEventListener('click', function() {
        // Lógica para actualizar la previsualización...
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Verificar carga de librerías
    if (!window.html2canvas || !window.jspdf) {
        alert("Error: Asegúrate de cargar html2canvas y jspdf.");
        return;
    }

    // Resto del código...


    // Referencias a elementos del DOM
    const descargarBtn = document.getElementById('descargarBtn');
    const generarBtn = document.getElementById('generarBtn');
    const etiqueta = document.getElementById('etiqueta');

    // Validar elementos
    if (!descargarBtn || !generarBtn || !etiqueta) {
        console.error("Error: Elementos del DOM no encontrados.");
        return;
    }

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
                useCORS: true,
                backgroundColor: '#FFFFFF'
            });

            const pdf = new jsPDF('p', 'mm', [100, 150]); // Tamaño 10x15 cm
            pdf.addImage(canvas, 'PNG', 0, 0, 100, 150);
            pdf.save('etiqueta_cafini.pdf');
        } catch (error) {
            console.error("Error al generar PDF:", error);
            alert("Error al descargar. Verifica la consola.");
        }
    });
});
});
