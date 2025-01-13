document.addEventListener('DOMContentLoaded', function () {
    // Función para manejar la acción de pedir un producto
    function ordenarProducto(nombreProducto) {
        alert("¡Tu " + nombreProducto + " está en camino! 🎉");
    }

    // Manejo del formulario de contacto
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('¡Gracias por contactarnos! Te responderemos pronto.');
        form.reset();
    });

    // Hacer que los botones 'Pedir' funcionen llamando a la función
    const botonesPedir = document.querySelectorAll('.btn-pedir');
    botonesPedir.forEach(button => {
        button.addEventListener('click', function() {
            const producto = this.closest('.producto').querySelector('.producto-titulo').textContent;
            ordenarProducto(producto);
        });
    });
});
