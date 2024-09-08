const input = document.querySelector('.text');
const listcontainer = document.querySelector('.list-container');
input.addEventListener('keyup' ,function(event){
    if(event.keyCode == 13){
        addtask();
    }

});

   

function addtask() {
    if (input.value === "") {
        alert('You must be write something');
    }
    else {
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'
        li.innerHTML = input.value;
        listcontainer.appendChild(li);
        li.appendChild(span);
        saveData();


    }
    input.value =''
}
listcontainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();

    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();

    }
},false);
function saveData(){
    localStorage.setItem('data' ,listcontainer.innerHTML);
}
function showData(){
     listcontainer.innerHTML = localStorage.getItem('data');
}
showData();