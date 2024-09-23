const searchBar = document.querySelector(".search-bar")
const magnifier=document.querySelector(".search-icon")
magnifier.addEventListener("click",()=>{
 searchBar.classList.toggle("active");
});