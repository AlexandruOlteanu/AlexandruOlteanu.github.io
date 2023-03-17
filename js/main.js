(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });
    
    
    // Move from Benefit Now to Contact Us
    $('.move-to-contact').click(function () {
        let offsets = $('#contact-id').offset();
        let top = offsets.top;
        console.log(top); 
        $('html, body').animate({scrollTop: top}, 1500, 'easeInOutExpo');

        return false;
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(window).on('load', function() {
        setTimeout(function() {
            $(".team-carousel, .related-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                center: true,
                margin: 30,
                dots: false,
                loop: true,
                nav : true,
                navText : [
                    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
                ],
                responsive: {
                    0:{
                        items:1
                    },
                    576:{
                        items:1
                    },
                    768:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                }
            });
        }, 100);
    });

    // Set Active Menu Item

    function setActive(value) {
        $(window).on('load', function() {
            setTimeout(function() {
                let active_page = document.getElementsByClassName(value);
                active_page[0].classList.add("active");
            }, 40);
        });
    }

    let path = window.location.pathname;
    let file_name = path.split("/").pop();
    switch(file_name) {
        case "index.html" :
            setActive("home");
            break;
        case "about.html" :
            setActive("about");
            break;
        case "FAQ.html" :
            setActive("faq");
            break;
        case "about.html" :
            setActive("about");
            break;
        case "contact.html" :
            setActive("contact");
            break;    
    }
    

    // Testimonials carousel
    $(window).on('load', function() {
        setTimeout(function() {
            $(".testimonial-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1500,
                margin: 30,
                dots: true,
                loop: true,
                center: true,
                responsive: {
                    0:{
                        items:1
                    },
                    576:{
                        items:1
                    },
                    768:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                }
            });
        }, 100);
    });

    // Vendor carousel
    $(window).on('load', function() {
        setTimeout(function() {
          $('.vendor-carousel').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            center: true,
            autoplay: true,
            smartSpeed: 1000,
            responsive: {
              0:{
                items:2
              },
              576:{
                items:3
              },
              768:{
                items:4
              },
              992:{
                items:5
              },
              1200:{
                items:6
              }
            }
          });
        }, 100);
    });
      
    // Open Menu Button on Mobile
    $(document).on('click', '.navbar-toggler', function() {
            $('#nav-container').toggleClass("pushed");
    });
    
})(jQuery);

// Promotion Button Date

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

day -= 4;
if (day < 1) {
    day = 1;
}

let currentDate = `${day}-${month}-${year}`;
let first_date = document.getElementById("first-date");
if (first_date != null) {
    document.getElementById("first-date").appendChild(document.createTextNode(currentDate));
    day += 6;
    let maximum = 31;
    switch(month) {
        case 2:
            maximum = 28;
            break;
        case 4:
            maximum = 30; 
            break;
        case 6:
            maximum = 30;
            break;
        case 9: 
            maximum = 30;
        case 11: 
            maximum = 30;
        default:
            break;
    }
    if (day > maximum) {
        day -= maximum;
    }
    currentDate = `${day}-${month}-${year}`;
    document.getElementById("second-date").appendChild(document.createTextNode(currentDate));
}

// Typed Strings Animation

let type_class = document.getElementsByClassName("auto-typed-1");
if (type_class.length != 0) {
    var typed_1 = new Typed(".auto-typed-1", {
        strings: ["We are Nevsquare!", "Where Expertise Builds Innovation!"],
        typeSpeed: 120,
        backSpeed: 50,
        loop:true,
    })
}

type_class = document.getElementsByClassName("auto-typed-2");
if (type_class.length != 0) {
    var typed_2 = new Typed(".auto-typed-2", {
        strings: ["Build a durable and strong brand!", "Target Specific Audience With Maximum Results!"],
        typeSpeed: 120,
        backSpeed: 50,
        loop:true
    })
}

type_class = document.getElementsByClassName("auto-typed-3");
if (type_class.length != 0) {
    var typed_3 = new Typed(".auto-typed-3", {
        strings: ["Conquer your competition with high-end technologyes!", "Improve Scalability and Performance!"],
        typeSpeed: 120,
        backSpeed: 50,
        loop:true
    })
}