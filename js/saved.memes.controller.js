'use strict';
function renderSavedMemes() {
  document.querySelector('.gallery').style.display = 'none';
  document.querySelector('.editor').style.display = 'none';
  document.querySelector('.me').style.display = 'none';
  document.querySelector('.hero').style.display = 'none';
  var savedMemes = loadFromStorage('savedMemesDB');

  var elSavedMemes = document.querySelector('.saved-memes');
  var strHtml = '';

  for (var i = 1; i <= savedMemes.length; i++) {
    strHtml += `<div onclick="onImgSelect(${
      savedMemes[i - 1].selectedImgId
    })" class="img img${i}"><img src="${
      savedMemes[i - 1].imgUrl
    }" alt=""></div>`;
  }
  elSavedMemes.innerHTML = strHtml;
}
