    document.getElementById('generarBtn').addEventListener('click', function() {
    // Actualizar previsualización
    document.getElementById('previewNombre').textContent = document.getElementById('destinatario').value;
    document.getElementById('previewCI').textContent = document.getElementById('ci').value;
    document.getElementById('previewTelefono').textContent = document.getElementById('telefono').value;
    document.getElementById('previewDireccion').textContent = document.getElementById('direccion').value;
    document.getElementById('previewDepto').textContent = document.getElementById('departamento').value;
    document.getElementById('previewAgencia').textContent = document.getElementById('agencia').value;
});

// Cargar logo
document.getElementById('logoUpload').addEventListener('change', function(e) {
    const logoContainer = document.getElementById('logoContainer');
    logoContainer.innerHTML = '';
    if (e.target.files[0]) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(e.target.files[0]);
        img.style.maxWidth = '150px';
        logoContainer.appendChild(img);
    }
});

// Descargar etiqueta (usando html2canvas)
document.getElementById('descargarBtn').addEventListener('click', function() {
    alert("Descargando etiqueta... (Aquí iría la lógica con html2canvas o similar)");
});