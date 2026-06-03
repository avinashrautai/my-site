
const toggle =
document.querySelector(".mobile-toggle");

const menu =
document.querySelector(".mobile-menu");

const closeBtn =
document.querySelector(".mobile-close");

if(toggle && menu){

toggle.addEventListener("click",()=>{

menu.classList.add("active");

});

}

if(closeBtn && menu){

closeBtn.addEventListener("click",()=>{

menu.classList.remove("active");

});

}

document.querySelectorAll(".mobile-menu a")
.forEach(link => {

link.addEventListener("click",()=>{

menu.classList.remove("active");

});

});
