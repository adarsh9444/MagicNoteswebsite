let addBtn = document.getElementById("addBtn");
showNote();
addBtn.addEventListener("click", (e) => {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj= {
        text:  addTxt.value,
        title: addTitle.value

    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value="";
    showNote();

})
function showNote() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-3 mx-3 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text"> ${element.text}</p>
                <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete </button>
            </div>
        </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `use "Add to note" to add here`;
    }

}
function deleteNode(index) {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNote();


}
let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function () {



    let item = searchTxt.value.toLowerCase();
    console.log(`Input event fired`, item);
    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach((element) => {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(item)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
})

