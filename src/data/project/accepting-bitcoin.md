## How To Accept Bitcoin Payments (For Small Business Owners)

Welcome to Bitcoin! Accepting Bitcoin payments in your business has lots of
advantages: you'll attract new customers, give yourself the option to
accumulate your own Bitcoin investment with zero effort, show the world that
you're ahead of the curve, and free yourself (at least a little bit) from
blood-sucking credit card processors. (Oh, and with Bitcoin, you never have to
worry about chargebacks!)

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
ho wmuch money you are taking in) it nevertheless still works.

The slightly more sophisticated variation on this idea is to sign up for an
account at a major cryptocurrency address, go to the account page, and generate
a "deposit address". Some exchanges will even auto-convert incoming payments to
fiat currency, if you tell them to.

Unfortunately, while this approach is very quick and easy to set up, it
potentially comes with major problems. Sooner or later you *will* outgrow it
and need something more sophisticated. Therefore, let's look at the "real"
options.

#### Apps To Accept Bitcoin: Probably The Simplest Way That Works

- recommended apps (breez, samourai, whatever wallet)

#### Commercial Payment Processors: How Most eCommerce Shops Do It

- recommended payment processors and the trade-offs involved (btcpayserver vs coingate/etc)

#### All The Freedom, None Of The Middlemen: Self-Hosted Solutions Are Easier Than You'd Think

- local node solutions and what they offer and how well they actually work

### The Boring Part: Tax Reporting

- tax issues and reporting, automated tools for exporting relevant data in an accountant-friendly format

