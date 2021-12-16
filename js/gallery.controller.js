'use strict';
var gclickedMore = 0;

function renderGallery(keyWord) {
  var elgallery = document.querySelector('.gallery-container .gallery');
  document.querySelector('.editor').style.display = 'none';
  document.querySelector('.hero').style.display = 'flex';
  document.querySelector('.me').style.display = 'flex';
  document.querySelector('.gallery-li').classList.add('active');
  elgallery.style.display = 'grid';
  console.log(keyWord);
  var sortedArray = onSortBy(keyWord);
  console.log(sortedArray);
  var strHtml = '';
  sortedArray.forEach((memeImg) => {
    strHtml += ` <div class="img img${memeImg.id}"><img onclick="onImgSelect(${memeImg.id})" src="./img/${memeImg.id}.jpg" alt=""/></div>`;
  });
  elgallery.innerHTML = strHtml;
}

function onImgSelect(imgId) {
  getCurrMemeId(imgId);
  document.querySelector('.gallery-li').classList.remove('active');
  document.querySelector('.gallery').style.display = 'none';
  document.querySelector('.editor').style.display = 'flex';
  document.querySelector('.hero').style.display = 'none';
  document.querySelector('.me').style.display = 'none';
  document.querySelector('.saved-memes').style.display = 'none';
  setImg(imgId);
  renderMeme();
}

function onSortBy(value) {
  // console.log(value);
  var arraySorted = sortBy(value);
  return arraySorted;
}

function loadMoreKeyWords() {
  var elMoreKeyWords = document.querySelector('.more-key-words');
  var elMoreTxt = document.querySelector('.key-words span');
  if (gclickedMore % 2 === 0) {
    elMoreKeyWords.style.display = 'flex';
    elMoreTxt.innerText = 'less..';
  } else {
    elMoreKeyWords.style.display = 'none';
    elMoreTxt.innerText = 'more..';
  }
  gclickedMore++;
}

function showAbout() {
  document.querySelector('.me').style.display = 'flex';
}
