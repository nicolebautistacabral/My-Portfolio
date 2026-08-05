# Nicole B. Cabral — Portfolio

An interactive library. Five books on a shelf, one per body of work: **Medical**,
**Writer & Author**, **Artist**, **Storyteller & Editor**, **Website Builder**.

Two files, no build step, no dependencies beyond two Google webfonts.
Open `index.html` in a browser and it runs.

- `index.html` — the hall, the shelf, the category pages, the paper reader
- `papers.js` — the full text of each research paper and poster

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
    cig-photo01.jpg … -16.jpg     build photos from the cigarette filtration paper
    cig-progress-*.jpg            the concept sketch and one build photo, from the progress sheets
    cig-video.mp4                 field test of the finished device (23MB — see note below)
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

- Real artwork in the Artist section — the book covers are the strongest thing
  in the portfolio and currently exist only as descriptions
- One embedded reel in Storyteller; that section needs to be watched, not read
- Name the signature illustration style
- Real screenshots and URLs for the website cards
- Confirm reprint rights on the two published book covers
- **A cover image for the Writer featured block** — the titles are in
  (*An Art of Words*, *Universal Quest*), but the photo of the two books
  didn't come through as an attachable file, only as an inline paste I can't
  save; drop it at `assets/books.jpg` and it appears automatically. Until then
  the block shows just the "Published books" eyebrow, no broken image.
