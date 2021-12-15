'use strict';
var gCanvas;
var gCtx;
var gCurrMeme = getMeme();

function renderMeme() {
  // console.log(gCurrMeme);
  gCanvas = document.querySelector('#my-canvas');
  gCtx = gCanvas.getContext('2d');
  drawImgFromlocal(`/img/${gCurrMeme.selectedImgId}.jpg`);
  setTimeout(function () {
    renderText();
  }, 1);
}

function drawImgFromlocal(imgSrc) {
  var img = new Image();
  img.src = imgSrc;
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height); //img,x,y,xend,yend
  };
}

function drawText(txt, align, color, size) {
  console.log(color);
  // gCtx.font = '48px serif';
  // gCtx.fillText(txt, x, y);
  gCtx.textBaseline = 'middle';
  gCtx.textAlign = align;
  // gCtx.lineWidth = 2;
  // gCtx.strokeStyle = 'red';
  gCtx.font = `${size}px monospace`;
  gCtx.fillStyle = `${color}`;

  gCtx.fillText(txt, 225, 40);
  // gCtx.strokeText(txt, x, y);
}

function renderText() {
  drawText(
    gCurrMeme.lines[0].txt,
    gCurrMeme.lines[0].align,
    gCurrMeme.lines[0].color,
    gCurrMeme.lines[0].size
  );
}

function getInput() {
  var txtInput = document.querySelector('#meme-text').value;
  console.log(txtInput);
  setLineTxt(txtInput);
  renderMeme();
}
