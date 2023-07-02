const { Telegraf } = require('telegraf');

require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);
const helpMessage =
    `
    Chatbot App
    /QuestionOne - What is shor sellimg?
    /QuestionTwo - What is the process of short-selling?
`

bot.on("text", (ctx) => {
    ctx.reply(helpMessage)
})

bot.command('What is short-selling?', (ctx) => {
    ctx.reply(`In finance, being short in an asset means investing in such a way that the investor will profit if the value of the asset falls. This is the opposite of a more conventional "long" position, where the investor will profit if the value of the asset rises.There are several ways of achieving a short position. The most fundamental method is "physical" selling short or short-selling, which involves borrowing assets (often securities such as shares or bonds) and selling them. The investor will later purchase the same number of the same type of securities to return them to the lender. If the price has fallen in the meantime, the investor will have made a profit equal to the difference. Conversely, if the price has risen then the investor will bear a loss. The short seller must usually pay a fee to borrow the securities (charged at a particular rate over time, similar to an interest payment), and reimburse the lender for any cash returns such as dividends that were due during the period of lease.To profit from a decrease in the price of a security, a short seller can borrow the security and sell it, expecting that it will be cheaper to repurchase in the future. When the seller decides that the time is right (or when the lender recalls the securities), the seller buys the same number of equivalent securities and returns them to the lender. The act of buying back the securities that were sold short is called covering the short, covering the position, or simply covering. A short position can be covered at any time before the securities are due to be returned. Once the position is covered, the short seller is not affected by subsequent rises or falls in the price of the securities, for it already holds the securities that it will return to the lender.`)
})
bot.hears('texts', (ctx) => {
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

bot.launch()