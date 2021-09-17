let slider = document.querySelector('.button-link');
let formInput = document.querySelectorAll('.inputForm');
let formMsg = document.querySelector('.message');
let submit = document.querySelector('.submitButton');
let hamburgerMenu = document.querySelector('.styleBars');
let ulMenu = document.querySelector('.ul');
let ulData = document.querySelector('ul');
let listData = document.querySelectorAll('.lst');



const mapInit=()=>{
    let mymap = L.map('map').setView([28.640740086914814, 77.06775521327664], 10);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibXVkaXRndXB0YTY4IiwiYSI6ImNrdG9ldzcxdzAyMzIyb2wzb3Z3YTliaWQifQ.OVwhmFtNr0zrb7f34shqlQ'
    }).addTo(mymap);

    var marker = L.marker([28.640740086914814, 77.06775521327664]).addTo(mymap);
    marker.bindPopup("<b>Mudit gupta</b><br>Hi! I am here.").openPopup();
}

mapInit();

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

