const form = document.querySelector(".typing-area");
const inputField = form.querySelector(".input-field");
const sendBtn = form.querySelector("button");
const chatBox = document.querySelector(".chat-box");

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

sendBtn.addEventListener("click", () => {
    let xhr = new XMLHttpRequest(); //Creating XML Object
    xhr.open("POST", "php/insert-chat.php", true);
    xhr.addEventListener('load', () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
           if(xhr.status === 200){
               inputField.value = "";
           } 
        }
    })

    let formData = new FormData(form);
    xhr.send(formData);
})

setInterval(() => {
    let xhr = new XMLHttpRequest(); //Creating XML Object
    xhr.open("POST", "php/get-chat.php", true);
    xhr.addEventListener('load', () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
           if(xhr.status === 200){
               let data = xhr.response;
               chatBox.innerHTML = data;
           } 
        }
    })

    let formData = new FormData(form);
    xhr.send(formData);
}, 500)