const { Telegraf } = require('telegraf');

require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);
const helpMessage =
    `
    Chatbot App
    /QuestionOne - What is shor sellimg?
    /QuestionTwo - What is the process of short-selling?
`

bot.help((ctx) => {
    ctx.reply(helpMessage)
})
bot.hears('/QuestionOne', (ctx) => {
    ctx.reply(`Yes, short-selling requires a margin account because to initiate a short position, you must first borrow a stock. Short-selling cannot be done in a cash account.`)
})
bot.hears('What is the process of short-selling?', (ctx) => {
    ctx.reply(`First, you locate shares of a stock to borrow. Then, you borrow those shares, and incur a borrow cost per share. Then, you short the stock. Then, if the price falls, you buy back the stock. `)
})
bot.hears('What fees are incurred in short-selling?', (ctx) => {
    ctx.reply(`There is a fee to borrow shares of a stock. These fees can vary from broker to broker. The maximum fee that Rob will accept per share is equal to 1/5th the total potential profit on the trade. For example, if the potential profit on a trade is $1 per share, Rob will accept a maximum per-share borrow cost of .20. If you hold a short position overnight, you will be charged an overnight fee. You can check with your broker to find the overnight fees for a position. The fee will be different for every stock and every trade, so make sure to check with your broker. `)
})
bot.hears('What fees are incurred in short-selling?', (ctx) => {
    ctx.reply(`There is a fee to borrow shares of a stock. These fees can vary from broker to broker. The maximum fee that Rob will accept per share is equal to 1/5th the total potential profit on the trade. For example, if the potential profit on a trade is $1 per share, Rob will accept a maximum per-share borrow cost of .20. If you hold a short position overnight, you will be charged an overnight fee. You can check with your broker to find the overnight fees for a position. The fee will be different for every stock and every trade, so make sure to check with your broker. `)
})
bot.hears('What fees are incurred in short-selling?', (ctx) => {
    ctx.reply(`There is a fee to borrow shares of a stock. These fees can vary from broker to broker. The maximum fee that Rob will accept per share is equal to 1/5th the total potential profit on the trade. For example, if the potential profit on a trade is $1 per share, Rob will accept a maximum per-share borrow cost of .20. If you hold a short position overnight, you will be charged an overnight fee. You can check with your broker to find the overnight fees for a position. The fee will be different for every stock and every trade, so make sure to check with your broker. `)
})
bot.hears('What fees are incurred in short-selling?', (ctx) => {
    ctx.reply(`There is a fee to borrow shares of a stock. These fees can vary from broker to broker. The maximum fee that Rob will accept per share is equal to 1/5th the total potential profit on the trade. For example, if the potential profit on a trade is $1 per share, Rob will accept a maximum per-share borrow cost of .20. If you hold a short position overnight, you will be charged an overnight fee. You can check with your broker to find the overnight fees for a position. The fee will be different for every stock and every trade, so make sure to check with your broker. `)
})
bot.hears('What fees are incurred in short-selling?', (ctx) => {
    ctx.reply(`There is a fee to borrow shares of a stock. These fees can vary from broker to broker. The maximum fee that Rob will accept per share is equal to 1/5th the total potential profit on the trade. For example, if the potential profit on a trade is $1 per share, Rob will accept a maximum per-share borrow cost of .20. If you hold a short position overnight, you will be charged an overnight fee. You can check with your broker to find the overnight fees for a position. The fee will be different for every stock and every trade, so make sure to check with your broker. `)
})

bot.command('info', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Bot info', {
        reply_markup: {
            keyboard: [
                [
                    { text: 'Start' },
                    { text: 'End' }
                ]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    })
})

bot.hears('Start', ctx => {
    ctx.reply(helpMessage)
})

bot.launch()