window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    
    if (scrollPosition > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



let prImg = document.getElementById("project1Img");
prImg.addEventListener("click",()=>{
    const url = 'https://silver-valkyrie-050c81.netlify.app';
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
        newWindow.focus();
    }
})


let pr2Img = document.getElementById("project2Img");

pr2Img.addEventListener("click",()=>{
    const url = 'https://stackoverflow-umair.netlify.app/';
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
        newWindow.focus();
    }
})


let pr3Img = document.getElementById("project3Img");

pr3Img.addEventListener("click",()=>{
    const url = 'https://e-commerce-111a8.web.app/';
    const newWindow = window.open(url, '_blank');
    if (newWindow) {
        newWindow.focus();
    }
})

