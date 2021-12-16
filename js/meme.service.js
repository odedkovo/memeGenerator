'use strict';
var gId = 1;
var gCountImgId = 1;
var gMemes = [];
createMemes();
// console.log(gMemes);
var gMeme = {};

function getCurrMemeId(imgId) {
  setCurrMeme(imgId);
}
function setCurrMeme(id) {
  gMeme = gMemes[id];
  // console.log(gMeme);
}

function createMemes() {
  for (var i = 1; i < 19; i++) {
    gMemes.push(createMemeForArray());
  }
  setkeyWords();
}
function createMemeForArray() {
  var meme = {
    selectedImgId: gCountImgId,
    id: gId,
    imgUrl: '',
    selectedLineIdx: 0,
    keyWords: [],

    lines: [
      {
        txt: 'whrite something',
        size: 20,
        align: 'center',
        color: 'red',
        strokeColor: 'white',
        y: 50,
        font: 'impact',
      },
    ],
  };

  gId++;
  gCountImgId++;
  return meme;
}
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
  console.log(gMeme);
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
    strokeColor: 'white',
    y: gMeme.lines.length === 1 ? 350 : 250,
    font: 'impact',
  });
  gMeme.selectedLineIdx = gMeme.lines.length - 1;
}

function switchLine() {
  if (gMeme.selectedLineIdx === gMeme.lines.length - 1)
    gMeme.selectedLineIdx = 0;
  else gMeme.selectedLineIdx++;
}

function changeAlign(side) {
  gMeme.lines[gMeme.selectedLineIdx].align = side;
}

function changeStrokeColor(strokeColor) {
  gMeme.lines[gMeme.selectedLineIdx].strokeColor = strokeColor;
}

function deleteSelectedLine() {
  gMeme.lines.splice(gMeme.selectedLineIdx, 1);
  gMeme.selectedLineIdx--;
  if (gMeme.selectedLineIdx < 0) gMeme.selectedLineIdx = 0;
}
function changeTxtFont(selectedFont) {
  gMeme.lines[gMeme.selectedLineIdx].font = selectedFont;
}

function setkeyWords() {
  var all = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  all.forEach((num) => gMemes[num].keyWords.push('all'));

  var happy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15];
  happy.forEach((num) => gMemes[num].keyWords.push('happy'));
  var comics = [17];
  comics.forEach((idx) => gMemes[idx].keyWords.push('comics'));
  var dogs = [1, 2];
  dogs.forEach((idx) => gMemes[idx].keyWords.push('dogs'));
  var drinks = [12];
  drinks.forEach((idx) => gMemes[idx].keyWords.push('drinks'));
  var books = [17];
  books.forEach((idx) => gMemes[idx].keyWords.push('books'));
  var love = [1, 2, 3, 10, 17];
  love.forEach((idx) => gMemes[idx].keyWords.push('love'));
  var baby = [1, 2, 4, 6, 8];
  baby.forEach((idx) => gMemes[idx].keyWords.push('baby'));
  var sleep = [2, 3];
  sleep.forEach((idx) => gMemes[idx].keyWords.push('sleep'));
  var shock = [6, 15];
  shock.forEach((idx) => gMemes[idx].keyWords.push('shock'));

  var funny = [0, 4, 5, 6, 7, 8, 9, 10, 15];
  funny.forEach((idx) => gMemes[idx].keyWords.push('funny'));
}

function sortBy(keyWord) {
  var filteredMemes = gMemes.filter((meme) => meme.keyWords.includes(keyWord));
  return filteredMemes;
}
