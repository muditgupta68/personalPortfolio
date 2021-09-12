let slider = document.querySelector('.button-link');
let formInput = document.querySelectorAll('.inputForm');
let formMsg = document.querySelector('.message');
let submit = document.querySelector('.submitButton');

let check1=check2= 0;
let slideNumber = 0;

formInput.forEach(input=>{
    input.addEventListener('input',(e)=>{
        let value = e.target.value;
        check1=1;
        e.target.classList.remove('error')
        console.log(value);
        if(value==""){
            e.target.classList.add('error')
            check1=0;
        }
    });

});

formMsg.addEventListener('input',(e)=>{
    let value = e.target.value;
    check2=1;
    e.target.classList.remove('error')
    console.log(value);
    if(value==""){
        e.target.classList.add('error')
        check2=0;
    }
});

submit.addEventListener('click',(e)=>{
    if(check1==0||check2==0){
        formMsg.classList.add('error')
        formInput.forEach(input=>{
            input.classList.add('error')
        });
    }
});




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

