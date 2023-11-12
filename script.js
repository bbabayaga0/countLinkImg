'use strict'

window.onload = function() { 
    // получаем все ссылки и изображения с DOM
const links = document.links;
const imgs = document.images;

// подсчитываем количество элементов
let linkCount = links.length;
let imgCount = imgs.length;

document.writeln(`Количество ссылок: ${linkCount}`);
document.writeln(`Количество изображений: ${imgCount}`);
}