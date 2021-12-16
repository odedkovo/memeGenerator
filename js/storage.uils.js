'use strict';
function saveToStorage(currUserName, currUser) {
  const json = JSON.stringify(currUser);
  localStorage.setItem(currUserName, json);
}
function loadFromStorage(key) {
  const json = localStorage.getItem(key);
  const val = JSON.parse(json);
  return val;
}
