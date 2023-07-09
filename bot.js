const { Telegraf } = require('telegraf');

require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);
const startMessage =
    `
/Short_Selling - What is short selling?
/Categories - What topics can I ask here?
`
const categories =
    `
    /Short_Selling_Questions - SHORT SELLING QUESTIONS
/Pivot_Questions - PIVOT QUESTIONS
/General_Questions - GENERAL QUESTIONS
`

const ShortSellingQuestions =
    `
/First_Question - What is short-selling?
/Second_Question - Does short-selling require a margin account?
/Third_Question - What is the process of short-selling?
/Fourth_Question - What fees are incurred in short-selling?
/Fifth_Question - Is short-selling dangerous? Is it more risky than buying stocks?
/More_Question - Tap More Question to show more questions related Short Selling
`

const moreShortSellingQuestions =
    `
/Six_Question - What is short-selling?
/Seven_Question - Does short-selling require a margin account?
/Eight_Question - What is the process of short-selling?
/Nine_Question - What fees are incurred in short-selling?
/Ten_Question - Is short-selling dangerous? Is it more risky than buying stocks?
`

bot.help((ctx) => {
    ctx.reply(startMessage)
})
bot.hears('/Short_Selling', (ctx) => {
    ctx.reply(`From Wikipedia: In finance, being short in an asset means investing in such a way that the investor will profit if the value of the asset falls.This is the opposite of a more conventional "long" position, where the investor will profit if the value of the asset rises.

There are several ways of achieving a short position.The most fundamental method is "physical" selling short or short - selling, which involves borrowing assets(often securities such as shares or bonds) and selling them.The investor will later purchase the same number of the same type of securities to return them to the lender.If the price has fallen in the meantime, the investor will have made a profit equal to the difference.Conversely, if the price has risen then the investor will bear a loss.The short seller must usually pay a fee to borrow the securities(charged at a particular rate over time, similar to an interest payment), and reimburse the lender for any cash returns such as dividends that were due during the period of lease.
    
To profit from a decrease in the price of a security, a short seller can borrow the security and sell it, expecting that it will be cheaper to repurchase in the future.When the seller decides that the time is right(or when the lender recalls the securities), the seller buys the same number of equivalent securities and returns them to the lender.The act of buying back the securities that were sold short is called covering the short, covering the position, or simply covering.A short position can be covered at any time before the securities are due to be returned.Once the position is covered, the short seller is not affected by subsequent rises or falls in the price of the securities, for it already holds the securities that it will return to the lender.
    `)
})


bot.hears('/Categories', (ctx) => {
    ctx.reply(categories)
})

bot.hears('/Short_Selling_Questions', (ctx) => {
    ctx.reply(ShortSellingQuestions)
})

bot.hears('/More_Question', (ctx) => {
    ctx.reply(moreShortSellingQuestions)
})

bot.hears('/First_Question', (ctx) => {
    ctx.reply(`
    From Wikipedia: In finance, being short in an asset means investing in such a way that the investor will profit if the value of the asset falls.This is the opposite of a more conventional "long" position, where the investor will profit if the value of the asset rises.

There are several ways of achieving a short position.The most fundamental method is "physical" selling short or short - selling, which involves borrowing assets(often securities such as shares or bonds) and selling them.The investor will later purchase the same number of the same type of securities to return them to the lender.If the price has fallen in the meantime, the investor will have made a profit equal to the difference.Conversely, if the price has risen then the investor will bear a loss.The short seller must usually pay a fee to borrow the securities(charged at a particular rate over time, similar to an interest payment), and reimburse the lender for any cash returns such as dividends that were due during the period of lease.

To profit from a decrease in the price of a security, a short seller can borrow the security and sell it, expecting that it will be cheaper to repurchase in the future.When the seller decides that the time is right(or when the lender recalls the securities), the seller buys the same number of equivalent securities and returns them to the lender.The act of buying back the securities that were sold short is called covering the short, covering the position, or simply covering.A short position can be covered at any time before the securities are due to be returned.Once the position is covered, the short seller is not affected by subsequent rises or falls in the price of the securities, for it already holds the securities that it will return to the lender.

    `)
})

bot.hears('/Second_Question', (ctx) => {
    ctx.reply(`
Yes, short - selling requires a margin account because to initiate a short position, you must first borrow a stock.Short - selling cannot be done in a cash account.
    `)
})

bot.hears('/Third_Question', (ctx) => {
    ctx.reply(`
First, you locate shares of a stock to borrow.Then, you borrow those shares, and incur a borrow cost per share.Then, you short the stock.Then, if the price falls, you buy back the stock. 
    `)
})

bot.hears('/Fourth_Question', (ctx) => {
    ctx.reply(`
There is a fee to borrow shares of a stock.These fees can vary from broker to broker.The maximum fee that Rob will accept per share is equal to 1 / 5th the total potential profit on the trade.For example, if the potential profit on a trade is $1 per share, Rob will accept a maximum per - share borrow cost of .20. 

If you hold a short position overnight, you will be charged an overnight fee.You can check with your broker to find the overnight fees for a position.The fee will be different for every stock and every trade, so make sure to check with your broker.
`)
})

bot.hears('/Fifth_Question', (ctx) => {
    ctx.reply(`
All trading is risky.The risk in short - selling is that a stock will continue to rise once you have shorted it, and your loss could potentially be “infinite.” In practice, this never happens - an intelligent trader will always close a short position with a proper stop - loss to contain the risk. 

Buying stocks is also risky.More traders buy stocks than short stocks - and most traders lose money.Therefore, plenty of traders who buy stocks lose a significant amount of money.The biggest priority when trading is to manage risk.A trader who manages his or her risk properly will always stop out of losing positions with a minimal loss.
`)
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
    ctx.reply(startMessage)
})

bot.launch()