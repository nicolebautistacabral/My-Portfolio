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
  url:'https://…'                // optional — adds a "View →" link
}
```

### A tab

```js
{ name:'Research Papers', items:[ /* items */ ] }
```

### The website cards

The Website Builder book uses `sites` instead of `items`:

```js
{ t:'Site name', role:'Design and build', stack:'HTML, CSS, JS',
  status:'Live', url:'https://…', img:'assets/sites/name.jpg' }
```

Leave `img` empty and the card shows a 16:9 placeholder. `status:'Live'` renders
a green dot; anything else prints as plain text.

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

Set `poster:{img:'…', alt:'…'}` instead of an abstract for poster presentations —
the image is shown large at the top, with the transcribed text below it.

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
  writer/
    (empty — see "Files you still need to add" above: promo-flatlay.jpg)
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
array of stanzas, each line with an indent step 0–3, for staggered verse),
an `essay` (a title plus verbatim paragraphs, scrolls internally if it runs
long), or an `image` (a designed page, shown as a photo). Give any item a
`scrapbook:'<id>'` key and the whole card opens it at `#/scrapbook/<id>` —
falling petals, a vintage-paper flip-book with a 3D page-turn, a **Flip**
button and a **‹ Back** button to page back.

`writing-samples` (linked from Writer → Books & Literary → *Selected poetry
and essays*) currently holds two poems, transcribed as text from the images
supplied, and the full text of *Taguig Calls for Art to Action*. The `hero`
image — the flat-lay photo of the printed books, shirt and merchandise —
didn't come through as a file, so it's referenced at `assets/writer/promo-flatlay.jpg`
and shows "Cover photo pending" until that file exists. More sample pages
were promised for a follow-up message; append them to the `pages` array in
the order they should be read.

### Reel galleries — embedded video pages

`extras.js` defines `REELS[id]`: a title, a note, and a `clips` array of
`{embed, label}`, where `embed` is a literal `<iframe>` string (Facebook's
`/plugins/video.php` embed, or Instagram's `/embed` path — neither needs
their JS SDK loaded). Give any item a `reels:'<id>'` key and the card opens
`#/reels/<id>`, a grid of the embedded clips.

`open-mic` holds three clips. Two of the three pieces of embed code supplied
for it were byte-identical (same Facebook video ID, `499922705621601`) — I
used it once rather than duplicating the same video, on the assumption the
repeat was a paste error. If a different second reel was intended, swap the
second `embed` in `REELS['open-mic'].clips` in `extras.js`.

Facebook and Instagram block their embeds from loading inside a sandboxed
preview (no network access, strict CSP) — they'll show as broken-image icons
there but render normally once the site is live on the open web.

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

- **Real artwork in the Artist section.** The featured block currently shows
  only a date and a flag — both the title and description were removed on
  request, and no cover image has arrived yet. This is the thinnest part of
  the portfolio for an illustrator; the book covers are the strongest thing
  she has and a viewer can't see either of them.
- Name the signature illustration style
- Real screenshots and URLs for the website cards
- Confirm reprint rights on the two published book covers
- **A cover image for the Writer featured block** — the titles are in
  (*An Art of Words*, *Universal Quest*), but the photo of the two books
  didn't come through as an attachable file, only as an inline paste I can't
  save; drop it at `assets/books.jpg` and it appears automatically. Until then
  the block shows just the "Published books" eyebrow, no broken image.
- **`assets/writer/promo-flatlay.jpg`** — the flat-lay photo (books, printed
  shirt, mugs, pens) for the top of the *Selected Poetry and Essays* scrapbook.
  Same situation as the Writer cover — inline paste, no file to save.
- **More scrapbook pages.** Only three pages exist so far; more samples were
  promised for a follow-up message — append them to `SCRAPBOOKS['writing-samples'].pages`
  in `extras.js`.
- **The Storyteller "Video Editing" tab was removed** on request — short-form
  employee interviews, small-business TikTok work, and the CapCut/Filmora
  tools line are no longer anywhere on the site. If any of that should live
  somewhere else (a note on the reel gallery, an Artist tools list), it needs
  a new home; right now it's simply gone.
- **Confirm the second Open Mic reel.** Two of the three embed codes supplied
  were identical (same video ID) — used once rather than twice. See the
  "Reel galleries" section above.
