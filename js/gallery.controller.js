'use strict';
var gclickedMore = 0;

function init() {
  renderGallery('all');
  gCanvas = document.querySelector('#my-canvas');
  gCtx = gCanvas.getContext('2d');
  gCanvas.addEventListener('mousedown', (event) => mouseDown(event));
  gCanvas.addEventListener('mouseup', (event) => mouseUp(event));
  gCanvas.addEventListener('mousemove', (event) => mouseMove(event));
}

function renderGallery(keyWord) {
  renderSection('gallery');
  makeActive('gallery');

  var elgallery = document.querySelector('.gallery-container .gallery');
  elgallery.style.display = 'grid';
  var sortedArray = onSortBy(keyWord);
  var strHtml = '';
  sortedArray.forEach((memeImg) => {
    strHtml += ` <div class="img img${memeImg.id}"><img onclick="onImgSelect(${memeImg.id})" src="./img/${memeImg.id}.jpg" alt=""/></div>`;
  });
  elgallery.innerHTML = strHtml;
}

function onSavedImgSelect(imgId) {
  var savedMemes = loadFromStorage('savedMemesDB');
  var chosenMeme = savedMemes.find((savedMeme) => savedMeme.id === +imgId);
  setCurrMeme(chosenMeme);
  renderSection('savedImg');
  gCurrMeme = getMeme();
  renderSavedMeme(chosenMeme);
}

function renderSavedMeme(savedMeme) {
  drawImgFromlocal(`./img/${savedMeme.selectedImgId}.jpg`);
  setTimeout(function () {
    renderText();
  }, 1);
  updateInputElemnt();
}

function onImgSelect(imgId) {
  getCurrMemeId(imgId);
  renderSection('img');
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
  makeActive('about');
}

function renderSavedMemes() {
  makeActive('saved');
  renderSection('savedMemes');
  var savedMemes = loadFromStorage('savedMemesDB');
  console.log(savedMemes);
  var elSavedMemes = document.querySelector('.saved-memes');
  var strHtml = '';
  for (var i = 1; i <= savedMemes.length; i++) {
    strHtml += `<div onclick="onSavedImgSelect('${
      savedMemes[i - 1].id
    }')" class="img img${i}"><img src="${
      savedMemes[i - 1].imgUrl
    }" alt=""></div>`;
  }
  elSavedMemes.innerHTML = strHtml;
}

function makeActive(key) {
  if (key === 'gallery') {
    document.querySelector('.gallery-li').classList.add('active');
    document.querySelector('.saved-memes-li').classList.remove('active');
    document.querySelector('.about-li').classList.remove('active');
  } else if (key === 'saved') {
    document.querySelector('.saved-memes-li').classList.add('active');
    document.querySelector('.gallery-li').classList.remove('active');
    document.querySelector('.about-li').classList.remove('active');
  } else if (key === 'about') {
    document.querySelector('.gallery-li').classList.remove('active');
    document.querySelector('.about-li').classList.add('active');
    document.querySelector('.saved-memes-li').classList.remove('active');
  }
}

function renderSection(key) {
  if (key === 'gallery') {
    document.querySelector('.saved-memes').style.display = 'none';
    document.querySelector('.editor').style.display = 'none';
    document.querySelector('.hero').style.display = 'flex';
    document.querySelector('.me').style.display = 'flex';
  }
  if (key === 'img') {
    document.querySelector('.gallery-li').classList.remove('.active');
    document.querySelector('.gallery').style.display = 'none';
    document.querySelector('.editor').style.display = 'flex';
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.me').style.display = 'none';
    document.querySelector('.saved-memes').style.display = 'none';
  }
  if (key === 'savedMemes') {
    document.querySelector('.saved-memes').style.display = 'grid';
    document.querySelector('.gallery').style.display = 'none';
    document.querySelector('.editor').style.display = 'none';
    document.querySelector('.me').style.display = 'none';
    document.querySelector('.hero').style.display = 'none';
  }
  if (key === 'savedImg') {
    document.querySelector('.gallery-li').classList.remove('.active');
    document.querySelector('.gallery').style.display = 'none';
    document.querySelector('.editor').style.display = 'flex';
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.me').style.display = 'none';
    document.querySelector('.saved-memes').style.display = 'none';
  }
}
