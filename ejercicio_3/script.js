function calular_numero() {
    const year = parseInt(document.getElementById('year').value); // Pasar input a int
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);

    // Sumar las cifras del año
    const yearDigits = year.toString().split('').map(Number); // Obtener los dígitos del año
    const sumOfYearDigits = yearDigits.reduce((a, b) => a + b, 0); // Sumar los dígitos del año

    // Calcular el resultado
    const dayDigits = day.toString().split('').map(Number);
    const sumOfDayDigits = dayDigits.reduce((a, b) => a + b, 0);

    const result = sumOfYearDigits - month + sumOfDayDigits;

    // Mostrar el resultado en el label
    document.getElementById('result').innerText = `El resultado es: ${result}`;
}

document.getElementById('calculateButton').addEventListener('click', calular_numero);