var input = document.querySelector('#note-text');
var btn = document.querySelector('#button-create');
var btn2 = document.querySelector('#button-cancel');
var list = document.querySelector('#list');
var listItem = document.getElementsByTagName('li');

// create h2 element before #list
var newItem = document.createElement('h2');
var textNode = document.createTextNode('My List');
newItem.appendChild(textNode);
list.insertBefore(newItem, list.childNodes[0]);
newItem.setAttribute("style", "display: none;");

// create note
btn.addEventListener('click', createNewNote);
function createNewNote() {
    var text = input.value;
    if(text === "") {
        alert("PLEASE, ENTER A NOTE!!!");
        return;
    } 
    if(text != "") {
        newItem.setAttribute("style", "color: white; display: block; margin-bottom: 20px;  font-weight: bold;")
        var li = document.createElement('li');
        li.innerHTML = "<span class=\"newText\">" + text + "</span>"
        var a = document.createElement('a');
        a.setAttribute('href', '#');
        a.setAttribute("style", "float: right; color: black;");
        a.innerHTML = '<i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i>';
        li.appendChild(a);
        list.appendChild(li);
        input.value = "";
    }
}

// delete note
btn2.addEventListener('click', deleteNote);
function deleteNote() {
    if(input.value === "") {
        alert('ALREADY NO NOTE !!!');
        return;
    }
    if(input.value != "") {
        input.value = "";
    }
}

// delete item
list.addEventListener('click', deleteItem);
function deleteItem(e) {
    if(e.target.className === 'fas fa-trash-alt') {
        e.target.parentElement.parentElement.remove();
    }
    if(listItem.length == 0) {
        newItem.setAttribute("style", "display: none;");
    }
}

// update item
list.addEventListener('click', updateNote);
function updateNote(e) {
    if(e.target.className === 'fas fa-edit') {
        var updateMessage = prompt('ENTER NEW NOTE:');
        if(updateMessage === "" || updateMessage === null) {
            return e.target.parentElement.parentElement.getElementsByClassName("newText")[0].innerHTML;
        }else {
            e.target.parentElement.parentElement.getElementsByClassName("newText")[0].innerHTML = updateMessage;
        }
    }
}