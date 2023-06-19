import "../style.css";
import jsImage from '../img/JavaScript-logo.png';


console.log('Hello, world!');
const jsImageHTML = document.createElement('img');
jsImageHTML.className = 'js-Image';
jsImageHTML.src = jsImage;
document.body.append(jsImageHTML);