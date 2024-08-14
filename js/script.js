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
    // モーダルに表示するデータを取得
    var imageSrc = $(this).data('image');
    var title = $(this).data('title');
    var description = $(this).data('description');
    
    // モーダルの内容を更新
    $('#modal-image').attr('src', imageSrc);
    $('#modal-title').text(title);
    $('#modal-description').html(description); // HTMLとして扱う
    
    // モーダルを表示
    $('#modal').addClass('show');
    $('body').addClass('no-scroll');
  });
  
  // 「閉じる」ボタンをクリックしてモーダルを閉じる
  $('#modal-close-btn').on('click', function() {
    $('#modal').removeClass('show');
    $('body').removeClass('no-scroll');
  });
  
});




