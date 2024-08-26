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
    nextEl: '.swiper-button-next', // 次のスライドへ移動するボタンのセレクタ
    prevEl: '.swiper-button-prev', // 前のスライドへ移動するボタンのセレクタ
  },
  breakpoints: {
    900: { // lgサイズ以上の設定
      centeredSlides: false, // 左端から開始
    },
  },
});


// Q&A

// jQuery(".js-accordion").on("click", function(e) {
//   e.preventDefault();

//   if (jQuery(this).parent().hasClass("is-open")){
//     jQuery(this).parent().removeClass("is-open");
//     jQuery(this).next().slideUp();
//   } else {
//     jQuery(this).parent().addClass("is-open");
//     jQuery(this).next().slideDown();
//   };
// });

jQuery(document).ready(function($) {
  $(".js-accordion").on("click", function(e) {
    e.preventDefault();

    var $parent = $(this).parent();
    var $body = $(this).next(".qa-box_body");

    // 現在のアコーディオンのボディをトグル
    $body.slideToggle(300, function() {
      // アニメーション完了後にクラスをトグル
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
  // フォーム送信時にバリデーションを行う例
  $('form').on('submit', function(e) {
    let isValid = true;

    // 各入力フィールドをチェック
    $('.form-text, .form-textarea, .form-select').each(function() {
      if ($(this).is('select')) {
        // セレクトボックスの場合、選択されていない場合はエラー
        if ($(this).val() === '') {
          $(this).addClass('is-error');
          isValid = false;
        } else {
          $(this).removeClass('is-error');
        }
      } else if ($(this).is('textarea')) {
        // テキストエリアの場合、空の場合はエラー
        if ($(this).val().trim() === '') {
          $(this).addClass('is-error');
          isValid = false;
        } else {
          $(this).removeClass('is-error');
        }
      } else {
        // その他のテキストフィールドの場合、空の場合はエラー
        if ($(this).val().trim() === '') {
          $(this).addClass('is-error');
          isValid = false;
        } else {
          $(this).removeClass('is-error');
        }
      }
    });

    // フォームが無効な場合は送信を防ぐ
    if (!isValid) {
      e.preventDefault();
    }
  });

  // フォームフィールドの入力時にエラーステータスを更新
  $('.form-text, .form-textarea, .form-select').on('input change', function() {
    if ($(this).is('select')) {
      if ($(this).val() === '') {
        $(this).addClass('is-error');
      } else {
        $(this).removeClass('is-error');
      }
    } else if ($(this).is('textarea')) {
      if ($(this).val().trim() === '') {
        $(this).addClass('is-error');
      } else {
        $(this).removeClass('is-error');
      }
    } else {
      if ($(this).val().trim() === '') {
        $(this).addClass('is-error');
      } else {
        $(this).removeClass('is-error');
      }
    }
  });
});




