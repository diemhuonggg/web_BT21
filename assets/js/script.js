$(document).ready(function () {
    var stt = 0;
    var endImg = $("img.slide__img:last").attr("idx");

    $("button.change-btn").click(function () {
        stt = $(this).attr("idx");

        changeImg(stt);
    });

    $("#next").click(function () {
        if (++stt > endImg) {
            stt = 0;
        }

        changeImg(stt);
    });

    $("#prev").click(function () {
        if (--stt < 0) {
            stt = endImg;
        }

        changeImg(stt);
    });

    var interval;
    var timer = function () {
        interval = setInterval(function () {
            $("#next").click();
        }, 5000);
    };
    timer();
});


    //Hide all image slide__img and show image have index "stt"
    //Remove active all buttton and set "active" for button have index "stt"
    //Reset timer when change image
    function changeImg(stt) {
        $("img.slide__img").hide();
        $("img.slide__img").eq(stt).fadeIn(500);
        $("button.change-btn").removeClass("active");
        $("button.change-btn").eq(stt).addClass("active");

        clearInterval(interval);
        timer();
    }; 


  /* js menu mobile */
  const menu = document.querySelector('.header__nav-mobile')
  const btnOpen = document.querySelector('.js__menu-btn--open')
  const btnClose = document.querySelector('.js__menu-btn--close')

  function showMenu() {
     Object.assign(menu.style, {
         width: "100%",
         opacity: "1",
     })

  }

  function closeMenu() {
    Object.assign(menu.style, {
        width: "0",
        opacity: "0",
     })
  }

  btnOpen.addEventListener('click', showMenu)
  btnClose.addEventListener('click', closeMenu)