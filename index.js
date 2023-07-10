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
/Six_Question - Do I have to return shares that I borrow? What happens to the shares that I borrow at the end of the day?
/Seven_Question - Does Rob hold short positions overnight?
/Eight_Question - Who invented short-selling?
/Nine_Question - Why are short sellers called bears?
/Ten_Question - What brokers can be used for shorting?
/Eleve_Question - What is a “short interest”?
What is the utilization rate of a stock?
What happens if a short position moves against you?
What happens if a company pays a dividend while you are short the stock?
What is a “short squeeze”?
What is a REG SHO notice?
Can I buy a stock and go short at the same time?
Can you short a stock with options?
Can you short a recently IPO’d stock?
What is the “Days to Cover” metric?
What is the best time of day to short a stock?
Why does Rob like short selling so much?
What is a system 1 trade?
What is a limit order?
What is a stop order?
What is a market order?
What is the premarket session?
What is the after hours session?
What is the lowest float Rob will accept for shorting stocks?
What is a halt? How do I trade when a stock halts?
Where can I find the top gainers for the day?
How does Rob use volume in his analysis for short trades?
What is the best profit target for a short trade? 
Does Rob hold short positions overnight?
How does Rob use volume for buy trades?
What is Rob’s system for buying stocks?
What stocks are best for the Booker Breakout trade?
Where does the stop-loss go on a Booker Breakout trade?
What are fibonacci retracements?



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
bot.hears('/Eight_Question', (ctx) => {
    ctx.reply(`
There was this dude named Isaac Le Maire, a Dutch fellow, in 1609, who shorted shares in the Dutch East India Company. His attempt to depress the price of the shares failed, and he and his fellow speculators suffered large losses. As a side note, he had 22 children with the same wife.

Jacob Little, known as The Great Bear of Wall Street, started shorting stocks in 1822. Little was born in Newburyport, Massachusetts, and moved to New York City in 1817, first clerking for Jacob Barker; he then opened his own establishment in 1822, and finally his own brokerage in 1834. A market pessimist, Little made his wealth "bearing stocks",[4] at turns short selling various companies and at others cornering markets to extract profits from other short sellers. Through his great financial foresight Little amassed an enormous fortune, becoming one of the richest men in America and one of the leading financiers on Wall Street in the 1830s and 1840s, but his speculative activities irritated his peers and earned him few admirers. Little lost and remade his legendary fortune multiple times before losing it for good in 1857;[note 1] although a great many owed him enormous debts, he was a generous creditor and never collected them, and at his deathbed in 1865 Little was penniless. Although well-known on the stock market in his time, he was quickly forgotten after his death, and today has been relegated to relative obscurity. 

For more information about Jacob Little, go to his Wikipedia page here: https://en.wikipedia.org/wiki/Jacob_Little 

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
bot.command('start', ctx => {
    ctx.reply(startMessage)
})


bot.launch()