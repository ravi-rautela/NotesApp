// console.log("This is a Simple JS project which is used to help your inhance knowledge about javaScript.");
showNotes();

// Add some data 
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let writeText = document.getElementById('writeText');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(writeText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    writeText.value = "";

    showNotes();
})
// function for show data which is present the local storage
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="card mx-3 mb-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}.</h5>
                    <p class="card-text">${element}</p>
                    <button class="btn btn-sm btn-primary" id=${index} onclick = "deleteNote(this.id)">Delete Note</button>
                </div>
            </div>`;
    });
    let notesEle = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesEle.innerHTML = html;
    }
    else {
        notesEle.innerHTML = "Your notes section is black please write some note."
    }
}

// Code for deleting a note.
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}
//Code for searching text or notes
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
    let inputVal = search.value.toLowercase();

    let notesCard = document.getElementsByClassName("card");

    Array.from(notesCard).forEach(function (element) {
        let cardText = document.getElementsByTagName("p")[0].innerText;
        if (cardText.includes(inputVal)) {
            // element.style.display = "block";
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }

    });
});