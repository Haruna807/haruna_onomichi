// document.querySelector("#js-drawer-button").addEventListener("click", function(e) {
//   e.preventDefault();

//   // #js-drawer-button と #js-drawer-content に .is-checked クラスをトグル
//   document.querySelector("#js-drawer-button").classList.toggle("is-checked");
//   document.querySelector("#js-drawer-content").classList.toggle("is-checked");

//   // 画像の src を切り替える
//   var img = document.querySelector("#js-drawer-button img");
//   if (document.querySelector("#js-drawer-button").classList.contains("is-checked")) {
//       img.src = "./img/sp/drawer-icon-close.png"; // .is-checked のときの画像を設定
//   } else {
//       img.src = "./img/sp/drawer-icon.png"; // 初期の画像を設定
//   }
// });


document.querySelector("#js-drawer-button").addEventListener("click", function(e) {
  e.preventDefault();

  // #js-drawer-button と #js-drawer-content に .is-checked クラスをトグル
  document.querySelector("#js-drawer-button").classList.toggle("is-checked");
  document.querySelector("#js-drawer-content").classList.toggle("is-checked");

  // 画像の src を切り替える
  var img = document.querySelector("#js-drawer-button img");
  if (document.querySelector("#js-drawer-button").classList.contains("is-checked")) {
      img.src = "./img/sp/drawer-icon-close.png"; // .is-checked のときの画像を設定
      img.style.width = "40px"; // 拡大したいサイズに設定（例として48px）
  } else {
      img.src = "./img/sp/drawer-icon.png"; // 初期の画像を設定
      img.style.width = ""; // 初期サイズに戻す場合は空文字列にするか、元のサイズを設定する
  }
});
