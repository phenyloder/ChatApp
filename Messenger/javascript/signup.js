const form = document.querySelector(".signup form");
const continueBtn = document.querySelector(".button input");
const errorText = document.querySelector(".error-text");

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

continueBtn.addEventListener("click", () => {
    // AJAX Here 
    let xhr = new XMLHttpRequest(); //Creating XML Object
    xhr.open("POST", "php/signup.php", true);
    xhr.addEventListener('load', () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
           if(xhr.status === 200){
               let data = xhr.response;
               if(data == "success"){
                location.href = "users.php";
               }else{
                errorText.textContent = data;
                errorText.style.display = "block";
               }
           } 
        }
    })

    let formData = new FormData(form);
    xhr.send(formData);
})