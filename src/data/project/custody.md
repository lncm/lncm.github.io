---
title: "How to keep your coins safe: solutions for crypto custody problems"
date: "2022-01-16"
cover_image: "../static/cardboard-box.jpg"
---

<!--TOC-->

- [Multi-signature tools](#multi-signature-tools)
  - [Free/open-source solutions for self-custody](#freeopen-source-solutions-for-self-custody)
  - [Commercial self-custody devices and products](#commercial-self-custody-devices-and-products)
  - [Commercial services using multisig to provide a combination of self- and external-custody](#commercial-services-using-multisig-to-provide-a-combination-of-self--and-external-custody)
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
[Telegram](https://t.me/btccmai) groups and let us know your thoughts.

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

### Commercial self-custody devices and products

* [Trezor](https://trezor.io/) Model T hardware wallet [supports Shamir secret sharing](https://trezor.io/shamir/)

### Commercial services using multisig to provide a combination of self- and external-custody

* [Casa](https://keys.casa/)
* [Bitgo](https://www.bitgo.com/): offers both self- and full-service custody,
  US based, has been around for a long time. 
* [Qredo](https://www.qredo.com/): decentralised custody (?). If you can
  concisely summarise what they do, please let us know...
* [Fireblocks](https://www.fireblocks.com/): institutionally-focused custody
  platform with an API, suited to DeFi and token traders as well

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
