/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import { registerImage } from "./lazy.js";

const maximum = 123;
const minimum = 1;

const random = () => Math.floor(Math.random() * (maximum - minimum)) - minimum

const createImageNode = () =>  {
    const container = document.createElement('div');
    container.className = 'p-4'

    const image = document.createElement('img');
    image.className = 'mx-auto';
    image.src = `https://randomfox.ca/images/${random()}.jpg`;
    image.width ='320';

    container.appendChild(image);

    return container; 
}

const newImage = createImageNode();
const mountNode = document.getElementById('images');

// mountNode.appendChild(newImage);
mountNode.append(newImage);

const addButton = document.querySelector('button');
const action = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage)
}

addButton.addEventListener('click', action)