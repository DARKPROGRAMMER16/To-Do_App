console.log("hello alien");
shownotes();

// adding notes to the local storage

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click',function(e){
    let addtext = document.getElementById('addtext');
    let notes = localStorage.getItem("notes");
    
    if (notes == null){
         notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtext.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addtext.value = "";
    // console.log(notesObj);

    shownotes();
})

// function for displaying todos
function shownotes(){
    let notes = localStorage.getItem("notes");
    
    if (notes == null){
         notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function(element,index) {
        html += `<div class="notecard card col-md-3 m-2">
        <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deletenotes(this.id)" class="btn btn-primary">Delete To-Do</button>
        </div>
    </div>  `;
    });

    let noteselm = document.getElementById('notes');
    if(notesObj.length!=0){
        noteselm.innerHTML = html;
    }
    else{
        noteselm.innerHTML = `No todos pending! Use "Add" to add todos.`;
    }
}

// function for deleting todos
function deletenotes(index){
    // console.log("deleting todos",index);
    let notes = localStorage.getItem("notes");
    
    if (notes == null){
         notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    shownotes();

}


// search function implemented

let search = document.getElementById('searchtxt');
search.addEventListener('input', function (){
    let inputval = search.value.toLowerCase();
    // console.log("input event fired");
    let notecards = document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputval)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardtxt);
        
    })
})