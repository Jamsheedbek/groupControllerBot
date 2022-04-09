require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const TOKEN = process.env.TOKEN;
const express = require('express');
const app = express();

const bot = new TelegramBot(TOKEN, {
    polling: true,
});

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(
        msg.chat.id,
        'Salom ' + msg.from.first_name + ' botimizga xush kelibsiz'
    );
});

bot.on('message', (msg) => {
    console.log(msg);
    const xabar = msg.text
        .split('')
        .filter((e) => e != ' ')
        .join('');
    if (xabar.includes('888331001') || xabar.includes('971620802')) {
        bot.deleteMessage(msg.chat.id, msg.message_id);
    }
});

app.listen(process.env.PORT || 8080, console.log(8080));
