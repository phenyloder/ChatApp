const searchBar = document.querySelector(".users .search input")
const searchBtn = document.querySelector(".users .search button")
const usersList = document.querySelector(".users .users-list")

searchBtn.addEventListener("click", () => {
    searchBar.classList.toggle("active");
    searchBar.focus();
    searchBtn.classList.toggle("active");
    searchBar.value = "";
})

searchBar.addEventListener("keyup", () => {
    let searchTerm = searchBar.value;

    if(searchTerm != ""){
        searchBar.classList.add("active");
    }else{
        searchBar.classList.remove("active");
    }

    let xhr = new XMLHttpRequest(); //Creating XML Object
    xhr.open("POST", "php/search.php", true);
    xhr.addEventListener('load', () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
           if(xhr.status === 200){
               let data = xhr.response;
               usersList.innerHTML = data;
           } 
        }
    })
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("searchTerm=" + searchTerm);
})

setInterval(() => {
    let xhr = new XMLHttpRequest(); //Creating XML Object
    xhr.open("GET", "php/users.php", true);
    xhr.addEventListener('load', () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
           if(xhr.status === 200){
               let data = xhr.response;
               if(!searchBar.classList.contains("active"))
               {
                usersList.innerHTML = data;
               }
           } 
        }
    })
    xhr.send();
}, 500)