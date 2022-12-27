---
title: "How to keep your coins safe: solutions for crypto custody problems"
date: "2022-01-16"
cover_image: "../static/cardboard-box.jpg"
---

<!--TOC-->

- [General tips for any custody project](#general-tips-for-any-custody-project)
- [Multi-signature tools](#multi-signature-tools)
  - [Free/open-source solutions for self-custody](#freeopen-source-solutions-for-self-custody)
  - [Commercial self-custody devices and products](#commercial-self-custody-devices-and-products)
  - [Commercial services using multisig to provide some combination of self- and external-custody](#commercial-services-using-multisig-to-provide-some-combination-of-self--and-external-custody)
- [Full-service external-custody (fiduciary) service providers](#full-service-external-custody-fiduciary-service-providers)
- [Knowledge and theory](#knowledge-and-theory)

<!--TOC-->
<!-- Generate TOC with `md_toc -p github custody.md` -->

Crypto custody is an important issue. Crypto traders and hodlers are
increasingly targeted by organised crime and other evildoers. These attacks may
involve threats of violence, or worse. This means secure custody of your coins
is not just about protecting what you own, but also about protecting yourself
and those around you.

There are a lot of different wallet guides out there. Unfortunately, they
usually don't talk about ensuring that you can't be forced to give up your
coins, if someone tries to use brute force or other unpleasantness.

Therefore, this document describes different tools you can use protect your
crypto holdings against robbery and coercion. It is not a detailed how-to: the
detailed design of a secure access protocol will (probably) be unique to your
situation.

This page is a work in progress, and it is constantly being updated. For
comments or additions, join our
[Matrix](https://matrix.to/#/#bitcoins-in-chiangmai:matrix.org) or
[Telegram](https://t.me/btccmai) groups and let us know your thoughts. You can
also submit a pull request to our [Github
repo](https://github.com/lncm/lncm.github.io/blob/source/src/data/project/custody.md).



## General tips for any custody project

* **NEVER TRUST A SYSTEM WHICH YOU DON'T UNDERSTAND!** If it's too complicated
  for you to understand it, it will stab you in the back when you need it most.
* This also means that you should **never trust a significant quantity of funds
  to a custody system which you've never used before!** As a rule of thumb: if
  you haven't had at least one "oh shit, did I just fuck up and lose money?"
  moment while playing around with a system, you don't understand it well
  enough to trust it with your funds. Start with "custodying" a few Satoshis,
  then stress-test the system in every conceivable way before you add real
  money.
* **Keep it as simple as possible, and no simpler.** Every additional
  complication--every additional password, every new clever trick you have to
  know to get the private key, etc--increases the risk that you will not be
  able to recover your funds...  **EXPONENTIALLY!**. That means a tiny increase
  in complexity can produce a huge additional risk.
* Listen to Baroque music while you work. You'll make fewer mistakes.
* **Take your time** designing your approach, and **experiment with lots of
  different things** before you decide to do it one way.
* Practice helps. Custody systems often require you do to things in a certain
  order and exactly right. Doing a run-through once or twice before you set up
  the "real deal" can be very helpful.


## Multi-signature tools

Most custody systems will involve some form of multi-signature security, where
2 of 3 private keys (or 3 of 5, etc) must be present to make a transaction. For
more, see [here](https://coinguides.org/multisig-multi-signature-wallet/) and
[here](https://en.bitcoin.it/wiki/Multi-signature).

### Free/open-source solutions for self-custody

* [Electrum](https://electrum.org) multisig wallets: Electrum supports N of M
  multisig by default.
* Bitcoin native multisig: Bitcoin natively supports multisig addresses.
* "Poor man's multisig" where you divide up a seed phrase into 3 parts and
  store copies such that you need key material from 2 of 3 storage sites to
  reconstruct the seed phrase. This allows you to produce "multisig"
  functionality for nearly any crypto storage device or paradigm.
* [Specter DIY](https://github.com/cryptoadvance/specter-diy) hardware wallet.
  Their YouTube channel [documents how to use 
  Specter DIY](https://www.youtube.com/watch?v=xjBzAAiVKk8) as part of a 2-of-3
  multisig setup.
* [Seedsigner](https://seedsigner.com/) Raspberry Pi-based air-gapped multisig
  wallet hardware device
* [Sparrow Wallet](https://www.sparrowwallet.com/features/) is a Bitcoin
  desktop wallet targeted at advanced users, which supports multisig, has an
  integrated Samourai Whirlpool coinjoin client, and has extensive PSBT support

### Commercial self-custody devices and products

* [Trezor](https://trezor.io/) Model T hardware wallet [supports Shamir secret sharing](https://trezor.io/shamir/)
* [Ledger](https://www.ledger.com/) technically supports multisig with some of
  their products but [recommends against using
  multisig](https://blog.ledger.com/why-multisig-wont-let-you-scale-your-digital-asset-business/)
  and has [historically not done well with multisig
  transactions](https://twitter.com/mflaxman/status/1154538947340468224) and
  have previously had their [entire customer database
  hacked](https://decrypt.co/52118/hacked-ledger-database-dumped-on-raidforums)
  making the names and addresses of their customers available to internet
  criminals with some
  [consequences](https://www.bitdefender.com/blog/hotforsecurity/fake-ledger-devices-mailed-out-in-attempt-to-steal-from-cryptocurrency-fans/).

### Commercial services using multisig to provide some combination of self- and external-custody

Self-custody usually means that you are entirely responsible for your keys.
External-custody means someone else (a company with extensive security
precautions) holds your keys for you, and signs transactions when certain
conditions are met. Most of these services fall somewhere in
the middle.

For example, you might have a 2-of-3 multisig setup where you hold one key on
your device, another key far away in a secure but inaccessible location, and
the 3rd key is held by a commercial service on your behalf (where the service
provides additional security features).

* [Casa](https://keys.casa/): Commercial service that helps you set up secure
  multi-sig self-custody
* [Bitgo](https://www.bitgo.com/): offers both self- and full-service custody,
  US based, has been around for a long time. 
* [Qredo](https://www.qredo.com/): decentralised custody (?). If you can
  concisely summarise what they do, please let us know...
* [Fireblocks](https://www.fireblocks.com/): institutionally-focused custody
  platform with an API, suited to DeFi and token traders as well
* [Unchained Capital](https://unchained.com/): Commercial service that helps
  you set up secure self-custody

## Full-service external-custody (fiduciary) service providers

Primarily targeted at large investors. Usually insured against loss.

* [Knox](https://www.knoxcustody.com/): Canadian Bitcoin custodian
* [Bitgo](https://www.bitgo.com/): offers both self- and full-service custody,
  US based, has been around for a long time. 
* Coinbase Custody: US-regulated institutional custody service for hedge funds
  and large investors

## Knowledge and theory

* [Arman's
  post](https://armantheparman.com/how-to-store-your-bitcoin-detailed-instructions-part-2-multi-signature/)
  on setting up Electrum multisig wallets
* [Vitalik's social
  recovery](https://vitalik.ca/general/2021/01/11/recovery.html) blog post
  focused on the Ethereum-only wallets [Argent](https://www.argent.xyz/) and
  [Loopring](https://loopring.io/) as well as [Udi Wertheimer's
  reply](https://twitter.com/udiWertheimer/status/1348532541326839808)
* [Unchained Capital webinar](https://www.youtube.com/watch?v=yGgO5RCH0a4) on
  operational security best practices
* [@jimbocoin thread](https://twitter.com/jimbocoin/status/1353687203285790720)
  on using timelocks and multisig against violent theft of Bitcoin as well as
  [@buckperley's
  comments](https://twitter.com/BuckPerley/status/1483163898622664713) on using
  Taproot and timelocks for inheritance. See also the [Bitcoin wiki Timelock
  page](https://en.bitcoin.it/wiki/Timelock) and the [Coinb.in Timelock
  Guide](https://blog.coinb.in/guide_timelock) or [Bitcointalk timelock
  transaction
  thread](https://bitcointalk.org/index.php?topic=2415595.msg24712087#msg24712087) or the [@jaredctate timelock thread](https://twitter.com/jaredctate/status/1216396660437389315)
* the [Swan Bitcoin wallets
  page](https://www.swanbitcoin.com/bitcoin-wallets-not-your-keys-not-your-bitcoin/)
* [Jameson Lopp's wallets
  page](https://www.lopp.net/bitcoin-information/recommended-wallets.html)
* the [WalletsRecovery page](https://walletsrecovery.org/) explaining how
  different Bitcoin wallets handle recovery. (primarily useful when recovering
  from seed or etc)
* Bitbox articles on [The pitfalls of multisig when using hardware
  wallets](https://medium.com/shiftcrypto/the-pitfalls-of-multisig-when-using-hardware-wallets-9b0e98e4c19c)
  which explains some of the things whic hcan go wrong
* the DIY [Dead Man's Switch](https://www.deadmansswitch.net/) website
