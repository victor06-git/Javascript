function deleteDiv() {
    const textDiv = document.getElementById('textDiv');
    textDiv.style.display = 'none'; // Oculta el div
}


document.getElementById('deleteButton').addEventListener('click', deleteDiv);