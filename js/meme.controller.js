'use strict';
var gCanvas;
var gCtx;
var gCurrMeme;
var handle;
var gIsSaved;
var gIsDownload;
getMeme();

function renderMeme() {
  // console.log(gCurrMeme);
  gCanvas = document.querySelector('#my-canvas');
  gCtx = gCanvas.getContext('2d');

  gCurrMeme = getMeme();
  drawImgFromlocal(`./img/${gCurrMeme.selectedImgId}.jpg`);
  setTimeout(function () {
    renderText();
  }, 1);
  updateInputElemnt();
}

function drawImgFromlocal(imgSrc) {
  var img = new Image();
  img.src = imgSrc;
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height); //img,x,y,xend,yend
  };
}

function renderText() {
  gCurrMeme.lines.forEach(function (line) {
    drawText(
      line.txt,
      line.align,
      line.color,
      line.strokeColor,
      line.size,
      line.y,
      line.font
    );
  });
  renderRect(gCurrMeme.selectedLineIdx);
}

function renderRect(num) {
  if (gIsSaved === true) return;
  var selectedTxtIdx = gCurrMeme.selectedLineIdx;
  // console.log(selectedTxtIdx);
  var selectedLine = gCurrMeme.lines[selectedTxtIdx];

  // console.log(selectedLine);
  drawRect(0, selectedLine.y - selectedLine.size / 2, 450, selectedLine.size);
}

function drawText(txt, align, color, strokeColor, size, y, font) {
  gCtx.textBaseline = 'middle';
  gCtx.textAlign = align;
  gCtx.font = `${size}px ${font}`;
  gCtx.fillStyle = color;
  gCtx.strokeStyle = strokeColor;
  gCtx.fillText(txt, 225, y);
  gCtx.strokeText(txt, 225, y);
}

function getInput() {
  var txtInput = document.querySelector('#meme-text');
  setLineTxt(txtInput.value);
  renderMeme();
}

function getColor() {
  var chosenColor = document.querySelector('#chosen-color').value;
  console.log(chosenColor);
  changeColor(chosenColor);
  renderMeme();
}

function changeFontSize(val) {
  if (val === '+') updateFont('+');
  else if (val === '-') updateFont('-');
  renderMeme();
}

function onCreateLine() {
  createLine();
  renderMeme();
}

function onSwitchLine() {
  switchLine();
  renderMeme();
}

function drawRect(xStart, yStart, width, height) {
  gCtx.beginPath();
  gCtx.rect(xStart, yStart, width, height);
  gCtx.fillStyle = 'black';
  gCtx.strokeStyle = 'black';
  gCtx.stroke();
}

function updateInputElemnt() {
  var txtInput = document.querySelector('#meme-text');
  // console.log(gCurrMeme);
  var selectedLineTxt = gCurrMeme.lines[gCurrMeme.selectedLineIdx].txt;

  txtInput.value = selectedLineTxt;
}

function onAlign(side) {
  changeAlign(side);
  renderMeme();
}

function onStrokeColor() {
  var strokeColor = document.querySelector('#stroke-color').value;
  console.log(strokeColor);
  changeStrokeColor(strokeColor);
  renderMeme();
}
function onTrash() {
  deleteSelectedLine();
  renderMeme();
}

function onSelectFont(selectedFont) {
  console.log(selectedFont);
  changeTxtFont(selectedFont);
  renderMeme();
}

function openDownloadModal() {
  document.querySelector('.download-modal').style.left = '80%';
  gIsSaved = true;
  renderMeme();
}
function onDownload(elLink) {
  document.querySelector('.download-modal').style.left = '120%';
  download(elLink);
}

function download(elLink) {
  var imgContent = gCanvas.toDataURL('img/jpg');
  console.log(imgContent);
  elLink.href = imgContent;
  gIsSaved = false;
}

function onSaveMeme() {
  gIsSaved = true;
  console.log(gIsSaved);
  renderMeme();
  console.log('hi');
  setTimeout(function () {
    saveMeme();
  }, 1);

  // gIsSaved === false;
}
/////
var gSavedImgId = 1;
//////
function saveMeme() {
  var imgContent = gCanvas.toDataURL('img/jpeg');
  gCurrMeme.imgUrl = imgContent;
  /////
  gCurrMeme.savedImgId = gSavedImgId;
  ///////
  var savedMemes = loadFromStorage('savedMemesDB');
  console.log(savedMemes);
  if (!savedMemes || savedMemes.length === 0)
    saveToStorage('savedMemesDB', [gCurrMeme]);
  else {
    savedMemes.push(gCurrMeme);
    saveToStorage('savedMemesDB', savedMemes);
  }
  gIsSaved = false;
  //////
  gSavedImgId++;
  //////
}

function onMoveLine(direction) {
  moveLine(direction);
  renderMeme();
}

function uploadImg() {
  document.querySelector('.share-container').style.left = '75%';
  const imgDataUrl = gCanvas.toDataURL();

  // A function to be called if request succeeds
  function onSuccess(uploadedImgUrl) {
    const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl);
    document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share 
        </a> </br> <button onclick="closeShareModal()">X</button>  `;
  }
  doUploadImg(imgDataUrl, onSuccess);
}

function doUploadImg(imgDataUrl, onSuccess) {
  const formData = new FormData();
  formData.append('img', imgDataUrl);

  fetch('//ca-upload.com/here/upload.php', {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.text())
    .then((url) => {
      console.log('Got back live url:', url);
      onSuccess(url);
    })
    .catch((err) => {
      console.error(err);
    });
}

function closeShareModal() {
  document.querySelector('.share-container').style.left = '125%';
}
