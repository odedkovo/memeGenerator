'use strict';
var gImgs = [];
var gId = 1;
var gCountImgId = 1;
createImgs();
var gMeme = {
  selectedImgId: 0,
  id: 0,
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

function getCurrMemeId(imgId) {
  var currImg = gImgs[imgId];
  console.log(currImg);
  gImgs.imgUrl = currImg.url;
  gImgs.keyWords = currImg.keyWord;
  gImgs.selectedImgId = currImg.id;
}

function createImgs() {
  for (var i = 1; i < 19; i++) {
    gImgs.push(createImg());
  }
  setkeyWords();
}

function createImg() {
  var img = { id: gId, url: `img/${gId}.jpg`, keyWords: ['all'] };
  gId++;
  return img;
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

function moveLine(direction) {
  if (direction === 'up') gMeme.lines[gMeme.selectedLineIdx].y -= 20;
  else if (direction === 'down') gMeme.lines[gMeme.selectedLineIdx].y += 20;
}

function setkeyWords() {
  var happy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15];
  happy.forEach((num) => gImgs[num].keyWords.push('happy'));
  var comics = [17];
  comics.forEach((idx) => gImgs[idx].keyWords.push('comics'));
  var dogs = [1, 2];
  dogs.forEach((idx) => gImgs[idx].keyWords.push('dogs'));
  var drinks = [12];
  drinks.forEach((idx) => gImgs[idx].keyWords.push('drinks'));
  var books = [17];
  books.forEach((idx) => gImgs[idx].keyWords.push('books'));
  var love = [1, 2, 3, 10, 17];
  love.forEach((idx) => gImgs[idx].keyWords.push('love'));
  var baby = [1, 2, 4, 6, 8];
  baby.forEach((idx) => gImgs[idx].keyWords.push('baby'));
  var sleep = [2, 3];
  sleep.forEach((idx) => gImgs[idx].keyWords.push('sleep'));
  var shock = [6, 15];
  shock.forEach((idx) => gImgs[idx].keyWords.push('shock'));
  var funny = [0, 4, 5, 6, 7, 8, 9, 10, 15];
  funny.forEach((idx) => gImgs[idx].keyWords.push('funny'));
}

function sortBy(keyWord) {
  var filteredMemes = gImgs.filter((meme) => meme.keyWords.includes(keyWord));
  return filteredMemes;
}

function changeSelectedLine(idx) {
  gMeme.selectedLineIdx = idx;
}

function changeCurrMemeY(y) {
  gMeme.lines[gMeme.selectedLineIdx].y = y;
}

function setCurrMeme(chosenMeme) {
  gMeme = chosenMeme;
}

function addSticker(sticker) {
  gMeme.lines.push({
    txt: sticker,
    size: 40,
    align: 'center',
    color: 'black',
    strokeColor: 'white',
    y: gMeme.lines.length === 1 ? 350 : 250,
    font: 'impact',
  });
  gMeme.selectedLineIdx = gMeme.lines.length - 1;
}
