// Obtener referencias a los elementos del DOM
const precioInput = document.getElementById('precio_casa');
const edadInput = document.getElementById('edad');
const mensajeLabel = document.getElementById('mensaje');

// Función para verificar los inputs
function verificarInputs() {

    const precio = parseFloat(precioInput.value); //Variable constante precio, transformada de string a float
    const edad = parseInt(edadInput.value); //Variable constante edad, pasada de string a integer

    if (!isNaN(precio) && !isNaN(edad)) { //Si no están vacíos y son números (NaN (Not a Number))
    //if (precio !== null && edad !== null) {
        // Si ambos están llenos, mostrar un mensaje en el label
        if (edad <= 17) {
            mensajeLabel.textContent = 'NO PUEDES COMPRAR UNA CASA';
        } else if (edad >= 18 && edad <= 30) {
            const descuento = precio * 0.25;
            const precioFinal = precio - descuento;
            mensajeLabel.textContent = `TIENES LA EDAD PARA COMPRAR UNA CASA Y CONSIGUES UN 25% POR EL CARNET JOVEN. Precio final: ${precioFinal.toFixed(2)}`;
        } else if (edad > 30 && edad <= 60) {
            mensajeLabel.textContent = `TIENES LA EDAD PARA COMPRAR UNA CASA PERO TIENES UN 0% DE DESCUENTO. Precio: ${precio.toFixed(2)}`;
        } else if (edad > 60) {
            const descuento = precio * 0.15;
            const precioFinal = precio - descuento; //Se puede también pasar un string a número con Number("String")
            mensajeLabel.textContent = `TIENES LA EDAD PARA COMPRAR UNA CASA Y TIENES UN 15% DE DESCUENTO. Precio final: ${precioFinal.toFixed(2)}`;
        }
    } else {
        // Si no están llenos, restablecer el mensaje
        mensajeLabel.textContent = 'TU PRECIO CON DESCUENTO SE MOSTRARÁ AQUÍ';
    }
}

// Agregar eventos de entrada a los inputs
precioInput.addEventListener('input', verificarInputs);
edadInput.addEventListener('input', verificarInputs);