function deleteDiv() {
    const textDiv = document.getElementById('textDiv');
    //textDiv.style.display = 'none'; // Oculta el div
    textDiv.remove(); //Forma más sencilla
}


document.getElementById('deleteButton').addEventListener('click', deleteDiv);