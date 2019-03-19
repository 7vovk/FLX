$(document).on('ready', function () {

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function () {
    $('.preloader').fadeOut(1000);
  });

  /*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/

  function initParallax() {
    $('#home').parallax('50%', 0.3);

  }

  initParallax();

  /*-------------------------------------------------------------------------------
    LazyLoad
  -------------------------------------------------------------------------------*/

    function loadMobBg(selector, value) {
        selector.setAttribute("data-bg", value);
    }

    var lazyLoadInstance = new LazyLoad({
        elements_selector: '.lazy',
        load_delay: 300,
        callback_enter: function()  {
            const bg = document.getElementById("home");
            let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if (width <=768) {
                loadMobBg(bg, "url(img/home-bg-mob.jpg)");
            } else {
                loadMobBg(bg, "url(img/home-bg.jpg)");
            }
        }
    });



  /*-------------------------------------------------------------------------------
    Back top
  -------------------------------------------------------------------------------*/

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
  });

  // Animate the scroll to top
  $('.go-top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 300);
  });

});
