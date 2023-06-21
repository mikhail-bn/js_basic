import JSImage from '../../img/JavaScript-logo.png';


export class JSBlock {
    #container
    constructor() {
        this.#container = document.createElement('div');
        this.#container.className = 'js-block';
    }
    render() {
        const mainTitle = document.createElement('h1');
        mainTitle.className = 'main-title';
        mainTitle.textContent = 'JavaScript';

        const jsImage = document.createElement('img');
        jsImage.className = 'js-image';
        jsImage.src = JSImage;

        const foundedText = document.createElement('p');
        foundedText.textContent = 'С момента создания JavaScript прошло:';
        foundedText.className = 'founded-text';

        this.#container.append(mainTitle, jsImage, foundedText);

        return this.#container;
    }   
}