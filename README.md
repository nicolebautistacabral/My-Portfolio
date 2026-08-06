# Nicole B. Cabral — Portfolio

An interactive library. Five books on a shelf, one per body of work: **Medical**,
**Writer & Author**, **Artist**, **Storyteller & Editor**, **Website Builder**.

Three files, no build step, no dependencies beyond two Google webfonts.
Open `index.html` in a browser and it runs.

- `index.html` — the hall, the shelf, the category pages, the paper reader,
  the scrapbook, the reel gallery
- `papers.js` — the full text of each research paper and poster
- `extras.js` — scrapbooks (long-form reading pages for poems and essays)
  and reel galleries (clickable video posters)

---

## Editing content

Everything you'll want to change lives in the `BOOKS` array inside the `<script>`
tag near the bottom of `index.html`. The interface is generated from it — add an
item to the array and a card appears, with the tab counts and the spine numbers
updating themselves.

### An item

```js
{
  y:'2024',                      // year, or '—', or '2021–2025'
  t:'Title of the work',
  d:'One or two sentences. What it was, what you did.',
  big:true,                      // optional — card spans two columns
  flag:'Rights check pending',   // optional — small dashed note
  url:'https://…',               // optional — adds a "View →" link
  img:'assets/…'                 // optional — a thumbnail across the top of the card,
}                                 // shown in full (not cropped); removes itself if the file is missing
```

The two book cover cards in Artist → Book Cover Design are the reference
example: `img` for the thumbnail, `url` pointing at the same (or a larger)
image so "View →" opens it full size. Thumbnails are a fixed height with
`object-fit:contain`, so covers of different proportions still line up.

`big:true` makes a card take the **whole row**, not two of three columns —
spanning two orphaned the third column on every row of a run of wide cards,
which most tabs have.

### A tab

```js
{ name:'Research Papers', items:[ /* items */ ] }
```

### The website cards

The Website Builder book uses `sites` instead of `items`:

```js
{ t:'Site name', d:'One sentence on what it is.',
  role:'Design and build', stack:'HTML, CSS, JS',
  status:'Live', url:'https://…', img:'assets/sites/name.jpg',
  note:'Link pending' }             // optional — small dashed note, same as a card's flag
```

Leave `img` empty and the card shows a 16:9 placeholder. `status:'Live'` renders
a green dot; anything else prints as plain text. Leave `url` empty or `'#'`
and the card renders as a plain block instead of a link — no dead click
target while a real URL is still pending. A field you leave out (or set to
`'—'`) prints nothing at all rather than an empty row — "Stack —" reads as a
value, which is worse than no Stack line.

### Papers that open as their own page

Add `paper:'<id>'` to any item and the whole card becomes clickable, opening
that paper at its own URL (`#/paper/<id>`) as a full reading page — never as a
download. The `<id>` must match a key in `papers.js`.

```js
{ y:'2026', t:'Paper title', d:'One-line summary.', paper:'usv', big:true }
```

Inside `papers.js`, a paper is a title block plus an array of content blocks:
`{h:'Heading'}`, `{h3:'Sub-heading'}`, `{p:'Paragraph'}`, `{list:[…]}`,
`{ol:[…]}`, `{defs:[[term,meaning],…]}`, `{fig:'path', cap:'caption'}`,
`{table:{cap,head,rows}}`, `{note:'aside'}`, `{refs:[…]}`,
`{gallery:[{img,cap},…]}` for a grid of photos that each open full size, and
`{video:'path', cap:'caption'}` for a video played in place with native
controls — never offered as a download. The reader builds the contents
sidebar, the reading-time estimate and the progress bar from that structure
automatically. Every word in those blocks is the author's own and is
reproduced exactly as written.

Set `poster:{img:'…', alt:'…'}` instead of an abstract for poster presentations.
A poster already carries its own text, so `antimalarial` leaves `blocks:[]` and
the page is the artwork and nothing else: no contents column, no reading-time
estimate, and the reading measure widens to give the poster the full page. Any
paper with no headings gets that same single-column treatment.

`{slides:[{img,cap},…]}` lays out a slide deck or a set of design pieces as a
grid of full, uncropped thumbnails (`object-fit:contain`, not `cover` — a slide
or a menu layout loses its edges if you crop it like a photo), each opening
full size in the lightbox (below), with a "⤢ View full size" hover cue so
that's clear before the click. The card badge and page both switch from a
reading-time estimate to a slide count automatically. `usv-presentation` is
the reference example: all 27 slides of the deck, shown in the order
presented. `arbitrail-branding`, `zencreatif-cafe`, `zencreatif-jnc`,
`roasted-chicken-menu`, `book-campaign-graphics`, `laundry-branding` and
`illustrations` all use the same block.

### The lightbox — every full-size image opens in place

Every link that points at one of this site's own image files — `{gallery:…}`,
`{slides:…}`, a `{fig:…}` or `{poster:…}` zoom link, a Book Cover Design
card's "View" link — opens in a full-screen in-page lightbox
(`#lightbox` in `index.html`) rather than a new browser tab. This isn't a
style choice: a `target="_blank"` link is silently swallowed with no visible
error by a sandboxed preview iframe (no `allow-popups`), which is exactly
what "I can't view it full size" turned out to be — the link worked, the new
tab just never appeared anywhere the person testing it could see. The
lightbox needs no new tab and works identically in a sandboxed preview, a
real deployment, or `index.html` opened straight off disk.

The mechanism is one delegated click handler, not a change to every image
renderer: any `<a target="_blank">` whose `href` ends in an image extension
gets intercepted automatically, so a future block type that links to an
image gets this for free. External links — LinkedIn, the Canva/Netlify
site links, Facebook and Instagram reels — don't match that pattern and
still open in a new tab as normal; a social platform's own post can't be
rendered in an overlay, so those stay genuine external navigation.

Set `banner:'hands'` on a paper to open it with the five-hand sign-language
header instead of the plain kicker line — used on `signup`. The banner markup
lives once in `index.html` as the `HAND_BANNER` constant; add a new key there
and reference it the same way for a different visual header.

### The featured block

Each book has a `featured` object — one hero piece shown above the tabs, before
anything else. Attention is highest in the first three seconds; spend it on your
strongest work in that category.

Give it `img` (plus optional `alt` and `cap`) and the image runs edge to edge
across the bottom of the box. Add `d` for a description, or leave it out and let
the picture carry the block. If the image file is missing the frame removes
itself rather than showing a broken image.

`covers:[{img,url,t,pub,alt},…]` instead of `img` stands two or more book
covers side by side at a matched height, each captioned with its title and
publisher — the Artist Book Cover Design cards use this pattern directly;
Writer's featured block currently uses a plain `img` instead (the same
"Book Designing" photo the Artist featured block uses).

`video:{url,host,poster,label}` shows a video as a clickable poster rather
than a live platform embed — no iframe to autoplay or be blocked by a privacy
extension, just an image with a play icon that opens the original post in a
new tab. Leave `poster` unset until the thumbnail file exists; the card still
reads as "a video," not a broken image. Storyteller's featured block is the
reference example.

---

## Files you still need to add

Nothing here is broken without them, but these links currently point at files
that don't exist yet:

```
assets/
  sites/              ← 16:9 screenshots for the website cards
  sites/quiz-portal.jpg  ← thumbnail for the Marketing Team Quiz Portal card
  og-cover.jpg        ← 1200×630, shown when the link is shared
  reels/open-mic-1.jpg, -2.jpg, -3.jpg ← real per-clip thumbnails for the three
                                          Open Mic reels — all three currently
                                          share one placeholder (see below)
```

Already in place:

```
assets/
  nicole.jpg                      the portrait, cropped 5:6 to the arched frame
  papers/
    antimalarial-poster.jpg       the poster, rendered from the PDF
    usv-deepsqueak.jpg            the DeepSqueak sample, the Medical hero image
    usv-fig1.jpg … usv-fig9.jpg   the nine figures from the rotation report
    clero-table1.jpg, -table2.jpg the two thesis result tables
    biorem-fig1.jpg, -fig2.jpg    the bioremediation conceptual framework
    cig-photo01.jpg, -05, -07, -10, -14, -16.jpg   six build photos, picked from
                                                    sixteen in the source PDF
    cig-progress-sketch-1.jpg     the group's concept sketch, from the progress sheets
    cig-progress-p3-1.jpg         the second exhaust fan, from the same
    cig-video.mp4                 field test of the finished device (23MB — see note below)
  artist/
    cover-artofwords-front.jpg    front cover, re-cropped off the wraparound to
                                    the trim box — the earlier crop clipped the
                                    "A COLLECTION OF POEMS AND PROSES" line and
                                    carried a printer's trim mark
    cover-artofwords-full.jpg     the full wraparound, trim marks cropped off
    cover-universal-quest.jpg     front cover, as supplied
    featured-books-designed.jpg   both covers staged together — the Artist and
                                    Writer featured blocks both use this photo
    menu-nioks-1.jpg, -2.jpg      Niok's Lechon Manok promo graphic and the
                                    two-page menu spread itself
    book-campaign-preorder.jpg    An Art of Words pre-order announcement graphic
    book-campaign-quote.jpg       cover reveal with the book's own description
    laundry-logo.jpg               Banlaw & Beyond's circular logo mark
    laundry-shopfront.jpg          storefront photo paired with the price list
    laundry-services.jpg           illustrated wash/dry/fold services explainer
    laundry-promo.jpg              seasonal ₱130-per-load promo flyer
    illustration-worn-out.jpg      "Worn Out" — hands reaching into light
    illustration-greek-god.jpg     "Greek God, Who?" — a flaming figure
    illustration-kwek-kwek.jpg     "Kwek-Kwek" — pixel art street food
    illustration-roses-rain.jpg    roses in the rain — also the Open Mic
                                     reels' shared placeholder poster (below)
    illustration-swan.jpg          a swan on still water
  storyteller/
    performance-poster.jpg        a frame from the performance video itself —
                                    the Storyteller featured video's poster
  writer/
    promo-flatlay.jpg             the flat-lay photo (books, shirt, mugs, pens) —
                                    the Selected Poetry and Essays scrapbook hero
    arbitrail/slide-5.jpg … -8.jpg          the roll-up banner, two paid social
                                              graphics, and the website-launch post
    zencreatif-cafe/post-01.jpg … -06.jpg   the café's six posts — five dishes
                                              plus the opening ambience shot
    zencreatif-jnc/post-16.jpg, -17, -19,
                    -20, -21.jpg            five product posts across the
                                              Swirluxe and Silkeen lines
  papers/
    usv-presentation/slide-01.jpg … -27.jpg  the full 27-slide deck, converted
                                               from the source PDF at 1600px wide
```

Ten papers are readable in full at `#/paper/<id>`: `usv`, `attention`,
`antimalarial`, `clerodendrum`, `cd8`, `coral`, `bioremediation`, `signup`,
`cigarette`, and `usv-presentation`. An eleventh, `cigarette-progress`, carries
the build's progress report and the field-test video under Presentations,
sharing the same title as the `cigarette` research paper in Research Papers —
same project, two different documents. `usv-presentation` is the same
relationship for the ultrasonic-vocalization work: the full write-up lives at
`usv` in Research Papers, and the 27-slide deck it was defended with lives
separately in Presentations, so neither page duplicates the other's text.

Seven more papers carry brand and product design work rather than research.
`arbitrail-branding`, `zencreatif-cafe` and `zencreatif-jnc` live under Writer
→ Creative or Corporate (renamed from "Brand & Corporate"). `roasted-chicken-menu`,
`book-campaign-graphics`, `laundry-branding` and `illustrations` live under
Artist → Graphic Design and Digital Illustration. Each is a short intro
paragraph followed by a `slides` grid of the actual collateral — `illustrations`
is the one exception still waiting on its two image files (see "Still to do").

`cig-video.mp4` is committed as-is (no compression tooling was available in
this environment). 23MB is under GitHub's warning threshold but will slow a
fresh clone; if more video gets added later, worth moving to Git LFS.

If `assets/nicole.jpg` is ever missing the frame falls back to an `NBC`
monogram rather than a broken image. The warm overlay that blends the studio
green into the hall lives in `.portrait::after` — lower those opacities to
leave the photo as shot.

### Scrapbooks — long-form reading pages

`extras.js` defines `SCRAPBOOKS[id]`: a title, an optional `hero` image shown
above the book, and a `pages` array — one card per piece, each a `poem` (an
array of stanzas, each line with an indent step 0–3, for staggered verse;
add `align:'center'` to center the stanza instead, ignoring indent), an
`essay` (a title plus verbatim paragraphs, no length limit — the page just
grows), or an `image` (a designed page, shown at full width). A poem can also
carry a small `kicker` line under its title (used for "Universal Quest,
p. 88"). Give any item a `scrapbook:'<id>'` key and the whole card opens it
at `#/scrapbook/<id>` — falling petals, a warm paper card per piece, read by
scrolling.

This used to be a page-flipping book, one small leaf at a time — it looked
the part but packed real poems into a box too cramped to read comfortably.
It's a plain scrolling page now: full-width text at a real reading size, one
card per piece, nothing to click through. The vintage-paper texture and warm
card background carried over; the flip mechanics, the page-pairing logic and
the two-up/one-up breakpoint did not.

`writing-samples` (linked from Writer → Books & Literary → *Selected poetry
and essays*) holds seven pages: four poems (two transcribed from the images
supplied, one from a scanned book page, one from a quote card), the essay
*Taguig Calls for Art to Action*, and the essay *"Mag-ingay Ka Nga, Ang
Tahimik Mo!"* — written in Filipino, kept exactly as submitted. Its `hero` is
the flat-lay photo of the books, shirt and merchandise, at
`assets/writer/promo-flatlay.jpg`. More sample pages were promised for a
follow-up message; append them to the `pages` array in the order they should
be read.

Poem lines wrap on narrow screens rather than clipping — a couple of the
newer poems have lines much longer than the first two, and forcing them onto
one line ran text off the edge of the page on small phones.

### Reel galleries — clickable video posters

`extras.js` defines `REELS[id]`: a title, a note, and a `clips` array of
`{label, url, host, poster}`. Give any item a `reels:'<id>'` key and the card
opens `#/reels/<id>`, a grid of poster cards — no live platform embed, no
iframe. Every card is one link: click anywhere on it and the original post
opens in a new tab. Leave `poster` unset until the thumbnail file exists and
the card still shows a play icon on a plain background, not a broken image.

`open-mic` holds three clips: a Facebook reel and two Instagram posts. All
three currently share one placeholder poster (the "roses in the rain"
illustration from `assets/artist/illustration-roses-rain.jpg`) so the grid
isn't three blank play buttons — swap each clip's `poster` for its own real
thumbnail when one exists; the link behavior doesn't change either way.

This used to embed the platforms' own `<iframe>` players directly, three
different native sizes fighting to line up in one grid, and liable to be
blocked by a privacy extension or a locked-down network with nothing to show
in their place. A clickable poster fixes both: every card is the same shape,
and there's no iframe left to block.

There is no Download CV button. The work itself is the portfolio; add one back
in the left panel if you later want the PDFs offered alongside it.

---

## What's built in

**Navigation.** Every view has its own URL — `#/medical`,
`#/writer/creative-or-corporate`, `#/paper/usv`. The browser back button works,
links are shareable, and a single paper can be sent to a supervisor directly.

**The hall.** A stone masonry wall in running bond, a voussoired arch with a
keystone framing the shelf, torchlight falling from the upper left, and a lit
book nook standing at the end of the row — all CSS and inline SVG, no images,
no WebGL.

**A book that actually pulls off the shelf.** Hovering a book used to move it
72px on a 3D shelf that renders at roughly 600px wide — a real transform, but
sized so small against its surroundings that it barely registered as
motion. It now lifts 150px forward with a matching scale-up, the cover swings
open enough to show a hint of the page colour inside, and a beam of
light sweeps across the spine as it moves — the one part of the animation
that reads as motion rather than a jump cut, especially in a screenshot. The
cover's own transform picked up a `transition` it never had, too: it used to
snap to its open angle instantly while the rest of the book eased into place.

**Three ways in.** The 3D shelf, the plain text menu at the top right, and
arrow keys plus Enter. The shelf is a front door, not a maze — anyone who
doesn't want to play with it can just click a word.

**"I do more than this."** Every category page carries the short bio and a
button back to the library, so a visitor who lands on one section from a shared
link knows immediately there are four more.

**Motion that behaves.** Petals and dust pause in a background tab and disappear
entirely under `prefers-reduced-motion`.

**The reading room.** Papers open as typeset web pages: a contents sidebar that
tracks your position, a reading-progress bar, figures with their captions, real
HTML tables, and a numbered reference list.

**The scrapbook.** A dedicated reading page for poems and short prose: falling
petals, warm paper-textured cards, and full-width type at a real reading
size — a plain scroll, not a book to flip through.

**The reel gallery.** A clean grid of clickable video posters — Facebook and
Instagram clips open in a new tab on their own platform, no embedded iframe
to load or be blocked.

**Print.** Ctrl+P on a category page produces a clean document with every tab
flattened into it, not a screenshot of a dark room. Papers print as papers.

**Accessibility.** Skip link, keyboard navigation through the shelf, the ARIA
tablist pattern with arrow keys, live-region announcements, focus returned to
the right book on exit.

---

## Deploying

Any static host. Vercel or Netlify: connect the repo, no build command, publish
directory is the root. Push to deploy.

---

## Still to do

- **The Digital Illustration and Storyteller pieces arrived.** All five
  illustrations (`illustration-worn-out.jpg`, `-greek-god.jpg`, `-kwek-kwek.jpg`,
  `-roses-rain.jpg`, `-swan.jpg`) and the Storyteller featured video's poster
  frame came through as PDF attachments and are in place — a PDF page is a
  real file the same way a `.zip`/`.rar` is, unlike a pasted chat image, which
  has no file on disk to save from at all.
- **Real per-clip thumbnails for the three Open Mic reels.** All three
  currently share one placeholder (the roses-in-rain illustration) — send
  three real ones and swap them into `poster` on each clip in
  `REELS['open-mic']`. Every card already opens the correct clip regardless.
- Real screenshot **and** a thumbnail for the Marketing Team Quiz Portal card
  — it has its live URL (`kayvemarketingquizportal.netlify.app`) but still
  shows a 16:9 placeholder with no image at all.
- Confirm reprint rights on the two book covers — the flag was removed from
  both cards on request; nothing legal has changed, only the on-page caution
  has, so revisit if that turns out to matter.
- **More scrapbook pages.** Seven pages exist now; more samples were promised
  for a follow-up message — append them to `SCRAPBOOKS['writing-samples'].pages`
  in `extras.js`.
- **The Storyteller "Video Editing" tab was removed** on request — short-form
  employee interviews, small-business TikTok work, and the CapCut/Filmora
  tools line are no longer anywhere on the site. If any of that should live
  somewhere else (a note on the reel gallery, an Artist tools list), it needs
  a new home; right now it's simply gone.
- **Three Writer tabs were removed** on request — Social & Content, Print &
  Promotional, and Decks & Scripts. Their items either moved into the
  renamed Creative or Corporate tab (Arbitrail Branding, the two Zencreatif
  pages) or are simply gone (the trade-show stand copy, the internal
  interviews, the small-business social content, the slide-deck and
  video-script line). If any of that should surface elsewhere, it needs a new
  home; right now it's not on the site.
