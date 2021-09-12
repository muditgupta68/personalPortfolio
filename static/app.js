let slider = document.querySelector('.button-link');

let slideNumber = 0;


slider.addEventListener('click',(e)=>{
    window.scrollTo({top: 0, behavior: "smooth"});
});

const slideChange=(n)=>{
    slideNumber+=n;
    showProject(slideNumber)
}

const showProject = (n)=>{
    let slides = document.querySelectorAll('.mySlides');
    let slideLen = slides.length;

    if(n>=slideLen){
        slideNumber=0;
    }
    if(n<0){
        slideNumber=slideLen-1;
    }
    for (i = 0; i < slideLen; i++) {
        slides[i].style.display = "none";
    }
    slides[slideNumber].style.display="block";

}


showProject(slideNumber);

