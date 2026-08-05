# Nicole B. Cabral — Portfolio

An interactive library. Five books on a shelf, one per body of work: **Medical**,
**Writer & Author**, **Artist**, **Storyteller & Editor**, **Website Builder**.

Three files, no build step, no dependencies beyond two Google webfonts.
Open `index.html` in a browser and it runs.

- `index.html` — the hall, the shelf, the category pages, the paper reader,
  the scrapbook, the reel gallery
- `papers.js` — the full text of each research paper and poster
- `extras.js` — scrapbooks (flip-through reading pages) and reel galleries
  (embedded video pages)

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
publisher — used on Writer. `embed` takes a literal `<iframe>`; pair it with
`embedUrl` and `embedHost` so a viewer whose network or privacy extension
blocks the platform still gets a link through to the original post.

---

## Files you still need to add

Nothing here is broken without them, but these links currently point at files
that don't exist yet:

```
assets/
  sites/              ← 16:9 screenshots for the website cards
  og-cover.jpg        ← 1200×630, shown when the link is shared
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
```

Nine papers are readable in full at `#/paper/<id>`: `usv`, `attention`,
`antimalarial`, `clerodendrum`, `cd8`, `coral`, `bioremediation`, `signup`,
`cigarette`. A tenth, `cigarette-progress`, carries the build's progress
report and the field-test video under Presentations, sharing the same title
as the `cigarette` research paper in Research Papers — same project, two
different documents.

`cig-video.mp4` is committed as-is (no compression tooling was available in
this environment). 23MB is under GitHub's warning threshold but will slow a
fresh clone; if more video gets added later, worth moving to Git LFS.

If `assets/nicole.jpg` is ever missing the frame falls back to an `NBC`
monogram rather than a broken image. The warm overlay that blends the studio
green into the hall lives in `.portrait::after` — lower those opacities to
leave the photo as shot.

### Scrapbooks — flip-through reading pages

`extras.js` defines `SCRAPBOOKS[id]`: a title, an optional `hero` image shown
above the book, and a `pages` array — one leaf per page, each a `poem` (an
array of stanzas, each line with an indent step 0–3, for staggered verse;
add `align:'center'` to center the stanza instead, ignoring indent), an
`essay` (a title plus verbatim paragraphs, scrolls internally if it runs
long), or an `image` (a designed page, shown as a photo). A poem can also
carry a small `kicker` line under its title (used for "Universal Quest,
p. 88"). Give any item a `scrapbook:'<id>'` key and the whole card opens it
at `#/scrapbook/<id>` — falling petals, a vintage-paper flip-book with a
3D page-turn, a **Flip** button and a **‹ Back** button to page back.

On a poem page the title, kicker and verse centre on the leaf **as one block**.
Centring the verse on its own stranded the title at the top of the page with a
hand's width of blank paper between them.

`writing-samples` (linked from Writer → Books & Literary → *Selected poetry
and essays*) holds seven pages: four poems (two transcribed from the images
supplied, one from a scanned book page, one from a quote card), the essay
*Taguig Calls for Art to Action*, and the essay *"Mag-ingay Ka Nga, Ang
Tahimik Mo!"* — written in Filipino, kept exactly as submitted. The `hero`
key is commented out: the flat-lay photo of the books, shirt and merchandise
never arrived as a file, and an empty placeholder frame at the top pushed the
book itself below the fold. Uncomment it when the photo exists. More sample
pages were promised for a follow-up message; append them to the `pages` array
in the order they should be read.

Poem lines wrap on narrow screens rather than clipping — a couple of the
newer poems have lines much longer than the first two, and forcing them onto
one line ran text off the edge of the page on small phones.

### Reel galleries — embedded video pages

`extras.js` defines `REELS[id]`: a title, a note, and a `clips` array of
`{embed, label, url, host}`, where `embed` is a literal `<iframe>` string
(Facebook's `/plugins/video.php` embed, or Instagram's `/embed` path — neither
needs their JS SDK loaded). Give any item a `reels:'<id>'` key and the card
opens `#/reels/<id>`, a grid of the embedded clips. Every frame is forced to
the same height whatever the platform's own iframe dimensions, so one card
doesn't pillarbox in black next to the others.

`open-mic` holds three clips: a Facebook reel and two Instagram posts.

Facebook and Instagram embeds can be blocked by a privacy extension, a
locked-down network, or a sandboxed preview — which is why every clip carries
`url` and `host`, printed under the frame as "Open on Instagram ↗". The piece
stays reachable even when the embed shows nothing.

There is no Download CV button. The work itself is the portfolio; add one back
in the left panel if you later want the PDFs offered alongside it.

---

## What's built in

**Navigation.** Every view has its own URL — `#/medical`,
`#/writer/brand-and-corporate`, `#/paper/usv`. The browser back button works,
links are shareable, and a single paper can be sent to a supervisor directly.

**The hall.** A stone masonry wall in running bond, a voussoired arch with a
keystone framing the shelf, torchlight falling from the upper left, and a lit
book nook standing at the end of the row — all CSS and inline SVG, no images,
no WebGL.

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
petals, a vintage-paper flip-book with a real 3D page-turn (CSS animation, no
library), and a Flip button rather than swipe gestures a viewer has to discover.

**The reel gallery.** A clean grid for embedded video — Facebook and Instagram
posts play in place via their standalone iframe embeds, no platform SDK
required.

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

- **Digital Illustration and Graphic Design still have no images.** Book
  Cover Design is now strong — both covers (Universal Quest, An Art of
  Words) are in, extracted from the source PDF and cropped to the trim box,
  each linking to a full-size view. The other two Artist tabs are still
  text-only.
- Real screenshots and URLs for the website cards
- Confirm reprint rights on the two book covers — the flag is still on both
  cards; nothing legal has changed, only the artwork itself is now visible
- **`assets/writer/promo-flatlay.jpg`** — the flat-lay photo (books, printed
  shirt, mugs, pens) for the top of the *Selected Poetry and Essays*
  scrapbook. It only ever came through as an inline paste, with no file to
  save, so the `hero` key in `extras.js` is commented out. Drop the file in
  and uncomment it.
- **More scrapbook pages.** Seven pages exist now; more samples were promised
  for a follow-up message — append them to `SCRAPBOOKS['writing-samples'].pages`
  in `extras.js`.
- **The Storyteller "Video Editing" tab was removed** on request — short-form
  employee interviews, small-business TikTok work, and the CapCut/Filmora
  tools line are no longer anywhere on the site. If any of that should live
  somewhere else (a note on the reel gallery, an Artist tools list), it needs
  a new home; right now it's simply gone.
- **The Marketing Team Quiz Portal card has no link, stack, or screenshot.**
  Currently shows "Link pending" and a 16:9 placeholder — send a URL and, if
  worth naming, what it was built with.
