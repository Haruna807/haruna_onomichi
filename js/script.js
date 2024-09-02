// メニュー
$(document).ready(function() {
  $("#js-drawer-button").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("is-checked");

    var img = $(this).find("img");
    if ($(this).hasClass("is-checked")) {
      img.attr("src", "./img/sp/drawer-icon-close.png");
      img.css("width", "40px");
    } else {
      img.attr("src", "./img/sp/drawer-icon.png");
      img.css("width", "");
    }

    $("#js-drawer-content").slideToggle(250);
  });

  $("#js-drawer-content a[href^='#']").on("click", function(e) {
    e.preventDefault();

    var target = $($(this).attr("href"));
    var offsetTop = target.offset().top;

    $("html, body").animate({ scrollTop: offsetTop }, 0, function() {
      $("#js-drawer-content").slideUp(250, function() {
        $("#js-drawer-button").removeClass("is-checked");
        var img = $("#js-drawer-button img");
        img.attr("src", "./img/sp/drawer-icon.png");
        img.css("width", "");
      });
    });

    $("html, body").animate({ scrollTop: offsetTop }, 0);
  });
});





// スワイパー

// const swiper1 = new Swiper('.about-swiper .swiper', {
//   autoplay: {
//     delay: 0,
//   },

//   loop: true,
//   speed: 3500,
//   slidesPerView: 4.5,
//   centeredSlides: true,
//   preventInteractionOnTransition: true,
//   spaceBetween: 1,

//   pagination: {
//     el: '.swiper-pagination',
//     type: 'progressbar',
//   },
// });


// モーダルウィンドウ

$(document).ready(function() {
  $('.prizes__card').on('click', function() {

    var imageSrc = $(this).data('image');
    var title = $(this).data('title');
    var description = $(this).data('description');
    
    $('#modal-image').attr('src', imageSrc);
    $('#modal-title').text(title);
    $('#modal-description').html(description);

    $('#modal').addClass('show');
    $('body').addClass('no-scroll');
  });

  $('#modal-close-btn').on('click', function() {
    $('#modal').removeClass('show');
    $('body').removeClass('no-scroll');
  });

});

// spotsのスワイパー

const swiperSpots = new Swiper('.swiper-spots', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    900: {
      centeredSlides: false,
    },
  },
});


// Q&A

jQuery(document).ready(function($) {
  $(".js-accordion").on("click", function(e) {
    e.preventDefault();

    var $parent = $(this).parent();
    var $body = $(this).next(".qa-box_body");

    $body.slideToggle(300, function() {
      if ($body.is(":visible")) {
        $parent.addClass("is-open");
      } else {
        $parent.removeClass("is-open");
      }
    });
  });
});


// formのエラー

$(document).ready(function() {
  $('form').on('submit', function(e) {
    let isValid = true;

      $('.form-text, .form-textarea, .form-select').each(function() {
        if ($(this).is('select')) {
          if ($(this).val() === '') {
            $(this).addClass('is-error');
            isValid = false;
          } else {
            $(this).removeClass('is-error');
          }
        } else if ($(this).is('textarea')) {
          if ($(this).val().trim() === '') {
            $(this).addClass('is-error');
            isValid = false;
          } else {
            $(this).removeClass('is-error');
          }
        } else {
          if ($(this).val().trim() === '') {
            $(this).addClass('is-error');
            isValid = false;
          } else {
            $(this).removeClass('is-error');
          }
        }
      });
      });
    });

    // フォームが無効な場合は送信しない
    if (!isValid) {
      e.preventDefault();
    };


// ページトップへ戻るボタン

$(function () {
  var pagetop = $("#js-pagetop");
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      pagetop.fadeIn(300);
    } else {
      pagetop.fadeOut(300);
    }
  });
  pagetop.click(function () {
    $("body,html").animate({
      scrollTop: 0,
    },0);
    return false;
  });
});




