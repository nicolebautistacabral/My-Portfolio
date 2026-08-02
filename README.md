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
`{table:{cap,head,rows}}`, `{note:'aside'}` and `{refs:[…]}`. The reader builds
the contents sidebar, the reading-time estimate and the progress bar from that
structure automatically. Every word in those blocks is the author's own and is
reproduced exactly as written.

Set `poster:{img:'…', alt:'…'}` instead of an abstract for poster presentations —
the image is shown large at the top, with the transcribed text below it.

### The featured block

Each book has a `featured` object — one hero piece shown above the tabs, before
anything else. Attention is highest in the first three seconds; spend it on your
strongest work in that category.

---

## Files you still need to add

Nothing here is broken without them, but these links currently point at files
that don't exist yet:

```
assets/
  nicole.jpg          ← the portrait under your name (portrait crop, ≥600px wide)
  sites/              ← 16:9 screenshots for the website cards
  og-cover.jpg        ← 1200×630, shown when the link is shared
```

Until `assets/nicole.jpg` exists the portrait frame shows an `NBC` monogram
instead — nothing breaks, it just waits for the file.

Already in place:

```
assets/papers/
  antimalarial-poster.jpg         the poster, rendered from the PDF
  usv-fig1.jpg … usv-fig9.jpg     the nine figures from the rotation report
```

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
- Drop `assets/nicole.jpg` in place of the monogram
- Remaining research papers: the *Clerodendrum* thesis, the CD8+ T cell critique,
  the coral rehabilitation and bioremediation papers — add each to `papers.js`
  and set `paper:'<id>'` on its card
