'use strict';

var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      size: 20,
      align: 'left',
      color: 'red',
    },
  ],
};

function getMeme() {
  return gMeme;
}

function setLineTxt(text) {
  gMeme.lines[0].txt = text;
}

function setImg(imgId) {
  gMeme.selectedImgId = imgId;
}