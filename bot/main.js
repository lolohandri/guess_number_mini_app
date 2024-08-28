import TelegramBot from 'node-telegram-bot-api';
import * as path from "path";
import * as fs from "fs";

const token = '7520590989:AAGRl9s6QEv5P9f1n8djPIWmIHxpQJN3tYg';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;
    const webAppUrl = 'https://up-steadily-lab.ngrok-free.app/'; // Replace with your web app's URL

    const photoPath = path.resolve('../bot/public', 'logo.png');
    const photoStream = fs.createReadStream(photoPath);

    // Send the photo first
    await bot.sendPhoto(chatId, photoStream, {
        caption: '*Welcome to the guess number bot!*\n\nPlease open the app using the button below to try to guess random number!',
        reply_markup: {
            inline_keyboard: [
                [{text: 'Open App', web_app: {url: webAppUrl}}]
            ]
        },
        parse_mode: 'Markdown'
    });
});