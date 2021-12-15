'use strict';

var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      size: 20,
      align: 'center',
      color: 'red',
      y: 50,
    },
  ],
};

function getMeme() {
  return gMeme;
}

function setLineTxt(text) {
  gMeme.lines[gMeme.selectedLineIdx].txt = text;
}

function setImg(imgId) {
  gMeme.selectedImgId = imgId;
}

function changeColor(color) {
  gMeme.lines[gMeme.selectedLineIdx].color = color;
}

function updateFont(val) {
  if (val === '+') gMeme.lines[gMeme.selectedLineIdx].size += 10;
  else if (val === '-') gMeme.lines[gMeme.selectedLineIdx].size -= 10;
}

function createLine() {
  gMeme.lines.push({
    txt: 'new text',
    size: 20,
    align: 'center',
    color: 'red',
    y: gMeme.lines.length === 1 ? 350 : 250,
    isFocused: true,
  });
  gMeme.selectedLineIdx = gMeme.lines.length - 1;
}

function switchLine() {
  if (gMeme.selectedLineIdx === gMeme.lines.length - 1)
    gMeme.selectedLineIdx = 0;
  else gMeme.selectedLineIdx++;
}
