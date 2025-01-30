document.getElementById('birthForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);

    // Sumar las cifras del año
    const yearDigits = year.toString().split('').map(Number);
    const sumOfYearDigits = yearDigits.reduce((a, b) => a + b, 0);

    // Calcular el resultado
    const result = sumOfYearDigits - month + (Math.floor(day / 10) * (day % 10));

    // Mostrar el resultado
    document.getElementById('result').innerText = `El resultado es: ${result}`;
});