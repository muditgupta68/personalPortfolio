$('.button-to-top').hide();
let circle = document.querySelectorAll('circle');
let header = document.querySelector('header');

circle.forEach(e => {
    e.classList.remove('stroke');
});
header.classList.remove('sticky')

$(window).scroll(function(){
        console.log($(this).scrollTop())
        if ($(this).scrollTop() >= 500) 
        {
            circle.forEach(e => {
                e.classList.add('stroke');
            });
        } 
        if ($(this).scrollTop() > 100) 
        {
            $('.button-to-top').fadeIn();
            header.classList.add('sticky')
            
        } 
        else if ($(this).scrollTop() < 0) 
        {
            $('.button-to-top').fadeOut();
            header.classList.remove('sticky')
        } 
        else 
        {
            $('.button-to-top').fadeOut();
            header.classList.remove('sticky')
        }   
    })


