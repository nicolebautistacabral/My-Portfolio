/* ============================================================
   EXTRAS — scrapbooks (flip-through reading pages) and reel
   galleries (embedded video/reel viewing pages).

   Neither is a PDF or a download; both open as their own page,
   at #/scrapbook/<id> or #/reels/<id>.

   SCRAPBOOKS[id] = {
     cat, tab,                       which book/tab the "back" link returns to
     title,
     hero:{img,alt,cap},             optional — shown above the book, full width
     pages:[ page, … ]               one leaf per page, flipped in order
   }

   A page is one of:
     {type:'poem',  title, stanzas:[[{t,i}],…]}   i = indent step (0–3)
     {type:'essay', title, paragraphs:[…]}         verbatim text
     {type:'image', img, alt, cap}                 a designed page, as a photo

   REELS[id] = {
     cat, tab, title, note,
     clips:[ {embed:'<iframe …>', label}, … ]
   }
   ============================================================ */

const SCRAPBOOKS = {

'writing-samples': {
  cat:'writer',
  tab:'Books & Literary',
  title:'Selected Poetry and Essays',
  intro:'A few pieces, read here as they were written — not photographed. More samples are on their way.',
  hero:{
    img:'assets/writer/promo-flatlay.jpg',
    alt:'An Art of Words — paperbacks, a printed shirt, pens and mugs laid out together',
    cap:'An Art of Words — ₱290 + shipping'
  },
  pages:[
    {type:'poem', title:'That’s Not Love',
      stanzas:[
        [ {t:'Stay,',i:0}, {t:'if you must.',i:1} ],
        [ {t:'But do not stay,',i:2}, {t:'for temporary lust.',i:1} ]
      ]
    },
    {type:'poem', title:'Incompetent Leader',
      stanzas:[
        [ {t:'From the trick of your words,',i:0}, {t:'becomes the death of all.',i:1},
          {t:'The country you adjourned,',i:0}, {t:'should’ve survived by dawn.',i:1} ],
        [ {t:'If you cared for this state,',i:0}, {t:'if you cared for our lives,',i:1},
          {t:'did you know it’s at stake,',i:0}, {t:'when it’s supposed to thrive?',i:1} ]
      ]
    },
    {type:'essay', title:'➙ Taguig Calls for Art to Action',
      paragraphs:[
        'Art, by its splashes and blends of Taguig City, lured the residents and tourists into the glowing poise among its well-established landmarks, interactive museums, and engaging programs. This masterpiece weaves God’s promises through educational equity, transformation, and social awareness movements.  No wonder this place was previously referred to as Tagumpay; with every stroke of paint to the Barangays, it went through a lot of processes and breakthroughs to achieve progressive changes. These changes contributed to modern visions regarding urban planning, connecting communities with the city’s recreational agendas and activities, and treasuring and recalling rich traditions and history encapsulated in reveling festivals and public art displays. Upon tracking specified development lists, these contributions were found to be matagumpay for Taguig.',
        'Since the city itself has roots from the Spanish and American colonial periods, beginning from the shores of Laguna de Bay as the mutipurpose source of water and agricultural cultivation; the Napindan Lighthouse which is formerly a podium of disputes between the Spanish forces and the Katipunan; the old churches such as Sta. Ana Parish church which was a proposition of Franciscan missionaries or the Spanish colonial features from St. Michael the Archangel Parish Church done by the Jesuits in 18th century;  from the headquarters of Fort McKinley stood as the homage of each context and significance during Philippine-American War to World War II; although, it’s difficult to jot down every historical points in Taguig and there were too many to mention them as to pay tribute of our historical roots, the case is that the presence is sustained and balanced in the present times. Indeed, how lovely the arts of history blends with the arts of the modern timeline.',
        '“So to my guests, my name is Taguigeña, who’s on board to introduce the milestone of our hometown!”',
        'Let’s proceed with the first check point! God’s promised is fulfilled for Taguig through the movements of rights, distributing to each working family. In the aforementioned, Taguig has attained the essence of educational equity to students across the barrios, which fosters equal opportunities for all to have access to developing knowledge and to break the sequence of misfortunes and poverties. Most specifically known for Mayor Lani Cayetano’s L.A.N.I Scholarships— who knows with more than 46,000 that it has processed, it is perfectly equipped for all grade levels to assist them not only in terms of finances but to empower students that there exist redemption with navigations to life’s rollercoaster challenges. How dynamic to know that Taguig makes brighter future for beneficiaries to be the professionals and experts they ought to be.',
        'This proceeds to the second check point which is prosperity! As residents of Taguig for obtaining such promise from God, Taguig is painting transformation for the visitors and residents regarding the arts of general knowledge, mass celebrations, and heritage tours. Like the mind museum, providing space of expanding discoveries into the pull-offs of  sculptures and monuments. Or even the Heroes’ Cemetery, which is a recollection of shrines, plaques, and statues honoring Filipino martyrs and heroes. The notable temperaments commemorated here include Andres Bonifacio and the valiant Katipunan rebels. But these are few examples, and there’s still remaining beautiful landmarks out there in Taguig that will left us enliven both spirits and hearts.',
        'Now, this connects to our third checkpoint, which is the promise of unity from assembling our willingness to listen and see society as a family. Even though Taguig has been involved for its unscathed visions for environmental orders, such as Zero Waste Plan, Taguig Urban Farms, Plant Plant Plant movement, or other contributing campaigns, the only thing that God wants for Taguig thirteen years from now is to keep doing environmental projects and more passion with the call of nature. Given that we were able to value our historical roots, I believe it’s also the best time to utilize our capacities and willingness to put nature too, especially in the light of current heat conditions. Art is not enough if we only paint our entertainments and community buildings, but to paint art in where we stood and where we lived for. For I am an artist who seeks to paint the areas that need more greenery and flourishing layers to fill in the polluted gaps for Taguig’s environmental venues.',
        '“Once again, my name is Taguigeña, this time, may I invite you to join Taguig’s Art to Action for Mother Nature?”'
      ]
    }
  ]
}

};

const REELS = {

'open-mic': {
  cat:'storyteller',
  tab:'Storytelling Reels',
  title:'Open Mic Performance',
  note:'Spoken word and stage work, CAPO MNL and gallery events. Watched, not read.',
  clips:[
    {
      label:'Reel',
      embed:'<iframe src="https://www.facebook.com/plugins/video.php?height=476&href='+encodeURIComponent('https://www.facebook.com/share/r/1bCRrFFyje/')+'&show_text=false&width=267&t=0" width="267" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'
    },
    {
      label:'Reel',
      embed:'<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fnicolerdscabral%2Fvideos%2F499922705621601%2F&show_text=false&width=267&t=0" width="267" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'
    },
    {
      label:'Instagram',
      embed:'<iframe src="https://www.instagram.com/p/Csf3HrfJ8X8/embed" width="340" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>'
    }
  ]
}

};
