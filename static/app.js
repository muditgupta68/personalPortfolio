let slider = document.querySelector('.button-link');
let formInput = document.querySelectorAll('.inputForm');
let formMsg = document.querySelector('.message');
let submit = document.querySelector('.submitButton');
// let form = document.querySelector('#form');
// let cross = document.querySelector('#btn');
// let notification = document.querySelector('#noti');
let hamburgerMenu = document.querySelector('.styleBars');
let ulMenu = document.querySelector('.ul');
let ulData = document.querySelector('ul');
let listData = document.querySelectorAll('.lst');
let check1=check2= 0;
let slideNumber = 0;

styling = ((name,attr,val)=>{
    name.style.attr = val;
});

hamburgerMenu.addEventListener('click',(e)=>{
    if (ulMenu.classList.contains('visible')){
        ulMenu.classList.remove("visible");
        ulData.classList.remove('expand');
        listData.forEach(list=>{
            list.style.width='auto';
            list.style.margin='0';
        });
    }
    else{
        ulMenu.classList.add("visible");
        ulData.classList.add('expand');
        listData.forEach(list=>{
            list.style.width='9rem';
            list.style.margin='10px auto';
        });
    }
});

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

submit.addEventListener('click',()=>{
    if(check1==0||check2==0){
        formMsg.classList.add('error')
        formInput.forEach(input=>{
            input.classList.add('error')
        });
    }
    if (form.checkValidity()) {
    alert("Your response has been recorded successfully, Thankyou!😊");
  }
});

// cross.addEventListener('click',()=>{
//     notification.style.display="none";
// });




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

