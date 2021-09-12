$('.button-to-top').hide();
let circle = document.querySelectorAll('circle');

circle.forEach(e => {
    e.classList.remove('stroke');
});

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
        } 
        else if ($(this).scrollTop() < 0) 
        {
            $('.button-to-top').fadeOut();
        } 
        else 
        {
            $('.button-to-top').fadeOut();
        }   
    })


