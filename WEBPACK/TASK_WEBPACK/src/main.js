// Инициализация npm init -y
// Установка webpack -cli
// Создание webpack.config.js
// Прописывание папок и путей entry output и mode
// Прописать в package.json в script команды на запуск
// Установка html-webpack-plugin
// Установка clean-webpack-plugin
// Установка babel-loader
// Установка style-loader css-loader
// Установка file-loader
// Установка webpack-dev-server
// Конфигурация с сайта webpack.js.org -> #using-webpack-dev-server
// Прописать команды в package.json

import "../style.css";
import css from "../style.css";
import jsImage from '../img/webpack.jpg';


console.log(`Hello, I'm using webpack!`);

const jsImageHTML = document.createElement('img');
jsImageHTML.className = 'js-Image';
jsImageHTML.src = jsImage;
document.body.append(jsImageHTML);
