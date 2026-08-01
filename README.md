# Nicole B. Cabral — Portfolio

An interactive library. Five books on a shelf, one per body of work: **Medical**,
**Writer & Author**, **Artist**, **Storyteller & Editor**, **Website Builder**.

Single file, no build step, no dependencies beyond two Google webfonts.
Open `index.html` in a browser and it runs.

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
  cv/
    nicole-cabral-research-cv.pdf     ← for supervisors, labs, doctoral programmes
    nicole-cabral-creative-cv.pdf     ← for agencies, publishers, clients
    nicole-cabral-cv.pdf              ← everything, one document
  sites/                              ← 16:9 screenshots for the website cards
  og-cover.jpg                        ← 1200×630, shown when the link is shared
```

The Download CV button on the homepage offers all three. Each category page
offers whichever one fits it — Medical serves the research CV, Artist and Writer
serve the creative one.

---

## What's built in

**Navigation.** Every view has its own URL — `#/medical`, `#/writer/brand-and-corporate`.
The browser back button works, links are shareable, and a category page can be
sent to someone directly.

**Three ways in.** The 3D shelf, the plain text menu at the top right, and
arrow keys plus Enter. The shelf is a front door, not a maze — anyone who
doesn't want to play with it can just click a word.

**"I do more than this."** Every category page carries the short bio and a
button back to the library, so a visitor who lands on one section from a shared
link knows immediately there are four more.

**Motion that behaves.** Petals and dust pause in a background tab and disappear
entirely under `prefers-reduced-motion`.

**Print.** Ctrl+P on a category page produces a clean document with every tab
flattened into it, not a screenshot of a dark room.

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
