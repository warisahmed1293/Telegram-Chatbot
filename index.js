const { Telegraf } = require('telegraf');
require('dotenv').config()


const bot = new Telegraf(process.env.BOT_TOKEN);

const questions = require('./data/questions');

bot.hears('/Question1', (ctx) => {
    ctx.reply(`
    From Wikipedia: In finance, being short in an asset means investing in such a way that the investor will profit if the value of the asset falls.This is the opposite of a more conventional "long" position, where the investor will profit if the value of the asset rises.

There are several ways of achieving a short position.The most fundamental method is "physical" selling short or short - selling, which involves borrowing assets(often securities such as shares or bonds) and selling them.The investor will later purchase the same number of the same type of securities to return them to the lender.If the price has fallen in the meantime, the investor will have made a profit equal to the difference.Conversely, if the price has risen then the investor will bear a loss.The short seller must usually pay a fee to borrow the securities(charged at a particular rate over time, similar to an interest payment), and reimburse the lender for any cash returns such as dividends that were due during the period of lease.

To profit from a decrease in the price of a security, a short seller can borrow the security and sell it, expecting that it will be cheaper to repurchase in the future.When the seller decides that the time is right(or when the lender recalls the securities), the seller buys the same number of equivalent securities and returns them to the lender.The act of buying back the securities that were sold short is called covering the short, covering the position, or simply covering.A short position can be covered at any time before the securities are due to be returned.Once the position is covered, the short seller is not affected by subsequent rises or falls in the price of the securities, for it already holds the securities that it will return to the lender.

    `)
})

bot.hears('/Question2', (ctx) => {
    ctx.reply(`
Yes, short - selling requires a margin account because to initiate a short position, you must first borrow a stock.Short - selling cannot be done in a cash account.
    `)
})

bot.hears('/Question3', (ctx) => {
    ctx.reply(`
First, you locate shares of a stock to borrow.Then, you borrow those shares, and incur a borrow cost per share.Then, you short the stock.Then, if the price falls, you buy back the stock. 
    `)
})

bot.hears('/Question4', (ctx) => {
    ctx.reply(`
There is a fee to borrow shares of a stock.These fees can vary from broker to broker.The maximum fee that Rob will accept per share is equal to 1 / 5th the total potential profit on the trade.For example, if the potential profit on a trade is $1 per share, Rob will accept a maximum per - share borrow cost of .20. 

If you hold a short position overnight, you will be charged an overnight fee.You can check with your broker to find the overnight fees for a position.The fee will be different for every stock and every trade, so make sure to check with your broker.
`)
})

bot.hears('/Question5', (ctx) => {
    ctx.reply(`
All trading is risky.The risk in short - selling is that a stock will continue to rise once you have shorted it, and your loss could potentially be “infinite.” In practice, this never happens - an intelligent trader will always close a short position with a proper stop - loss to contain the risk. 

Buying stocks is also risky.More traders buy stocks than short stocks - and most traders lose money.Therefore, plenty of traders who buy stocks lose a significant amount of money.The biggest priority when trading is to manage risk.A trader who manages his or her risk properly will always stop out of losing positions with a minimal loss.
`)


})

bot.hears('/Question6', (ctx) => {
    ctx.reply(`
    At the end of the trading day (8pm Eastern), the shares you borrowed but did not use are automatically returned to the broker. If you hold a position overnight, you automatically pay to borrow them for another day. Check with your broker to see the fees associated with holding positions overnight.
    `)
})

bot.hears('/Question7', (ctx) => {
    ctx.reply(`
    Rob does not usually hold short positions overnight. If he does, it will most likely be a trade taken in the after-hours session that is already profitable and stands to make more money if held until morning. 
`)
})

bot.hears('/Question8', (ctx) => {
    ctx.reply(`
    There was this dude named Isaac Le Maire, a Dutch fellow, in 1609, who shorted shares in the Dutch East India Company. His attempt to depress the price of the shares failed, and he and his fellow speculators suffered large losses. As a side note, he had 22 children with the same wife.

    Jacob Little, known as The Great Bear of Wall Street, started shorting stocks in 1822. Little was born in Newburyport, Massachusetts, and moved to New York City in 1817, first clerking for Jacob Barker; he then opened his own establishment in 1822, and finally his own brokerage in 1834. A market pessimist, Little made his wealth "bearing stocks",[4] at turns short selling various companies and at others cornering markets to extract profits from other short sellers. Through his great financial foresight Little amassed an enormous fortune, becoming one of the richest men in America and one of the leading financiers on Wall Street in the 1830s and 1840s, but his speculative activities irritated his peers and earned him few admirers. Little lost and remade his legendary fortune multiple times before losing it for good in 1857;[note 1] although a great many owed him enormous debts, he was a generous creditor and never collected them, and at his deathbed in 1865 Little was penniless. Although well-known on the stock market in his time, he was quickly forgotten after his death, and today has been relegated to relative obscurity. 
    
    For more information about Jacob Little, go to his Wikipedia page here: https://en.wikipedia.org/wiki/Jacob_Little 
    `)
})

bot.hears('/Question9', (ctx) => {
    ctx.reply(`
    The term “bear,” referring to short-sellers, comes from an old saying in the 1700s: “Do not sell a bear skin before you have caught the bear.” For some reason the term stuck and the term “bearskin” became synonymous with short-selling. In modern times, “bearskin” was shortened to “bear.”
    `)
})

bot.hears('/Question10', (ctx) => {
    ctx.reply(`
    Trade Zero is a good broker to start short selling. At Trade Zero, you can short stocks trading above $1 per share. You can start a short selling account with $2,500.

    Cobra trading is a good broker for shorting also, but has a minimum account balance of $27,000. At Cobra, you can short stocks trading under $1 or above $1.
    
    Brokers like Robinhood, Think or Swim, Schwab, Fidelity, Etrade, etc are not good brokers for shorting stocks, and in some cases will not allow it at all. Some of those brokers will say that they allow for shorting stocks but then when you try to do it, they will not have shares available for trading, or will outright reject your order. The best brokers to use for shorting stocks at this time are Trade Zero and Cobra trading.
    `)
})

bot.hears('/Question11', (ctx) => {
    ctx.reply(`
    Short interest is the number of shares that have been shorted. It can be expressed by a number of shares, or a percentage of float (the total number of shares available for trading). Keep in mind this data is delayed. For NASDAQ stocks, short interest is reported on the 15th of the month, and then released 8 days later than that. Some data analysis firms exist that claim to produce up-to-the-minute information on short interest; the value of this data in making trading decisions is arguably minimal. 

    Short interest for a particular stock can be found on websites like Yahoo! Finance.
     `)
})

bot.hears('/Question12', (ctx) => {
    ctx.reply(`
    Utilization is the ratio of the number of shares that have been lent out to those that are still available on the securities lending market, given as a percentage. It's essentially a gauge of how much demand short sellers have for shares. A high utilization rate can be seen as a red flag. It indicates that demand for the stock from short sellers is elevated - and this could mean the stock is primed and ready to go up in a short squeeze.`)
})

bot.hears('/Question13', (ctx) => {
    ctx.reply(`
    The simple answer is that your open P&L in your open positions will show a negative number.

A more detailed explanation from Wikipedia: If the short position begins to move against the holder of the short position (i.e., the price of the security begins to rise), money is removed from the holder's cash balance and moved to their margin balance. If short shares continue to rise in price, and the holder does not have sufficient funds in the cash account to cover the position, the holder begins to borrow on margin for this purpose, thereby accruing margin interest charges. These are computed and charged just as for any other margin debit. Therefore, only margin accounts can be used to open a short position.
`)
})

bot.hears('/Question14', (ctx) => {
    ctx.reply(`
    You owe the broker an amount equal to the dividend. In practice, this rarely occurs for us because we do not hold long-term short positions.`)
})

bot.hears('/Question15', (ctx) => {
    ctx.reply(`
    If the price of a stock rises considerably, some short sellers have to buy back the stock (also known as “covering their position”). This buying back to close the trade adds more buying pressure to the stock, which then can continue to rise even further. This can cause more short sellers to be “stopped out” or forced to cover their position, which adds to the buying pressure and the stock can continue to rise farther and farther. This upward movement can become significant, causing a stock to rise hundreds of percents in even a day (also called a “parabolic move.”

    Short squeezes can happen naturally - but often are created on purpose. Buyers of stocks (institutions and hedge funds) may notice that the short interest on a stock is high, and then begin to buy the stock, forcing short sellers to buy back the stock to close (cover) their trade. This adds more buying pressure; the stock can continue to rise.
        `)
})

bot.hears('/Question16', (ctx) => {
    ctx.reply(`
    The “Regulation SHO” (also known as REG SHO) law was put into effect in 2005 to require short sellers to locate shares before they can execute a short position. 

    When you locate shares before shorting a stock, your broker may “grant you the borrow” and let you do the trade, and then the broker will go out and attempt to locate the shares after the fact (within a 3 day window). But if a stock becomes very difficult to borrow, the broker may not be able to locate the shares, and then the broker may send you a notice that you must close your short position within a period of time (generally, 1-3 days) or risk having the position closed for you. This rarely happens but if you short stocks long enough, you will eventually receive a REG SHO notice. 
    
    Although this sounds unfair, it rarely occurs, and it is part of the business of shorting stocks.
    `)
})

bot.hears('/Question17', (ctx) => {
    ctx.reply(`
    If a stock is delisted or suspended (NOT HALTED) while you are short the stock, you will continue to be stuck in that position, and pay borrow fees, while the suspension is in effect. Your broker will be able to help you exit the position (with an associated fee) if this happens. This is a rare occurrence.
    `)
})

bot.hears('/Question18', (ctx) => {
    ctx.reply(`
    This is a strategy called “shorting against the box” and most retail brokers will not allow it; additionally, the IRS will tax this strategy as if you bought the stock and sold it afterwards, so there is very little advantage to doing it. 

    If you are long a stock and wish to hedge your risk, and if the stock is optionable, you can buy a put on that stock. The put can rise in value if the stock falls, thus offsetting your loss. 
    `)
})

bot.hears('/Question19', (ctx) => {
    ctx.reply(`
    A put option is a contract that will generally gain value if the price of a stock falls. So it is theoretically possible to “short a stock with an option,” if options are available. We do not typically employ this strategy (most of the stocks that we short do not have options).
    `)
})

bot.hears('/Question20', (ctx) => {
    ctx.reply(`
    Yes, but it can be difficult to locate shares (or expensive to borrow them) since the stock is brand new to the market.
    `)
})

bot.hears('/Question21', (ctx) => {
    ctx.reply(`
    “Days to cover” refers to the total number of shares shorted divided by the average daily volume of the stock. If the total number of shares short was 100,000 shares, and the daily volume for a stock was 100,000, then the Days to Cover number would be 1. 

    In other words, it refers to the expected number of days required to close out all of the shares that have been shorted in a stock.
    
    Generally, investors and traders believe that a high days to cover number is a bearish indicator for a stock (because a large number of traders are short that stock). However, a high days to cover number also could be a warning of an impending short squeeze - because with so many shares shorted, and so many days that would be needed to close out all those shorted shares, the short sellers could get trapped (squeezed).
     `)
})

bot.hears('/Question22', (ctx) => {
    ctx.reply(`There is no best time of the day to short a stock. However, there are certain times of day when volume is higher in a stock, thus creating more opportunities for short sellers. These times of day are near the market open, and near the market close (or even after the close, during the after hours session).

    The best conditions for shorting a stock are when a company that loses money has a stock that is rising rapidly - thus giving short sellers an opportunity to short the stock before a somewhat inevitable fall.
    `)
})

bot.hears('/Question23', (ctx) => {
    ctx.reply(`The short answer is that Rob loves short selling because there is a huge incentive for terrible, money-losing companies to pump (artificially inflate) the price of their stock so they can issue more shares to raise money (and survive). But the fact of the matter is that a company that loses money will have a very difficult time surviving - and therefore shorting stocks can be a higher-probability strategy.

    Put another way, Rob loves shorting stocks because there are always terrible companies that will attempt to pump up the price of their stocks - it’s simply a numbers game - there are more stocks under $10 that eventually fail than succeed.
    `)
})

bot.hears('/Question24', (ctx) => {
    ctx.reply(`
    A system 1 trade is a short trade (a bet that a stock will fall). It sets up when a stock jumps 30% or more, generally during the premarket session. In order to qualify for an entry, a system 1 trade should also feature the following elements: 

    It should fall below the Volume Weighted Average Price (VWAP for short), and close below that level.
    Ideally, the highest volume candle of the day should be a bearish (red) candle. 
    If there is a monthly pivot above price, ideally the stock will have jumped high enough to touch that monthly pivot. This means that the stock has completed a move to a higher profit target and could be ready to fall.
    For a system 1 trade, the stop-loss goes above the highest high of the day so far (this can include the premarket session high).
    `)
})

bot.hears('/Question25', (ctx) => {
    ctx.reply(`
    A limit order is an instruction to buy or sell only at a price specified by the investor. Limit orders are required in the premarket and after hours sessions.
    `)
})

bot.hears('/Question26', (ctx) => {
    ctx.reply(`
    From Investopedia: A stop order is always executed in the direction that the price is moving. For instance, if the market is moving lower, the stop order is set to sell at a pre-set price below the current market price. Alternatively, if the price is moving higher, the stop order will be to buy once the security reaches a pre-set price above the current market price.

Stop-loss orders should be in place whenever you have an open position to limit your potential losses.

A regular stop-loss order is recommended for any live position. A stop-loss order is just what it means—it stops losses. The stop-loss order will remove you from your position at a pre-set level if the market moves against you. Stop-loss orders are critical when you can't actively keep an eye on the market, and it's recommended to always have a stop-loss order in place for any existing position for protection from sudden market news, data releases, and the like.

For example, let's say you're long (you own it) stock XYZ at $27 and believe that it has the potential to reach $35. However, at price levels below $25, your strategy is invalidated, and you want to get out. You would then place a stop order to sell XYZ at around $25, or slightly lower, to account for a margin of error.

A stop-entry order is used to get into the market in the direction that it's currently moving. For example, let's say you have no position, but you observe that stock XYZ has been moving in a sideways range between $27 and $32, and you believe it will ultimately move higher.


In this case, you could place a stop-entry order above the current range high of $32—say at $32.25 to allow for a margin of error—to get you into the market once the sideways range is broken to the upside. Now that you're long, and if you're a disciplined trader, you'll want to immediately establish a regular stop-loss sell order to limit your losses in case the break higher is a false one.
Continuing from the scenario above, XYZ has broken above the range top at $32, and your stop has been triggered at $32.28—stop orders use the best available market price—making you long in a rising market. The price keeps increasing and hits your first price objective at $35. You may now want to protect your profits in case the market reverses lower. You can accomplish this with a regular stop loss placed at, say, $34. That means you will lock in around $1.72 on the trade ($34.00 – $32.28 = $1.72) if the market turns around. In this case, you used a stop-loss order to protect your profit instead of limiting your loss.

    `)
})

bot.hears('/Question27', (ctx) => {
    ctx.reply(`
    A market order is an instruction to buy or sell a security immediately at the current price.
     `)
})

bot.hears('/Question28', (ctx) => {
    ctx.reply(`
    The premarket session starts at 4:00am Eastern Time, and continues until the market opens at 9:30am Eastern Time. Most brokers allow for trading during this time as long as you use a limit order. Limit orders are required in premarket trading for entries and exits.
     `)
})

bot.hears('/Question29', (ctx) => {
    ctx.reply(`
    The after hours session starts at 4:00pm Eastern Time, and continues until 8:00pm Eastern Time. Most brokers allow for trading during this time as long as you use a limit order. Limit orders are required in after hours trading for entries and exits.
    `)
})

bot.hears('/Question30', (ctx) => {
    ctx.reply(`
    Rob does not have a float requirement when shorting stocks. Some low float stocks (with floats under 1,000,000 shares, even) can provide great opportunities for short-sellers.
    `)
})

bot.hears('/Question31', (ctx) => {
    ctx.reply(`
    From Investopedia: A trading halt is a temporary suspension of trading for a particular security or securities at one exchange or across numerous exchanges. Trading can be halted in anticipation of a news announcement, to correct an order imbalance, as a result of a technical glitch, due to regulatory concerns or because the price of the security or an index has moved rapidly enough to trigger a halt based on exchange rules. 

    A stock can halt up or down. A stock halt can last one minute, ten minutes, or even all day.
    
    If you are in a buy trade when a stock halts UPWARD, this is a good thing. This means that the stock was moving up so far, so fast, that market makers were not able to process all of the orders quickly enough. When the stock reopens for trading, it should move higher.
    
    Here is what to do if a stock halts upward when you are in a buy trade: place your profit target using a limit order at the next profit target level higher. If you are using fib retracement levels for your profit target, this will be the next fib level. If you are using Oracle levels or some other levels—then use the next level and place a limit order to take profit at that level. A more conservative / safer method is to simply place a profit target using a limit order at the same price where the stock halted—this will practically ensure that your order to exit is processed when the stock reopens. 
    
    If you choose to stay in a stock that halts upward—you may find that it continues to halt higher and higher throughout the day. This is a riskier form of trading, to keep your order open. If you do this, continue to monitor the stock closely and move your stop upward as the stock climbs. Lower float stocks, especially stocks with a float lower than 500,000 shares, tend to halt multiple times upward. Remember it is possible for the stock to suddenly halt DOWNWARD, and this can instantly eliminate all of your profit and even put your trade into a loss. 
    
    If a stock halts downward, it means that the stock could continue lower in free-fall. If you are in a buy trade when a stock halts downward, it is a good idea to get out of the trade as quickly as possible using a limit order at the halted price or lower, so that as soon as the stock reopens you have a chance to exit. If you are short a stock that halts downward, this is great. This means the stock could continue lower all day long.
     `)
})

bot.hears('/Question32', (ctx) => {
    ctx.reply(`
    There are several reliable places to find the top gainers of the day. The first place we look is usually the WeBull brokerage list of top gainers. To see this list updated in real time, you need a funded account. You can also see a list of top gainers inside Stocks To Trade, using the “top gainers” scan. Rob built a top gainers scan for trade-ideas.com and shows that scan inside of his live trading webinars.

    The code for Rob’s top gainers scan (which he calls “Sweet Poppers”) in Trade-Ideas.com is here: http://www.trade-ideas.com/Cloud.html?code=5e64185d7b45e3e124841d4cee5dab09 
    
    You will need an active subscription to the trade-ideas.com in order to use that top gainers scan.
    `)
})

bot.hears('/Question33', (ctx) => {
    ctx.reply(`
    Rob uses the 5 minute time frame chart to plan and execute and manage his trades. 
    `)
})

bot.hears('/Question34', (ctx) => {
    ctx.reply(`
    Rob loves to short stocks that show a bearish 5 minute candle that has the highest volume of the day. This means that the stock will print a candle going down (a red candle, otherwise known as a bearish candle), and during the formation of that candle, the stock trades more shares than it has in any other 5 minute time period that day. This is an indication that the bears may be in control and the stock could fall lower. 
    `)
})

bot.hears('/Question35', (ctx) => {
    ctx.reply(`
    The highest probability profit target for a short trade is the daily pivot. The second highest probability profit target is halfway point between the VWAP and the 200 SMA. The biggest profit target, but the lowest probability, is the 200 SMA. 
    `)
})

bot.hears('/Question36', (ctx) => {
    ctx.reply(`
    Rob will only very rarely hold a short position overnight. If he does it will generally be a trade that was opened in the after hours session on a candle that showed “max bearish volume.” A “max bearish volume” candle is a bearish (red) 5 minute chart candle that shows the highest volume of the day. 
     `)
})

bot.hears('/Question37', (ctx) => {
    ctx.reply(`
    Rob loves to buy stocks that show a bullish 5 minute candle that has the highest volume of the day. He also calls these candles “max bull volume” candles. This means that the stock will print a candle going up (a green candle, otherwise known as a bullish candle), and during the formation of that candle, the stock trades more shares than it has in any other 5 minute time period that day. This is an indication that the bulls may be in control and the stock could move higher. 
    `)
})

bot.hears('/Question38', (ctx) => {
    ctx.reply(`
    Rob uses a system that he refers to as the “Booker Breakout.” This happens when a stock moves up through its premarket high, or high of the day, or after hours high. 

    To plan and take a Booker Breakout trade, do the following: 
    
    1. Draw a line across the highest high the stock moved today, whether that is the premarket high (also known as PMH), the regular trading hours high (HOD), or the after hours high (AFH). 
    
    2. When the stock breaks above the high line that you drew, that is a buy trade. It is not necessary to wait for a candle to close, or finish forming.
    
    3. The profit target is the next fibonacci level higher - at which point you can exit the trade, or move your stop loss and try for the next fibonacci level higher. You can search for “how to use fibonacci retracements for profit targets on buy trades” for more information. 
    `)
})

bot.hears('/Question39', (ctx) => {
    ctx.reply(`
    The best stocks for the Booker Breakout trade are low float stocks. Typically this means stocks with a float under 10 million shares, and ideally under 5 million shares. Rob prefers NASDAQ stocks for Booker Breakout trades. Rob does not trade OTC (over the counter stocks) with any system. 
    `)
})

bot.hears('/Question40', (ctx) => {
    ctx.reply(`
    The stop should go below the Volume Weighted Average Price (VWAP) on the 5 minute chart. 
     `)
})

bot.hears('/Question41', (ctx) => {
    ctx.reply(`
    Rob uses fib (fibonacci) levels for profit targets because they have worked extraordinarily well in the past.
     `)
})

bot.hears('/Question42', (ctx) => {
    ctx.reply(`
    The best way to answer this question is with a video. Watch these videos for more info: 

    Lesson 21: Using fibs for profit targets
    https://www.loom.com/share/bc1619bd715448909b07d6b1c62ff094
    
    Lesson 38: More Instruction on Drawing Fib Levels
    https://www.loom.com/share/53923a46f60a439a8d6c312a373ce4f6 
    
     `)
})


bot.hears('/Question43', (ctx) => {
    ctx.reply(`
    From TrendSpider: A Fibonacci retracement is a popular technical analysis strategy based on the Fibonacci sequence used by traders and investors to predict potential levels of support and resistance in financial markets.

From Investopedia: In technical analysis, a Fibonacci retracement is created by taking two extreme points (usually a peak and a trough) on a stock chart and dividing the vertical distance by the key Fibonacci ratios of 23.6%, 38.2%, 50%, 61.8%, and 100%.
Once these levels are identified, horizontal lines are drawn and used to identify possible support and resistance levels.
     `)
})










bot.action('shortSelling', (ctx) => {
    ctx.reply(`From Wikipedia: In finance, being short in an asset means investing in such a way that the investor will profit if the value of the asset falls.This is the opposite of a more conventional "long" position, where the investor will profit if the value of the asset rises.

There are several ways of achieving a short position.The most fundamental method is "physical" selling short or short - selling, which involves borrowing assets(often securities such as shares or bonds) and selling them.The investor will later purchase the same number of the same type of securities to return them to the lender.If the price has fallen in the meantime, the investor will have made a profit equal to the difference.Conversely, if the price has risen then the investor will bear a loss.The short seller must usually pay a fee to borrow the securities(charged at a particular rate over time, similar to an interest payment), and reimburse the lender for any cash returns such as dividends that were due during the period of lease.
    
To profit from a decrease in the price of a security, a short seller can borrow the security and sell it, expecting that it will be cheaper to repurchase in the future.When the seller decides that the time is right(or when the lender recalls the securities), the seller buys the same number of equivalent securities and returns them to the lender.The act of buying back the securities that were sold short is called covering the short, covering the position, or simply covering.A short position can be covered at any time before the securities are due to be returned.Once the position is covered, the short seller is not affected by subsequent rises or falls in the price of the securities, for it already holds the securities that it will return to the lender.
    `)
})

bot.action('shortSellingQuestions', (ctx) => {
    let startMessage = `
    Expand your horizons 🌟 Click for a wider range of course categories!

/Question1 - What is short-selling?
/Question2 - Does short-selling require a margin account?
/Question3 - What is the process of short-selling?
/Question4 - What fees are incurred in short-selling?
/Question5 - Is short-selling dangerous? Is it more risky than buying stocks?
/Question6 - Do I have to return shares that I borrow? What happens to the shares that I borrow at the end of the day?
/Question7 - Does Rob hold short positions overnight?
/Question8 - Who invented short-selling?
/Question9 - Why are short sellers called bears?
/Question10 - What brokers can be used for shorting?
/Question11 - What is a “short interest”?
/Question12 - What is the utilization rate of a stock?
/Question13 - What happens if a short position moves against you?
/Question14 - What happens if a company pays a dividend while you are short the stock?
/Question15 - What is a “short squeeze”?
/Question16 - What is a REG SHO notice?
/Question17 - What happens if trading is suspended, or a stock is delisted, while I am short the stock?
/Question18 - Can I buy a stock and go short at the same time?
/Question19 - Can you short a stock with options?
/Question20 - Can you short a recently IPO’d stock?
/Question21 - What is the “Days to Cover” metric?
    `
    bot.telegram.sendMessage(ctx.chat.id, startMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "More Questions", callback_data: 'moreShortSellingQuestions' }
                    ],
                ]
            }
        })
})


bot.action('moreShortSellingQuestions', (ctx) => {
    let startMessage = `
/Question22 - What is the best time of day to short a stock?
/Question23 - Why does Rob like short selling so much?
/Question24 - What is a system 1 trade?
/Question25 - What is a limit order?
/Question26 - What is a stop order?
/Question27 - What is a market order?
/Question28 - What is the premarket session?
/Question29 - What is the after hours session?
/Question30 - What is the lowest float Rob will accept for shorting stocks?
/Question31 - What is a halt? How do I trade when a stock halts?
/Question32 - Where can I find the top gainers for the day?
/Question33 - What kind of charts does Rob use for finding stocks to short or buy?
/Question34 - How does Rob use volume in his analysis for short trades?
/Question35 - What is the best profit target for a short trade? 
/Question36 - Does Rob hold short positions overnight?
/Question37 - How does Rob use volume for buy trades?
/Question38 - What is Rob’s system for buying stocks?
/Question39 - What stocks are best for the Booker Breakout trade?
/Question40 - Where does the stop-loss go on a Booker Breakout trade?
/Question41 - Why does Rob use Fibonacci retracements/extensions for profit targets?
/Question42 - How does Rob use Fibonacci levels / retracements / extensions for profit targets? 
/Question43 - What are fibonacci retracements?
    `
    ctx.reply(startMessage)
})

bot.hears('/More_Question', (ctx) => {
    ctx.reply(questions.moreShortSellingQuestions)
})



bot.action('categories', ctx => {
    let startMessage = `
    Expand your horizons 🌟 Click for a wider range of course categories!
    `
    bot.telegram.sendMessage(ctx.chat.id, startMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Short Selling Questions", callback_data: 'shortSellingQuestions' }
                    ],
                    [
                        { text: 'PIVOT Questions', callback_data: 'PivotQuestions' }
                    ],
                    [
                        { text: 'General Questions', callback_data: 'GeneralQuestions' }
                    ]
                ]
            }
        })
})

bot.hears('Start', ctx => {
    let startMessage = `
    Welcome ${ctx.from.first_name} ${ctx.from.last_name} to the Rob Booker ChatBot World 🌍🤖
    `
    bot.telegram.sendMessage(ctx.chat.id, startMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "What is short selling?", callback_data: 'shortSelling' }
                    ],
                    [
                        { text: 'Categories', callback_data: 'categories' }
                    ]
                ]
            }
        })
})

bot.hears('start', ctx => {
    let startMessage = `
    Welcome ${ctx.from.first_name} ${ctx.from.last_name} to the Rob Booker ChatBot World 🌍🤖
    `
    bot.telegram.sendMessage(ctx.chat.id, startMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "What is short selling?", callback_data: 'shortSelling' }
                    ],
                    [
                        { text: 'Categories', callback_data: 'categories' }
                    ]
                ]
            }
        })
})

bot.command('start', ctx => {
    let startMessage = `
    Welcome ${ctx.from.first_name} ${ctx.from.last_name} to the Rob Booker ChatBot World 🌍🤖
    `
    bot.telegram.sendMessage(ctx.chat.id, startMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "What is short selling?", callback_data: 'shortSelling' }
                    ],
                    [
                        { text: 'Categories', callback_data: 'categories' }
                    ]
                ]
            }
        })
})

bot.help((ctx) => {
    let startMessage = `
    Welcome ${ctx.from.first_name} ${ctx.from.last_name} to the Rob Booker ChatBot World 🌍🤖
    `
    bot.telegram.sendMessage(ctx.chat.id, startMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "What is short selling?", callback_data: 'shortSelling' }
                    ],
                    [
                        { text: 'Categories', callback_data: 'categories' }
                    ]
                ]
            }
        })
})


bot.launch()