## How To Accept Bitcoin Payments (For Small Business Owners)

Welcome to Bitcoin!

Accepting Bitcoin payments in your business has lots of
advantages. You'll:
- attract new customers,
- give yourself the option to accumulate your own Bitcoin investment with zero effort,
- show the world that you're ahead of the curve, and,
- free yourself (at least a little bit) from blood-sucking credit card processors.

(Oh, and with Bitcoin, you never have to worry about chargebacks!)

Unfortunately, with all this freedom and power comes at least a little bit of
responsibility. And the Bitcoin ecosystem can be pretty confusing. Let's try to
fix that.

### The Bitcoin Payments Workflow (And How It Ends With Money In Your Pocket)

Accepting Bitcoin payments generally looks something like this:

1. The client or customer decides they want to give you some Bitcoin, usually
   in exchange for a product or service
1. The client is presented with a point-of-sale terminal (at a restaurant),
   cash register (in a shop), or payments page (e-commerce)
1. The payments processing back-end generates either:
    - a Lightning invoice (encoded as a string of gibberish that starts with
      `lnbtc`
    - a Bitcoin payments address (another string of gibberish which, usually
      but not always, starts with `bc1`)
1. The client uses their wallet app to pay the invoice or send a transaction to
   the address
1. The payments processing back-end informs you that the Bitcoin have been
   credited to you, so that you, your staff, or your e-commerce shop can finish
   the interaction with the client
1. The payments processing back-end (optionally) converts the Bitcoin to local
   fiat currency (THB, EUR, USD, etc) so (unless you want to be) you are not
   exposed to the risk of losing money if the Bitcoin price goes down.
   (however, if you do this, you also don't earn a return on investment if the
   Bitcoin price goes up)

As you might guess, most of the complexity lies in the payment processing
back-end. And as with everything these days, you have quite a few options for
how to set this up.

### The "One True Way"

Let's get one thing out of the way first. Whenever you talk to "serious"
Bitcoin people about accepting payments, they will sooner or later suggest
[BTCPayServer](https://btcpayserver.org/) as the solution. And they're mostly
right: if you have the technical chops to get it going, it's usually the best
approach in the long run.

However, that doesn't mean it's the best approach for your particular
situation, or the best approach for you *right now*. Let's look at how
everything fits together first, and what the alternatives are, then you can
make an informed decision.

### The 4 Basic Choices You Have

Bitcoin payments back-ends vary from the incredibly simple to the tremendously
complicated. But they mostly fall into four general categories, starting with
the most rudimentary and ending with the most sophisticated:

1. Deposit addresses at exchanges (please don't do this!)
1. Smartphone and desktop apps
1. Commercial payment processors
1. Self-hosted full-node-based solutions

The fact is, accepting Bitcoin payments is fundamentally easy. For most of
Bitcoin's existence, people often just posted a "Bitcoin address" on their
website and used it like a bank account. While this approach has numerous and
very significant disadvantages (among other things, it means everyone can see
how much money you are taking in) it nevertheless still works.

The slightly more sophisticated variation on this idea is to sign up for an
account at a major cryptocurrency exchange (like
[Binance](https://www.binance.com/en) or
[Bitstamp](https://www.bitstamp.com/)), go to the account page, and generate a
"deposit address". Some exchanges (such as Bitstamp) will even auto-convert
incoming payments to fiat currency, if you tell them to.

Unfortunately, while this approach is very quick and easy to set up, it
comes with major drawbacks:
* The whole world can see your incoming payments
* You have to manually check the address (probably using a blockchain explorer
  website like [Blockstream.info](https://blockstream.info/) or
  [Mempool.space](https://mempool.space/)) to see if a payment comes in
* The address is permanently associated with "you", so anyone looking at your
  clients' transactions will see they did business with you, how often, and how
  much money they spent

Even if this very rudimentary approach does the trick for the moment, sooner or
later you *will* outgrow it and need something more sophisticated. Therefore,
let's look at the "real" options.

#### Apps To Accept Bitcoin: Probably The Simplest Way That Works

Installing an app on your phone is easy. If you're running a retail business
where customers walk in the door and personally deal with you and your staff,
it may be all you need.

Here's a list of apps shamelessly copied from [nol1mit's
page](https://nolim1t.gitlab.io/bitcoin-merchant-starter-kit/):

* [Muun Wallet](https://muun.com/) - For accepting both bitcoin and bitcoin
  lightning payments. Since it doesn't require you to manage channels, it's
  very easy.
* [Phoenix Wallet](https://phoenix.acinq.co/) - For accepting lightning
  payments as well as bitcoin onchain. However this is Android only with a beta
  for iOS. Its promising, however you need to send an onchain payment first to
  open the initial lightning channels.
* [Breez Wallet](https://breez.technology/) - For accepting **Bitcoin
  Lightning** payments. You can set up prices for your items in the app too.
  Available on Android and iOS.
* [Coinnomi Wallet](https://www.coinomi.com/en/) - For accepting **on chain**
  payments. Available on Android and iOS.

##### What The Heck Is A "Lightning Channel"?

Now wait a minute. We mentioned "lightning channels" a couple of times. If
you're going to accept Lightning (instantaneous) Bitcoin payments, you should
probably understand what they are and why "managing" them is so important.

In a nutshell, a "Lightning channel" is an agreement between you and some 3rd
party (who you either have to trust a little bit, or don't have to trust at
all, depending on how you set things up). The agreement allows you to receive
(or send) payments through them to other members of the Lightning Network to
whom that 3rd party is connected.

If all you're going to do is *send* money, setting up one of these agreements
is easy: you "lock" (escrow) your money up to pre-fund the channel, and once
you've sent all the money to various people, your Lightning channel
counterparty gets to keep all the money (with your agreement, of course). It's
a pretty good deal for the other side!

(And yes, you can "close" the channel any time you want, with the balance being
divided up appropriately between both of you. They can also close it, if they
want.)

However, if you are mostly *receiving* money, then it is your counterparty who
has to commit their money to the channel. This ties up their capital for some
period of time, and it makes things a little complex.

(Why would they commit their capital to help you receive money? Either because
they are earning fees on your transactions -- generally *much smaller fees*
than what you would pay for credit card processors -- or because you are
outright paying them to do it.)

Therefore, if you're just starting out and want to accept Lightning payments,
choosing a wallet that will manage these issues for you (generally at slightly
higher cost) is a good idea.

#### Commercial Payment Processors: How Most eCommerce Shops Do It

So far we've talked about local apps that you can run on your mobile device.
That, as convenient as it may be, simply isn't an option for e-commerce
businesses, where the payments have to be processed automatically.

Fortunately, there are plenty of Bitcoin payment processors who are happy to
provide the same service that a credit-card payment processor would, except in
this case, they are handling Bitcoin payments.

Here are a few examples:

* [Coingate](https://coingate.com/): allows you to accept both Lightning and
  on-chain payments seamlessly. Has integrations for Magento, Woocommerce,
  Opencart, WHMCS, oscommerce, Zencart, ... and lots more.
* [Coinify](https://www.coinify.com/): has integrations, but they are a large
  company and you have to sign up for an account to see which plugins are
  currently available.
* [CoinPayments](https://www.coinpayments.net/): makes it easy to accept
  hundreds (or thousands!) of different cryptocurrencies. Integrates with
  Magento, Shopify, Woocommerce, Opencart, and more

One payment processor we specifically recommend *against* is BitPay.
Unfortunately, they've set up so many restrictions and barriers to actually
completing the order that using them may lead to losing sales, when customers
throw up their hands in frustration!

(A few examples: customers have to register for a separate account with them,
then customers have to upload their government ID to BitPay, and then customers
can only send from very specific Bitcoin wallets to BitPay in order to complete
the transaction. It's sheer madness.)


#### All The Freedom, None Of The Middlemen: Self-Hosted Solutions Are Easier Than You'd Think

Now that we've got all the 3rd party options, let's cover the "gold standard"
of accepting Bitcoin payments: solutions where you control *everything*, and
nobody can stop you from getting paid.

##### Wait, Nobody Can Ever Stop Me Getting Paid? You Really Mean That?

Absolutely. A self-hosted, self-custody Bitcoin payment back-end means you are
pretty much ban- and cancel-proof. You're no longer at the mercy of companies
who might decide to drop you for any number of reasons and thereby cut off your
financial air supply. Now, anyone who wants to mess with you has to put in a
whole lot more effort -- and if they do, you've got bigger problems to worry
about.

(Note: you may still have to turn your incoming Bitcoin into local fiat
currency, like EUR or THB. Any company you rely on to do that can still
terminate the relationship. However, there are many alternative options, so
it's not such a big deal. For example, a peer-to-peer exchange like
[Bisq](https://bisq.network/) or [HodlHodl](https://hodlhodl.com/) is nearly impossible to get booted from.)

But that's *definitely* not the only reason to use a self-hosted solution!

Self-hosted payment processing means:
- you don't have to pay fees to a payment processing company (and the fees add
  up!)
- your business remains your business: no 3rd-party company can see who your
  customers are or what people are buying from you
- you can customise your setup to your needs, and,
- your system will stay how *you* want it to be so, you'll never have changes
  forced down your throat by a 3rd-party corporate entity which is looking to
  cut costs and enhance shareholder value at your expense.

Now let's look at how you can turn all this into reality.

##### Self-Hosted Options

For all of these, you need access to at least some technical expertise. Either
you're a geek yourself, or you know a geek who's willing to help on an ongoing
basis.

* [Umbrel](https://getumbrel.com):
  [nolim1t's](https://nolim1t.gitlab.io/bitcoin-merchant-starter-kit/)
  favorite. His words: "This requires a little bit of technical chops, but it
  offers the best first class experience for bitcoin and lightning users. Not
  to mention access to this is available on any web browser."
* [BTCPayServer](https://btcpayserver.org/): Far and away the most widely used.
  BTCPayServer can be used both for retail and ecommerce payment processing. It
  accepts Lightning payments, and has all kinds of other tricks up its sleeve.
  However, it is somewhat more complex to set up than Umbrel. If you don't have
  a server on your premises, [options are
  available](https://medium.com/@BtcpayServer/hosting-btcpay-server-for-cheap-2b27761fdb9d)
  assuming you or your tech people have some understanding of server
  administration.
* [MyNodeBTC](https://mynodebtc.com/)
* [RaspiBlitz](https://github.com/rootzoll/raspiblitz): "The oldest and most battle-tested." --nolim1t

### The Boring Part: Tax Reporting

- tax issues and reporting, automated tools for exporting relevant data in an accountant-friendly format

### Further Reading

- Check out [nol1mit's page](https://nolim1t.gitlab.io/bitcoin-merchant-starter-kit/), on which a good deal of this writeup is based
