jQuery("#js-drawer-button").on("click", function(e) {
    e.preventDefault();
    jQuery("#js-drawer-button").toggleClass("is-checked");

    jQuery("#js-drawer-content").slideToggle(280);
});


$(document).ready(function() {
  $("#js-drawer-button").click(function() {
    var img = $("#js-drawer-button img");

    if ($(this).hasClass("is-checked")) {
      img.attr("src", "./img/sp/drawer-icon-close.png"); // .is-checked のときの画像を設定
      img.css("width", "40px"); // 拡大したいサイズに設定
    } else {
      img.attr("src", "./img/sp/drawer-icon.png"); // 初期の画像を設定
      img.css("width", ""); // 初期サイズに戻す場合は空文字列にするか、元のサイズを設定する
    }
  });
});

// スワイパー

// const swiper = new Swiper('.swiper', {
//   autoplay: {
//     delay: 0,
//   },

//   loop: true,
//   speed: 3500,
//   slidesPerView: 3.5,
//   centeredSlides: true,
//   preventInteractionOnTransition: true,

//   pagination: {
//     el: '.swiper-pagination',
//     type: 'progressbar',
//   },
// });




