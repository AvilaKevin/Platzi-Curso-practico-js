// create function to run when the web start
window.addEventListener('load', function(){
    // add a property from Glider-js / 1.add element that will have the function 2.option list
    new Glider(document.querySelector('.carousel__list'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel__indicators',
        arrows: {
            prev: '.carousel__previous',
            next: '.carousel__next'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 450,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            }
          ]
    });
});