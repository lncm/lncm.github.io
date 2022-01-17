---
title: "How to keep your coins safe: solutions for crypto custody problems"
date: "2022-01-16"
cover_image: "../static/cardboard-box.jpg"
---

<!--TOC-->

- [Multi-signature tools](#multi-signature-tools)
  - [Free / Open-source](#free--open-source)
  - [Commercial](#commercial)

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

This page is a work in progress. For comments or additions, join our
[Matrix](https://matrix.to/#/#bitcoins-in-chiangmai:matrix.org) or
[Telegram](https://t.me/btccmai) groups and let us know your thoughts.

## Multi-signature tools

Most custody systems will involve some form of multi-signature security, where
2 of 3 private keys (or 3 of 5, etc) must be present to make a transaction.

### Free / Open-source

* Electrum multisig wallets: Electrum supports N of M multisig by default.
* Bitcoin native multisig: Bitcoin natively supports multisig addresses.
* "Poor man's multisig" where you divide up a seed phrase into 3 parts and
  store copies such that you need key material from 2 of 3 storage sites to
  reconstruct the seed phrase. This allows you to produce "multisig"
  functionality for nearly any crypto storage device or paradigm.
* Specter DIY hardware wallet
* [Seedsigner](https://seedsigner.com/) Raspberry Pi-based air-gapped multisig
  wallet hardware device

### Commercial

* Casa
* Bitgo
* Qredo
* Fireblocks
* Trezor Model T supports Shamir secret splitting
