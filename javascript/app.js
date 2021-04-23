const userList = document.querySelector(".name-list");
const listInput = document.querySelector(".input-list");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener("click", function(){
    // creat an li
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(listInput.value);
    //add input value inside the new li
    newLi.appendChild(liContent);
    // attach the li to the user list
    userList.appendChild(newLi);
});