'use strict';

function onInitGallery() {
  renderGallery();
}

function renderGallery() {
  var elgallery = document.querySelector('.gallery');
  document.querySelector('.editor').style.display = 'none';
  document.querySelector('.hero').style.display = 'flex';
  elgallery.style.display = 'grid';

  var strHtml = '';
  for (var i = 1; i < 19; i++) {
    strHtml += ` <div class="img img${i}"><img onclick="onImgSelect(${i})" src="./img/${i}.jpg" alt=""/></div>`;
  }
  console.log(strHtml);
  elgallery.innerHTML = strHtml;
}

function onImgSelect(imgId) {
  document.querySelector('.gallery').style.display = 'none';
  document.querySelector('.editor').style.display = 'block';
  document.querySelector('.hero').style.display = 'none';
  setImg(imgId);
  renderMeme();
}
