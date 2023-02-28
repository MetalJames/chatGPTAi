import bot from './assets/bot.svg';
import user from './assets/user.svg';

// const logo = require("./assets/bot.svg") as string;
// const logo = require("./assets/user.svg") as string;

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

let loadInterval;

function loader(element: any) {
    element.textContent = ''

    loadInterval = setInterval(() => {
        // Update the text content of the loading indicator
        element.textContent += '.';

        // If the loading indicator has reached three dots, reset it
        if (element.textContent === '....') {
            element.textContent = '';
        }
    }, 300);
}