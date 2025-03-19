

(function($) {
	
"use strict";
    
    
    


/*-------------------------------------
Submenu Dropdown Toggle
-------------------------------------*/
if ($('.main-nav li.dropdown ul').length) {
    $('.main-nav li.dropdown').append('<button class="dropdown-btn"><i class="fa fa-angle-right"></i></button>');
}



/*-------------------------------------
Dynamic Current Menu Selector
-------------------------------------*/
function dynamicCurrentMenuClass(selector) {
    let FileName = window.location.href.split('/').reverse()[0];

    selector.find('li').each(function () {
        let anchor = $(this).find('a');
        if ($(anchor).attr('href') == FileName) {
            $(this).addClass('current');
        }
    });
    // if any li has .current elmnt add class
    selector.children('li').each(function () {
        if ($(this).find('.current').length) {
            $(this).addClass('current');
        }
    });
    // if no file name return 
    if ('' == FileName) {
        selector.find('li').eq(0).addClass('current');
    }
}



/*-------------------------------------
Mobile Menu
-------------------------------------*/
if ($('.main-nav').length) {
    let mobileNavContainer = $('.mobile-nav__container');
    let mainNavContent = $('.main-nav').html();

    mobileNavContainer.append(function () {
        return mainNavContent;
    });

    //Dropdown Button
    mobileNavContainer.find('li.dropdown .dropdown-btn').on('click', function () {
        $(this).toggleClass('open');
        $(this).prev('ul').slideToggle(500);
    });

    // dynamic current class        
    let mainNavUL = $('.main-nav').find('.main-navigation');
    let mobileNavUL = mobileNavContainer.find('.main-navigation');

    dynamicCurrentMenuClass(mainNavUL);
    dynamicCurrentMenuClass(mobileNavUL);

}



/*-------------------------------------
Main Menu Clone And Scroll To Top
-------------------------------------*/
if ($('[data-toggle="tooltip"]').length) {
        $('[data-toggle="tooltip"]').tooltip();
    }
    if ($('.stricky').length) {
        $('.stricky').addClass('real').clone(true).insertAfter('.stricky').addClass('stricked-menu').removeClass('real');
    }
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

            return false;

        });
}



/*-------------------------------------
Stricky Menu
-------------------------------------*/
$(window).on('scroll', function () {
    if ($('.scroll-to-top').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.scroll-to-top').fadeIn(500);
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.scroll-to-top').fadeOut(500);
        }
    }
    if ($('.stricked-menu').length) {
        var headerScrollPos = 100;
        var stricky = $('.stricked-menu');
        if ($(window).scrollTop() > headerScrollPos) {
            stricky.addClass('stricky-fixed');
        } else if ($(this).scrollTop() <= headerScrollPos) {
            stricky.removeClass('stricky-fixed');
        }
    }
});



/*-------------------------------------
Side Menu Toggler
-------------------------------------*/
if ($('.side-menu__toggler').length) {
    $('.side-menu__toggler').on('click', function (e) {
        $('.side-menu__block').toggleClass('active');
        e.preventDefault();
    });
}



/*-------------------------------------
Side Menu Overlay
-------------------------------------*/
if ($('.side-menu__block-overlay').length) {
    $('.side-menu__block-overlay').on('click', function (e) {
        $('.side-menu__block').removeClass('active');
        e.preventDefault();
    });
}



/*-------------------------------------
Tab Menu Box
-------------------------------------*/
if ($('.tabmenu-box').length) {
    var tabWrap = $('.tab-content-box');
    var tabClicker = $('.tabmenu-box ul li');

    tabWrap.children('div').hide();
    tabWrap.children('div').eq(0).show();
    tabClicker.on('click', function() {
        var tabName = $(this).data('tab-name');
        tabClicker.removeClass('active');
        $(this).addClass('active');
        var id = '#'+ tabName;
        tabWrap.children('div').not(id).hide();
        tabWrap.children('div'+id).fadeIn('500');
        return false;
    });        
}



/*-------------------------------------
Preloader
-------------------------------------*/
if($('.preloader').length){
    $('.preloader').delay(500).fadeOut(500);
}



/*-------------------------------------
Fact Counter
-------------------------------------*/
if($('.count-box').length){
    $('.count-box').appear(function(){

        var $t = $(this),
            n = $t.find(".count-text").attr("data-stop"),
            r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
            $t.addClass("counted");
            $({
                countNum: $t.find(".count-text").text()
            }).animate({
                countNum: n
            }, {
                duration: r,
                easing: "linear",
                step: function() {
                    $t.find(".count-text").text(Math.floor(this.countNum));
                },
                complete: function() {
                    $t.find(".count-text").text(this.countNum);
                }
            });
        }

    },{accY: 0});
}


	
/*-------------------------------------
Featured One Carousel
-------------------------------------*/
if ($('.featured-one-carousel').length) {
    $('.featured-one-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav: false,
        smartSpeed: 500,
        autoHeight: false,
        autoplay: true,
        autoplayTimeout:10000,
        navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            800:{
                items:1
            },
            1024:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });    		
}



/*-------------------------------------
Brand Carousel
-------------------------------------*/
$(".brand-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    smartSpeed:800,
    responsive:{
        0:{
            items:2,
        },
        576:{
            items:3
        },
        768:{
            items:4
        },
        992:{
            items:4
        }
    }
}
)
    


/*-------------------------------------
Case Type2 Carousel
-------------------------------------*/
if ($('.case-type-2-carousel').length) {
    $('.case-type-2-carousel').owlCarousel({
        dots: false,
        loop: true,
        margin: 30,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        autoplayHoverPause: false,
        autoplay: 6000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            800:{
                items:1
            },
            1024:{
                items:3
            },
            1100:{
                items:3
            },
            1200:{
                items:3
            }
        }
    });    		
}
    



/*-------------------------------------
Client Carousel
-------------------------------------*/

if ($('.client-carousel').length) {
    $('.client-carousel').owlCarousel({
        dots: false,
        loop: true,
        margin: 30,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        autoplayHoverPause: false,
        autoplay: 6000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            800:{
                items:1
            },
            1024:{
                items:1
            },
            1100:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });    		
}



/*-------------------------------------
Progress Bar
-------------------------------------*/
if($('.progress-levels .progress-box .bar-fill').length){
    $(".progress-box .bar-fill").each(function() {
        $('.progress-box .bar-fill').appear(function(){
            var progressWidth = $(this).attr('data-percent');
            $(this).css('width',progressWidth+'%');
        });

    },{accY: 0});
}




/*-------------------------------------
Jquery Serch Box
-------------------------------------*/
$('a[href="#header-search"]').on("click", function (event) {
    event.preventDefault();
    var target = $("#header-search");
    target.addClass("open");
    setTimeout(function () {
        target.find('input').focus();
    }, 600);
    return false;
});

$("#header-search, #header-search button.close").on("click keyup", function (event) {
    if (
        event.target === this ||
        event.target.className === "close" ||
        event.keyCode === 27
    ) {
        $(this).removeClass("open");
    }
});




/*-------------------------------------
Elements Animation
-------------------------------------*/
if($('.wow').length){
    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       false,       // trigger animations on mobile devices (default is true)
        live:         true       // act on asynchronously loaded content (default is true)
      }
    );
    wow.init();
}

  


/*-------------------------------------
Contact Form Validation
-------------------------------------*/
if($("#contact-form").length){
    $("#contact-form").validate({
        submitHandler: function(form) {
          var form_btn = $(form).find('button[type="submit"]');
          var form_result_div = '#form-result';
          $(form_result_div).remove();
          form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
          var form_btn_old_msg = form_btn.html();
          form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
          $(form).ajaxSubmit({
            dataType:  'json',
            success: function(data) {
              if( data.status = 'true' ) {
                $(form).find('.form-control').val('');
              }
              form_btn.prop('disabled', false).html(form_btn_old_msg);
              $(form_result_div).html(data.message).fadeIn('slow');
              setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
            }
          });
        }
    });
}




/*-------------------------------------
Video Box Magnific Popup
-------------------------------------*/
$('#video-box').magnificPopup({
type:'iframe',
iframe: {
patterns: {
    youtube: {
      index: 'youtube.com/', 
      id: 'v=',

      src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
    },

  },

  srcAction: 'iframe_src', 
}

});



/*-------------------------------------
Video Box2 Magnific Popup
-------------------------------------*/
$('#video-box-2').magnificPopup({
type:'iframe',
iframe: {
patterns: {
    youtube: {
      index: 'youtube.com/', 
      id: 'v=',

      src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
    },

  },

  srcAction: 'iframe_src', 
}

});



/*-------------------------------------
Odometer Js
-------------------------------------*/
$('.odometer').appear(function(e) {
    var odo = $(".odometer");
    odo.each(function() {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
    });
});




/*-------------------------------------
According Box
-------------------------------------*/
if($('.accordion-box').length){
    $(".accordion-box").on('click', '.acc-btn', function() {

        var outerBox = $(this).parents('.accordion-box');
        var target = $(this).parents('.accordion');

        if($(this).hasClass('active')!==true){
            $(outerBox).find('.accordion .acc-btn').removeClass('active');
        }

        if ($(this).next('.acc-content').is(':visible')){
            return false;
        }else{
            $(this).addClass('active');
            $(outerBox).children('.accordion').removeClass('active-block');
            $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
            target.addClass('active-block');
            $(this).next('.acc-content').slideDown(300);	
        }
    });	
}



/*-------------------------------------
Testimonial Type1 Carousel
-------------------------------------*/
if ($('.testimonial-type1-carousel').length && $('.client-type1-thumbs-carousel').length) {

    var $sync3 = $(".testimonial-type1-carousel"),
        $sync4 = $(".client-type1-thumbs-carousel"),
        flag = true,
        duration = 500;

        $sync3
            .owlCarousel({
                loop: true,
                items: 1,
                margin: 0,
                nav: false,
                navText: [ '<span class="flaticon-left-arrow"></span>', '<span class="flaticon-right-arrow"></span>' ],
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000
            })
            .on('changed.owl.carousel', function (e) {
                if (!flag) {
                    flag = true;
                    $sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = true;
                }
            });

        $sync4
            .owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                nav: false,
                navText: [ '<span class="icon flaticon-left-arrow-2"></span>', '<span class="icon flaticon-right-arrow-1"></span>' ],
                dots: true,
                center: false,
                autoplay: true,
                autoplayTimeout: 5000,
                responsive: {
                    0:{
                        items:1,
                        autoWidth: false
                    },
                    400:{
                        items:1,
                        autoWidth: false
                    },
                    600:{
                        items:1,
                        autoWidth: false
                    },
                    1000:{
                        items:1,
                        autoWidth: false
                    },
                    1200:{
                        items:1,
                        autoWidth: false
                    }
                },
            })

    .on('click', '.owl-item', function () {
        $sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);
    })
    .on('changed.owl.carousel', function (e) {
        if (!flag) {
            flag = true;		
            $sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
            flag = false;
        }
    });
}



/*-------------------------------------
Select Dropdown Script
-------------------------------------*/
$("#contact-type1").selectmenu();



    
/*-------------------------------------
Sortable Masonary with Filters
-------------------------------------*/    
function sortableMasonry() {
    if($('.sortable-masonry').length){

        var winDow = $(window);
        // Needed variables
        var $container=$('.sortable-masonry .items-container');
        var $filter=$('.filter-btns');

        $container.isotope({
            filter:'*',
             masonry: {
                columnWidth : '.masonry-item'
             },
            animationOptions:{
                duration:500,
                easing:'linear'
            }
        });
        // Isotope Filter 
        $filter.find('li').on('click', function(){
            var selector = $(this).attr('data-filter');

            try {
                $container.isotope({ 
                    filter	: selector,
                    animationOptions: {
                        duration: 500,
                        easing	: 'linear',
                        queue	: false
                    }
                });
            } catch(err) {

            }
            return false;
        });


        winDow.on('resize', function(){
            var selector = $filter.find('li.active').attr('data-filter');

            $container.isotope({ 
                filter	: selector,
                animationOptions: {
                    duration: 300,
                    easing	: 'linear',
                    queue	: false
                }
            });
        });


        var filterItemA	= $('.filter-btns li');

        filterItemA.on('click', function(){
            var $this = $(this);
            if ( !$this.hasClass('active')) {
                filterItemA.removeClass('active');
                $this.addClass('active');
            }
        });
    }
}
	
	
	 

$(window).on('load', function () {
    
    sortableMasonry();    

    //OWl Carousel Activator
    if ($('.theme-banner-carousel').length) {
        $('.theme-banner-carousel').each(function () {

            var Self = $(this);
            var carouselOptions = Self.data('options');
            var carouselPrevSelector = Self.data('carousel-prev-btn');
            var carouselNextSelector = Self.data('carousel-next-btn');
            var thmCarousel = Self.owlCarousel(carouselOptions);
            if (carouselPrevSelector !== undefined) {
                $(carouselPrevSelector).on('click', function () {
                    thmCarousel.trigger('prev.owl.carousel', [1000]);
                    return false;
                });
            }
            if (carouselNextSelector !== undefined) {
                $(carouselNextSelector).on('click', function () {
                    thmCarousel.trigger('next.owl.carousel', [1000]);
                    return false;
                });
            }
        });
    }
    
    
    // Side Munu Block Inner
    if ($('.side-menu__block-inner').length) {
        $('.side-menu__block-inner').mCustomScrollbar({
            axis: 'y',
            theme: 'dark'
        });
    }  
  

    
    /*-------------------------------------
    Custom Cursor Overlay
    -------------------------------------*/  
    if ($('.custom-cursor__overlay').length) {

        // / cursor /
        var cursor = $(".custom-cursor__overlay .cursor"),
            follower = $(".custom-cursor__overlay .cursor-follower");

        var posX = 0,
            posY = 0;

        var mouseX = 0,
            mouseY = 0;

        TweenMax.to({}, 0.016, {
            repeat: -1,
            onRepeat: function () {
                posX += (mouseX - posX) / 9;
                posY += (mouseY - posY) / 9;

                TweenMax.set(follower, {
                    css: {
                        left: posX - 22,
                        top: posY - 22
                    }
                });

                TweenMax.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY
                    }
                });

            }
        });

        $(document).on("mousemove", function (e) {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            mouseX = e.pageX;
            mouseY = e.pageY - scrollTop;
        });
        $("button, a").on("mouseenter", function () {
            cursor.addClass("active");
            follower.addClass("active");
        });
        $("button, a").on("mouseleave", function () {
            cursor.removeClass("active");
            follower.removeClass("active");
        });
        $(".custom-cursor__overlay").on("mouseenter", function () {
            cursor.addClass("close-cursor");
            follower.addClass("close-cursor");
        });
        $(".custom-cursor__overlay").on("mouseleave", function () {
            cursor.removeClass("close-cursor");
            follower.removeClass("close-cursor");
        });
    }




});
    







    
    
    
})(window.jQuery);







