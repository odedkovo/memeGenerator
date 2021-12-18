'use strict';
var gclickedMore = 0;
function renderGallery(keyWord) {
  document.querySelector('.saved-memes').style.display = 'none';
  var elgallery = document.querySelector('.gallery-container .gallery');
  document.querySelector('.editor').style.display = 'none';
  document.querySelector('.hero').style.display = 'flex';
  document.querySelector('.me').style.display = 'flex';
  document.querySelector('.gallery-li').classList.add('active');
  document.querySelector('.saved-memes-li').classList.remove('active');
  document.querySelector('.about-li').classList.remove('active');
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
  document.querySelector('.gallery-li').classList.remove('.active');
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
  document.querySelector('.gallery-li').classList.remove('active');
  document.querySelector('.saved-memes-li').classList.remove('active');
  document.querySelector('.about-li').classList.add('active');
}

function renderSavedMemes() {
  document.querySelector('.gallery-li').classList.remove('active');
  document.querySelector('.saved-memes-li').classList.add('active');
  document.querySelector('.about-li').classList.remove('active');
  document.querySelector('.saved-memes').style.display = 'grid';
  document.querySelector('.gallery').style.display = 'none';
  document.querySelector('.editor').style.display = 'none';
  document.querySelector('.me').style.display = 'none';
  document.querySelector('.hero').style.display = 'none';
  var savedMemes = loadFromStorage('savedMemesDB');
  var elSavedMemes = document.querySelector('.saved-memes');
  var strHtml = '';
  for (var i = 1; i <= savedMemes.length; i++) {
    strHtml += `<div onclick="onImgSelect(${
      savedMemes[i - 1].savedImgId
    })" class="img img${i}"><img src="${
      savedMemes[i - 1].imgUrl
    }" alt=""></div>`;
  }
  elSavedMemes.innerHTML = strHtml;
}
