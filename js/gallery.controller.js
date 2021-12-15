'use strict';

function onInitGallery() {
  renderGallery();
}

function renderGallery() {
  var elgallery = document.querySelector('.gallery');
  elgallery.innerHTML = ` <div onclick="onImgSelect(1)" class="img img1">
  <img src="/img/1.jpg" alt="" />
</div>
<div onclick="onImgSelect(2)" class="img img2">
  <img src="/img/2.jpg" alt="" />
</div>`;
}

function onImgSelect(imgId) {
  setImg(imgId);

  renderMeme();
}
