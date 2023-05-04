---
title: "Storing seed phrases in metal: everything you ever wanted to know, and more!"
date: "2023-01-16"
cover_image: "../static/cardboard-box.jpg"
---

<!--TOC-->

- [Commercial or DIY?](#commercial-or-diy)
- [Stamping or punching is good, movable pieces of metal are bad](#stamping-or-punching-is-good-movable-pieces-of-metal-are-bad)
- [Which metal to use](#which-metal-to-use)
- [Where to get stainless steel cards](#where-to-get-stainless-steel-cards)
  - [Where to get stainless steel in Chiang Mai](#where-to-get-stainless-steel-in-chiang-mai)
- [Size the card according to how big your letters are](#size-the-card-according-to-how-big-your-letters-are)
- [Use a bench block as a work surface](#use-a-bench-block-as-a-work-surface)
- [Keep it simple, and be as explicit as possible](#keep-it-simple-and-be-as-explicit-as-possible)
- [Stamping vs punching](#stamping-vs-punching)
  - [Punching: Numerical or binary seed phrase storage](#punching-numerical-or-binary-seed-phrase-storage)
  - [Punching: Positional alphanumeric coding](#punching-positional-alphanumeric-coding)
- [Choice of hammer](#choice-of-hammer)
- [Which metal stamps to use](#which-metal-stamps-to-use)
  - [Stamp holding tools](#stamp-holding-tools)
  - [Extra-hard nickel plated stamps for stainless steel](#extra-hard-nickel-plated-stamps-for-stainless-steel)
  - [Type sets, presses, and stamping machines](#type-sets-presses-and-stamping-machines)
- [Draw a base- or under-line before you stamp](#draw-a-base--or-under-line-before-you-stamp)
- [Hold the stamps exactly perpendicular -- do a practice run first](#hold-the-stamps-exactly-perpendicular----do-a-practice-run-first)
- [Consider tamper-proofing or covering your card](#consider-tamper-proofing-or-covering-your-card)
- [Summing it up: what to buy](#summing-it-up-what-to-buy)

<!--TOC-->
<!-- Generate TOC with `md_toc -p github seed-stamping.md` -->


There are a lot of different ways to store seed phrases in fire- and
water-proof ways, mostly involving one or more of:

- using letter stamps to impress the seed phrase in metal
- using an automatic center punch to punch divots into a piece of metal in
  specific positions
- using movable pieces of metal that slide into a card or onto a rod to store
  letters or words in a given order

So, you have options. Let's take a look at them, and their various benefits and
pitfalls.

Before we get started: most of what we will talk about is OPTIONAL. But since
we're nerds and love geeking out over technical details, it's worth addressing
the finer points too.

FYI: This page is a work in progress, and it is constantly being updated. For
comments or additions, join our
[Matrix](https://matrix.to/#/#bitcoins-in-chiangmai:matrix.org) or
[Telegram](https://t.me/btccmai) groups and let us know your thoughts. You can
also submit a pull request to our [Github
repo](https://github.com/lncm/lncm.github.io/blob/source/src/data/project/seed-stamping.md).

## Commercial or DIY?

**You can buy a hammer, a piece of 3mm thick 304 or 316L stainless steel, and a
set of number/letter stamps just about anywhere in the world at any hardware
shop. With cash.**

**That's all you really need!**

If you buy a commercial seed storage solution, there will be a record somewhere
that you made the purchase. Someone who has their eyes on your stash will
therefore know to keep searching (or keep torturing you!) until they find the
"Super SeedStorage TitanCard Mark 4" that you bought online.

(Maybe the Super SeedStorage Company's customer database got hacked, and that's
how they found your address in the first place.)

*On the other hand*, even if you *simply must* order stuff online... say you buy
some stamping tools from one web shop and some metal from another web shop.
Who's to say you'll be using them for seed storage, instead of something else?

Or, for that matter, who's to say how many seed storage cards you ended up
making?

## Stamping or punching is good, movable pieces of metal are bad

Stamping or punching distorts the crystalline structure of the metal plate.
This means that **even if the metal surface is ground away you will be able
to recover the seed phrase** using acid etching. It sounds exotic, but it's a
well documented procedure. Police forces around the world use use this process
to recover serial numbers that have been filed off handguns. 

From your point of view, it means that by distorting the steel during the seed
storage process, you are all but guaranteeing you will be able to get your seed
phrase back. Even if the seed storage plate goes through hell and back... *as
long as the underlying metal is still in one piece, you ought to be able to
recover the seed.*

You probably won't have to resort to exotic acid-etching forensics techniques
though. A few-millimeters-thick piece of stainless steel or titanium is one of
the toughest objects around!

On the other hand, using movable pieces of metal to store your seed always
carries the risk that the ordering of those pieces will be lost somehow.
Different movable-piece storage solutions try to deal with this problem in
different ways, none are perfect.

To make matters worse, this is a catastrophic failure mode. Once the ordering
of the words or letters is gone, your seed is gone forever!

We don't like catastrophic failure modes, even if they're rare or the
manufacturer thinks they can prevent them from happening with some device or
scheme. If it can go wrong, it probably will!

Therefore we recommend keeping it all as simple as possible. **Stamp or punch
your seed phrase into one solid piece of metal, ideally stainless steel or
titanium.**

## Which metal to use

- Any standard grades of **stainless steel is probably best**
    - AISI 304 / EN 1.4301 / V2A is the most common, it's available almost
      everywhere, and works great.
    - AISI 316L / EN 1.4404 / V4A is more resistant to sea water and corrosion,
      it's used in the food industry and for marine applications. It's the
      second most common kind of stainless steel. It also works great for
      stamping.
    - Try to **avoid more exotic tool or surgical grades of stainless steel**,
      like AISI 440C / EN 1.4125. These are less resistant to corrosion and too
      hard to take a good impression from the stamping tool. Stick to the
      common, easy-to-get varieties
    - **2-3mm (about 1/16 to 1/8 inch) seems to be the ideal thickness** for
      stamping into stainless steel
        - It's thick enough that it won't distort when you pound on it with a
          hammer, and you can stamp both sides.
        - It's thin enough to be manageable and not too heavy.
        - Thinner or thicker is probably fine too. Stamping into thin sheet may
          make it easier to store in a folder with papers, while stamping into
          a fat and heavy octagonal bar makes it nearly indestructible.
- **Titanium** is cool, but... titanium is too hard for stamping with letters and
  numbers. For titanium you more or less need to use a center punch and a
  pre-etched plate that describes the coding scheme. (More on coding schemes
  below.) Many different commercial titanium seed storage products are
  available.
- **Avoid aluminum, brass, or copper**. They melt at a much lower temperature
  than steel or titanium, and won't survive a house fire! But, they are pretty
  waterproof/corrosion resistant, so it's still better than paper.
- **Iron or regular steel will rust** away, so they're even worse. If steel is all
  you have available, coat it in Vaseline (to protect against rust). Take the
  same precautions that militaries (and gun nuts) use for gun parts storage
  and/or burial. Lots can go wrong here and it's well worth doing some
  research.

## Where to get stainless steel cards

There are a lot of options, and you can get very creative here.

For example: stainless steel is widely used for commercial kitchens. You may be
able to find a stainless steel fabricator in the light industrial area of
whichever city you're in, the kind of fabricator who caters to restaurants and
food vendors.

These fabricators have different thicknesses of stainless steel sheet on hand
and may be able to cut you a convenient-sized card with little cost or hassle.
They usually take cash!

Workshops and parts stores relating to boats (recreational or commercial) are
also likely to have marine-grade stainless steel available in various forms.
Worst case scenario, you can always stamp your seed on a boat anchor... then it
definitely won't fly away.

Looking online, stainless steel cards in various shapes and sizes are available
on eBay and Amazon, as well as specialist suppliers. The key thing is that the
line on the invoice says "stainless steel part" and not "specialised Bitcoin
storage device, perfect for people who are attractive targets for robbery or
kidnapping."

Alternately, you can have an online fabrication shop cut you some in
the desired size and shape. Some online fabrication shops have web forms where
you tell them, "I want a 100x120mm card with 3mm thick stainless" and they will
cut that size for you, no further design skill required.

Or you can get fancy and give them a drawing.

If you spend half an hour to learn LibreCad, you can work up a custom design
(with numbering, lines, etc) to meet your specs and send the DXF file to the
fabrication shop.

There is also the [BulletproofBitcoin](bulletproofbitcoin.com) open source seed
storage card design you can download. Unfortunately, BulletproofBitcoin
supplies Adobe Illustrator format files, not DXF. You will have to convert to
DXF for most metal fabricators.

### Where to get stainless steel in Chiang Mai

Try the fabrication shop at 309/5 Kaeonawarat Rd, Tambon Wat Ket, Mueang Chiang Mai District, Chiang Mai 50000


## Size the card according to how big your letters are

Decide how big to make the plate depending on what stamps you are using.

Using 2mm high letters, you want about 3mm of vertical space (more, if you
aren't so good with hand-eye coordination).

You also want a bit of margin so you aren't stamping right up to the edge of
the plate. We suggest making your margin the same size as your line of text.
Assuming 3mm of vertical space per line, that means you just add 3mm at the top
and bottom of the plate.

_Example plate sizes_:

For 2mm high letters, experience shows you can make the plate as small as 24mm
x 26mm (if you stamp both sides) or 42mm x 26mm (stamping one side only).

**That's freaking tiny!**

For 5mm high letters, 90mm x 60mm (stamping one side) works well.

## Use a bench block as a work surface

A "bench block" is a square piece of hardened steel used by jewelers (and sold
by jewelers' suppliers) for hammering and stamping on. Try and get the kind
with rubber underneath, to absorb shock and reduce noise.

Using a bench block as a work surface means you don't leave dents in your desk
as you pound away. This will not only keep other members of your household
happy, it will ensure there is no trace of the seed phrase left in your desk
surface.

The problem: if you stamp into very thin steel, the impressions of the letters
may also impress into your desk. Someone could then read your seed by looking
at your desk when you're not there. A bench block fixes this.

Try to get a large enough bench block. **You want to be working
in the center of the bench block.** This is particularly true if your bench block
uses a rubber shock absorber underneath, which allows the block to tilt back
and forth slightly as you work. If you are working at the corners of the block,
your stamped letters will come out uneven, even if you held the stamps
perfectly vertical!

As a rule, your bench block should be 2-3 times larger than the narrow
side of your seed plate. If you have a 50x100mm seed plate, then you would want
a bench block that is at least 100x100mm, ideally 150x150mm.

By the way... **you don't have to buy a fancy jewelers' bench block.** (they cost
between $10-$50)

You can use any thick piece of hardened steel or stainless steel as a work
surface.

**In the event you can't get a bench block** or don't want to bother, try and make
sure your seed plate is on the thick side (2-3mm or more). Use a pad of paper
(like a yellow legal pad) to protect the desk surface.

Your stamped letters may not look as nice, but at least there won't be traces
of your seed left in the surface of your office desk. You can always burn the
paper pad just to make sure.

## Keep it simple, and be as explicit as possible

You are probably going to store this seed for years or decades. When you need
to use it, you'll have no information to go off of except what's stamped into
the piece of metal... everything else will be long forgotten or unavailable.

To make matters worse, the metal may have been distorted by fire or another
disaster in the intervening years!

Therefore, **we recommend being as explicit as possible: stamp the seed phrase
words in their entirety (not just the first 4 letters).** Even if part of the
word is gone, you can make a good guess at what the word was, given what's left
of it.

Also, consider stamping the index number of each word (1st word, 2nd word, 3rd
word, etc).  This has many benefits:
1. it makes things more explicit when someone (maybe not even you!) is
   recovering the seed decades from now, and
1. it makes it that much easier to restore or verify the seed using a hardware
   wallet.  Most hardware wallets will ask for random words of the seed (4th
   word, then the 1st word, etc) during restore/verify operations. (This
   ensures malware on the local machine can't capture the seed word ordering.)
1. if you screw up stamping a word, you can just stamp it again underneath the
   previous try. Since you stamp the index number as well, you will know this
   is a duplicate word, rather than your seed phrase containing the same word
   twice in a row.

Obviously if you are using a seed card with pre-etched numbers and lines, you
don't have to stamp the numbers.

But, let's back up a bit. There are multiple ways of making marks in metal, and
it's important not to get them mixed up.

## Stamping vs punching

For making a dent in a piece of metal, you can either:
1. use a square rod of hardened steel, with a letter or number cut into the
   end, generally called a "metal stamp" / "steel hand stamp", or
1. use an automatic center punch, essentially a hardened steel point backed up
   by a spring-loaded plunger. When you press the tip up against a piece of
   metal and push down, eventually the device goes "bang!" and makes a dent in
   the metal.

The automatic center punch is more convenient to use, but carries some
downsides. Therefore, we'll mostly be talking about using stamps in the rest of
this document.

However... since automatic-center-punch-based seed storage is quite popular, we
should at least briefly touch on the potential pitfalls. This way, you can take
steps to mitigate the issues in the event you choose to go this route.

### Punching: Numerical or binary seed phrase storage

If you are using an automatic center punch, it's possible to encode the BIP39
seed phrase word as an 11- or 12-bit binary number (from 0-2047 or 1-2048,
respectively). A "one" is represented as a dimple in the metal, a "zero" by
the absence of a dimple. A number of commercial solutions do this.

The problem is ambiguity:
- Did you use 11-bit or 12-bit coding?
- Were you using a zero-indexed BIP39 wordlist (where `abandon` is assigned a
  0), or a one-indexed BIP39 wordlist (where `abandon` is assigned a 1)?

So consider carefully:
- Will you remember which coding and wordlist index type you used in 10 or 20
  years' time?
- Will you have the correct form of the wordlist at hand, or will you remember
  to add or subtract 1 to get the correct word when decoding the values?
- **After a decade, will you even remember that there are multiple ways to
  decode the punched dots in the metal plate?**

(Getting it wrong means an off-by-one error. When you encode `able` [word index
3] now, you may recover `about` [word index 4] -- later.)

Unless you can make all this explicit in the metal card itself, there is a risk
you will fail to recover the seed phrase even if everything else works!

### Punching: Positional alphanumeric coding

Some center-punch based seed storage cards use a scheme that can be summed-up
as "punch here for A, punch there for B." Then you go through and slowly spell
out `ability,` dot after dot.

The thing is... how do you know whether a dot at position X means an "A" or a
"B"? Usually you can tell because there are grids and letters etched on the
plate surface, often with a helpful dot indicating where you should make the
mark.

But... you remember where, in the "Keep it simple, be as explicit as possible"
section, we said that punching makes the seed phrase recoverable NO MATTER
WHAT?

Well, **the etched lines, grids, and letters in the card are not impressed in
the metal, and therefore CANNOT be recovered using the police-forensics
acid-etching-trick.**

So you could, at least in theory, find yourself standing in front of a plate
that has a bunch of dots in it, not sure which dot means what.

(The exception to this is TinySeed, which uses a coin stamping process to
create their cards. That's why they're so expensive. However, they are 
subject to the binary coding ambiguity discussed above.)

The other problem is that positional-coding wallets generally only encode the
first 4 letters of each seed word. This means you lose some redundancy, and the
chance that severe physical damage will make the seed unrecoverable goes up.

All this said... what are the odds you will need to recover a plate that has
been dragged across concrete, attacked with an angle grinder, or soaked in acid
long enough to remove a tenth-millimeter of steel?

If you're willing to accept the reduction in robustness, a positional coding
scheme (Blockplate, Steelwallet) with an automatic center punch is much more
convenient than stamping.

You just have to figure out how to buy it without your name appearing in the
manufacturer's database... or hire a metal fabrication shop to make you one.

## Choice of hammer

But enough about punching, let's look at the tools and techniques of stamping.

For a hammer, you want something with a fair bit of heft and a large face.

- Too light a hammer and you will have to wind up and hit the stamp from far
  away, at very high speed...  so if you miss, you'll break your hand!
- If the hammer face is too small, it's also much easier to miss and maybe
  hurt your hand.
- Too heavy or large a hammer is just a pain to work with.

A 1kg or 1.5kg mini-sledgehammer is pretty much ideal, depending on how strong
your arms are.

If you have to use a sub-optimal hammer, then use some pliers to hold the
stamp, keeping your hand a safe distance away. (more on this below)

## Which metal stamps to use

Just about any alphanumeric metal stamping set will do the job. Ask at your
local hardware shop, or buy online.

Stamps are available in a wide variety of sizes, from 1.5mm letter height to
6mm and more:
- The tiniest stamps can be used to make **extremely** small seed storage
  cards, smaller than a postage stamp! (if you use both sides and a 12-word
  seed) This may come at the expense of legibility though...
- The larger stamps are very easy to read but also require more force to make
  an impression, and may result in your seed storage card being too large.

### Stamp holding tools

Also pick up a set of pliers for holding the stamps. If you find yourself
missing the stamps a lot, the pliers will let you keep your hand at a safe
distance!

Locking pliers (Vise-Grips) are useful because they will keep the stamp from
flying away if you hit at the wrong angle.

Specialised stamp-holding tools are available, if you buy from the
higher-end "made in Germany/Austria" hand stamp manufacturers. These make your
life much easier, but are expensive.

### Extra-hard nickel plated stamps for stainless steel

The better stamp manufacturers will also sell you nickel-plated extra-hard
stamps which are more suitable for marking stainless steel. Here's why this is
useful:

Stainless steel is much harder than regular steel, and has somewhat more
complex metallurgy.

This means regular stamps wear down quickly and may transfer iron particles
over when they impact the surface. These particles can compromise the corrosion
resistance of stainless, at least locally.

Nickel plating ensures no particles transfer to the work piece and corrosion
resistance remains intact.

**You don't actually need special stamps for stainless steel**, regular stamps
will work too. Using nickel-plated hardened stamps will maybe give you an extra
10% improvement.

### Type sets, presses, and stamping machines

If you are doing this a lot and/or like playing with cool toys, there are more
exotic and professional tools you can bring to bear: type sets, presses, and
stamping machines.

#### Type sets

Type sets contain a box full of movable type and a type holder. Using the type
holder, you can stamp an entire word (or more) into metal at once.  They are
wonderfully convenient, but require much more force to make an impression.

Therefore:

- you need a heavier hammer or more speed to your swing,
- you should get the **smallest** font size type set which will do the job
  (bigger letters require more force to make an impression),
- you definitely want some kind of steel bench plate to work on, and
- you absolutely must have some kind of holding tool to keep your hand away
  from the work area. (else you WILL end up in the hospital!)

They're also **much** more expensive.

##### Results of testing a type set

We were able to test a 5mm type set stamping a 3mm thick plate of 1.4301
stainless steel with a 1kg hammer. 

Our conclusion: we would have liked to have a heavier hammer or even a
bench-top press in order to get good results with a 5mm font size.

For "home" stamping, we strongly recommend getting a much smaller font size,
5mm was simply too large and the letters ended up quite shallow.

We would also have liked to have some kind of stand in order to keep the type
holder precisely vertical while stamping. We found it to be more sensitive to
variations in vertical angle than single-letter stamps.

Nevertheless the process went noticeably quicker than stamping using individual
hand stamps. The words were very neat and clean. Since we only had to
make 12 strikes with the hammer (one per word) there was much less noise to
annoy neighbors (compared with stanping one letter at a time).

#### Presses

Bench-top presses are available for use with type sets (or individual stamps)
that take over the hard work of hammering. They always hold the stamping tool
exactly perpendicular and make a perfect impression every time.

The cheaper presses are essentially over-sized automatic center punches, with
an internal spring that gets compressed until they go "bang" and drive the tool
into the work-piece.  More expensive hydraulic presses also exist.

#### Stamping machines

Stamping machines are the most exotic of the bunch. Think of a typewriter
that's designed to hit so hard it makes an impression in stainless steel. They
were originally developed for making miliary dog tags. **Military dog tags have
to survive incredible chaos and destruction**... even when the person they are
attached to gets blown to bits, the dog tag has to identify who it was.

The stamping machine was therefore developed a way to quickly and easily
manufacture dog tags that are extremely robust. These machines are often
portable, so that a military officer could set up a table and then process a
long line of fresh recruits waiting for their tags.

Modern stamping machines are no longer just used for military applications.
However, if you choose to go this route, you want a stamping machine which is a
simple as possible. The "smarter" or more "digital" the machine, the greater
the risk it will store or leak your seed phrase. **Ideally you want a purely
analog and mechanical solution!**

There are a couple of relatively inexpensive options for stamping machines:

- The [DYMO Rhino M1011
  Embosser](https://www.dymo.com/label-makers-printers/embossing-label-makers/dymo-rhino-m1011-embosser-kit/SAP_101105.html)
  will stamp anything into very thin stainless steel tape. It's very
  inexpensive ([about $150 on
  Amazon](https://www.amazon.com/DYMO-Labeller-Embossing-1-Carded-M1101/dp/B000FD7Z7I/) as of writing) and simple to use. The tape is thin
  enough to be easy to hide, and will be hard to find with a metal detector.
  However, it's not as robust as a metal seed plate.
- There are a number of Chinese knock-off manual embossing machines --
  [1](https://www.amazon.com/ECUTEE-Embossing-Stamping-Embosser-Nameplates/dp/B0BHNMMCLF/)
  [2](https://www.amazon.com/Nameplate-Stamping-Semi-Automatic-Embosser-Character/dp/B09TGVT1HN/)
  [3](https://www.amazon.com/Nameplate-Stamping-Different-Character-optional/dp/B00ST05MEW/)
  -- all around $250 which look very suitable. They all look like they will do
  a superb job of embossing text character-by-character into a stainless steel
  plate. They're designed to hold the stamp exactly perpendicular, and have
  controlled spacing between characters. Caution! Make sure the machine you buy
  is suitable for stamping stainless steel. If the stamp wheel is too soft
  (designed for aluminum only) then it will wear very quickly.

## Draw a base- or under-line before you stamp

If you are using individual stamps (versus a type holder) then it's very useful
to have guide-lines in the plate surface. You'll use these to align the hand
stamps while working.

Take a ruler and fine point permanent marker (Sharpie in the US, Edding in
Europe) and draw base- or under-lines, right under where you want to stamp your
seed phrase words.  (Commercially available cards already have these lines
etched.)

This will give you a visual reference to align the stamps as you go. Otherwise
your stamping will be all over the place, and not very pretty.

If you are fabricating your own cards, then the fabrication shop may be able to
laser-etch the lines for you.

(you don't need to do this, but it will make the results much nicer... and if
you want to create a very small seed plate with densely packed letters, it's
all but mandatory. Without guide-lines, your letters may end up on top of each
other.

How widely spaced should the guide-lines be? If you bought 2mm stamps then
having guide-lines every 3mm seems to work well. (For other sizes, experiment
and see what works using a spare piece of metal.)

An easy way to etch lines every 3mm (or whichever width you choose) is to use
machinist's calipers. These are cheap and available just about anywhere. Almost
all of them have hardened jaws so that they can be used for marking metal. You
want to make sure you get a set of calipers which have a set-screw or
lock-screw on the back, which can be used to lock the position of the jaws in
place.

To etch lines, you first open the caliper jaws to e.g 3mm. Then, holding one
jaw against the (straight, clean) edge of the metal plate, you drag the sharp
tip across the surface of the metal plate. It will make a clean line exactly
3mm from the edge.

Repeat with the jaws at 6mm, 9mm, and so on.

## Hold the stamps exactly perpendicular -- do a practice run first

It's important to hold the stamps exactly perpendicular to the metal plate as
you hit them with a hammer. Otherwise only part of the letter may be impressed
into the metal:
- tilt the stamp backwards and only the top half of the letter will appear,
- tilt forwards, and you'll get the bottom half.

For most people, this takes a little practice. So do a "practice run" on an
extra piece of metal first, so you get the hang of it before you stamp the
actual seed.

If you really have trouble, find a minature carpenter's bubble level and tape
it to whatever tool you are using for holding the stamps.

## Consider tamper-proofing or covering your card

If someone finds your plate, they can read your seed and steal your money. At
least make them break something to read the seed, so you can see that someone
got to your stash.

There are a variety of schemes out there for tamper-proofing a seed card:
stacking multiple cards together with zip-ties or clips, locking them in some
kind of enclosure, etc.

None of them are really tamper proof. Creating a "seal" which will keep out a
determined adversary is extremely difficult, so anything you come up with is
not likely to be proof against any more serious a threat than an average
teenager.

If you are seriously concerned about a sophisticated attack, then some
variation of the "glitter nail polish" trick for laptop tamper-proofing is
likely to be a good starting point:

with this approach, glitter mixed into nail polish is spread onto e.g laptop
screws, allowed to dry, and photographed.  Later, a 2nd photo taken from the
exact same angle using the exact same lighting is made. The two photographs are
compared rapidly back and forth, a so called "blink comparison," to reveal any
changes.

We do not know of any seed-storage-specific version of glitter-nail-polish
approach, so further research is necessary.

Alernately: use a passphrase on your seed.

## Summing it up: what to buy

**If you're lazy** and willing to accept 50-80% of the toughness in exchage for
only having to do 20% of the work:
- Positional-coding center-punch-based solution, like the Steelwallet or
  Blockplate. (just keep in mind potential risks of buying a crypto
  seed storage product online, as discussed in the "Commercial vs DIY" section.
  Or make your own)

**For stamping... at the bare minimum**, you need:
- some flat piece of metal, with enough space to stamp every word of your seed
  phrase (you can use both sides, if it's thick enough... 3mm thickness is
  good)
- a hammer
- some metal stamps with letters on them (and numbers if you want to indicate
  the 1st/2nd/3rd word of your seed phrase)

**Ideally** you would have:
- a jewellers' bench plate
- suitably sized cards cut out of 3mm marine-grade stainless steel (EN 1.4404 /
  AISI 316L)
    - optionally with under-lines etched in it so you have a reference where to
      stamp
- nickel-plated extra-hard hand stamp set (letters and numbers) designed for
  stainless steel
- a tool to hold the stamps so you don't hurt your hand (locking pliers or a
  special-purpose tool)
- a 1kg or 1.5kg sledge hammer
- a ruler
- a fine tip permanent marker
- a set of calipers with hardened tips (almost all calipers have hardened
  tips) and a set-screw for locking the position of the jaws in place
- somewhere you can hammer away without annoying anyone!

**If you want to spend a bit more**: get a type set (see the section on type
sets) instead of hand stamps. This will make things go a fair bit faster, and
your seed words will look nicer. Plus, they're great fun to use.
