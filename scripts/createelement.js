const hd = document.getElementById("h1");
console.log(hd.innerText);
console.log(hd.innerHTML);
hd.innerText = "Changed By DOM";
console.log(hd.innerText);
hd.style.color ="Tomato";
hd.style.textAlign = 'Center'


const ul = document.getElementById("ul");
const li = document.createElement('li');
li.innerText = "Created and appended";
ul.appendChild(li);

const sec = document.createElement('section');
const main = document.getElementById("main");
const h1 = document.createElement("h1");
h1.innerText = "Created By JS";
sec.appendChild(h1);
const ul2 = document.createElement('ul');
ul2.innerHTML = `
<li> new list 1</li>
<li> new list 2</li>
<li> new list 3</li>
<li> new list 4</li>
`;
const img = document.createElement('img');

img.setAttribute('src', '../images/images.jpeg');
main.appendChild(img);
main.appendChild(sec);
main.append(ul2);


//Delete
const inputText = document.getElementById('inputText').addEventListener('keyup', function(event){
    const confirmText = event.target.value;
    // console.log(confirmText);
    const deleteButton = document.getElementById('deleteButton');
    if(confirmText == 'Delete'){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled', true);
    }

})
const deleteButton = document.getElementById('deleteButton').addEventListener('click', function(){
    const deleteButtonPara = document.getElementById('deleteButtonPara');
    deleteButtonPara.style.display = 'none';
})
const listDeleteBtn = document.getElementById('listDeleteBtn').addEventListener('click', function(){ 
    // alert('connecrted');
    const deleteList = document.getElementById('deleteList');
//    const listItems = document.getElementsByTagName('li');
//    if(listItems.length >0){
//     deleteList.removeChild(deleteList.firstChild);
//    }
    console.log(deleteList);
    deleteList.removeChild(deleteList.firstChild);

})
// const randomT = document.getElementById('randomT').addEventListener('mouseenter', function(){
//     console.log('connected');
// })
// const randomT = document.getElementById('randomT').addEventListener('focus', function(){
//     console.log('connected');
// })
// const randomT = document.getElementById('randomT').addEventListener('keydown', function(){
//     console.log('connected');
// })
const randomT = document.getElementById('randomT').addEventListener('blur', function(){
    console.log('connected');
})


