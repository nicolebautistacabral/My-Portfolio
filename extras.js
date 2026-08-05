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
    },
    {type:'poem', title:'Tragic Story of Humanity',
      kicker:'Universal Quest, p. 88',
      stanzas:[
        [ {t:'Whispers of the dead were roaring in the streets.',i:0},
          {t:'As seen through infrared,',i:1},
          {t:'we knew we’re in dead meat.',i:1} ],
        [ {t:'To view this in a frame,',i:0}, {t:'was like a scary film.',i:2},
          {t:'’Cos the vibes were the same',i:0}, {t:'like silent hill.',i:1} ],
        [ {t:'So I tried to study',i:0}, {t:'their lingering souls.',i:2},
          {t:'Turns out, their history was bloody',i:0}, {t:'as said in the tome.',i:1} ]
      ]
    },
    {type:'poem', title:'Myth Untold: Selfishness and Dreams', align:'center',
      stanzas:[
        [ {t:'Two leaves stayed from a dead tree.',i:0},
          {t:'Nevertheless, both were in glee.',i:0},
          {t:'But the myth said, one must see,',i:0},
          {t:'that the other should be free.',i:0} ]
      ]
    },
    {type:'essay', title:'“Mag-ingay Ka Nga, Ang Tahimik Mo!”',
      paragraphs:[
        'Tahimik ako pero hindi ako pipi. Noong bata ako, nasa kalamlaman ko na maging diskreto para hindi ko naaagaw ang atensyon ng ibang tao. Hindi rin ako damay sa kahihinatnan ng mga kaingayan nila. Ayoko kasi yung pakiramdam na nasa spotlight ako. Gusto ko lang manatili sa ‘king anino at kumilos nang payak. Walang mabibigat na bagahe na kailangan kong dalhin sa uuwian kong matiwasay na tirahan. Sadyang naimpluwensiyahan din naman ako sa aking kapaligiran kung bakit ako tahimik, lumaking tahimik, at pinipiling manahimik.',
        'Kahit ngayong beinteyuno na ‘ko, may mga puntong niyayapos ko ang mga kawalang-ingay na espasyo— malayo sa mala-gyerang alitan ng masa. Napapansin ko kasi na ang namumuong paligsahan nila sa isa’t isa ay humahantong sa pamatay na pambabato sa mga itsura’t buhay ng indibidwal kaysa pagtuunan ng pansin ang mismong isyung tinatalakay. Maraming gumagamit ng ad hominem, na kung sakaling mali pala ang pinanghahawakang paniniwala ng isang tao, hindi siya bukas sa kabilang pananaw dahil natatamaan sa beripikado at malalaman na argumento. Sana yung patakaran sa mga debate, mai-apply sa mga nakikipagtalo sa internet at real life. Marami rin kasing mga Pinoy na ang hilig sa bardagulan. Uso pa nga yung cancel culture nung pandemya. Post dito sa Facebook at Instagram! Parinig pa more dito sa Twitter! Nakakawalang-gana kapag sinisipsip pa ng mga saradong-utak ang may mga lubos na pasensya. Mapapasabi ka talagang mas masarap humiwalay sa gulo ng mundo dahil walang iisipin na kinakasungkatang problema.',
        'Aaminin ko, minsan na rin akong natakot sa iisipin ng iba kaya ko pinili maging tahimik. Noong Grade three ako, hindi pa dumarating ang guro sa susunod naming klase, pumunta na yung president namin sa harapan para magsulat sa pisara kung sino ang ililista sa noisy. Nakakatawang balikan ‘yon kasi iba yung kaba na naramdaman ko kung may chance maisulat yung pangalan ko. Hindi naman siya nangyari dahil hindi naman ako nakipagdaldalan sa mga seatmates ko. Imagine, para akong duwag na nasa mahigpit na hukbo na kinikitaan sa pagiging masunurin. Sa isip-isip ko pa no’n siguro yung takot ‘ko parang mahuhuli ako ng pulis kapag may ginawa akong krimen. Kaya ayoko yung palagay na tatawagin ng titser yung pangalan ko kapag nabasa niya na kasama ako sa listahan ng maiingay para pagsabihan lang sa harapan ng mga kaklase ko.',
        'Basta ang alam ko buong elementary days ko tumatahimik lang talaga ako sa klase habang nililibang ko palagi sarili ko na magdrawing sa padpaper. Madalas kong iguhit Anime style figures, mga bahay, o ‘di kaya may mga tangke at mga sundalong naggi-gyera. Buti pa yung drawings ko, mas mukha pang maingay kaysa sa ‘kin. Ipagpalagay mo na parang may sarili akong mundo n’yan. Feeling ko kasi nakatatak na sa isipan ng mga nanonood at nakikinig na maingay ka at may ginawa kang ‘di kanais-nais tuwing pinagsasabihan ka ng titser. Yung feeling na may mugshot ka bilang maingay at pasaway sa klase.',
        'Nagsasalita naman ako noon kung kailangan o magpapakita ng kooperasyon pagdating sa akademiks. Hindi naman ako masyadong patay na tao kung ‘di rin ako sumasagot ‘pag may kumakausap sa ‘kin. Saglit nga lang. Kaso minsan din ako napintasan na mahina yung boses ko kapag nagsasalita. Kahit maging lider pa ‘ko sa groupings, parang wala pa rin akong silbi. Kapag tahimik, kapag limitado magsalita, kapag mahina ang boses, mawawalan lang ng pasensiya yung mga taong nakapaligid sa ‘kin. Sa bahay naman, mayro’n akong inuuwian na pangalawang tirahan maliban sa sarili kong pamilya. Tiyuhin siya ng mama ko na nakasanayan kong tawaging Daddy Entot. Naging malapit ako sa pamilya nila. Doon na rin kasi ako lumaki. Aminado akong mas spoiled ako sa pamamahay nila kaya hindi ko pinipiling umuwi kila mama noon.',
        'Isa siguro sa mga rason kung bakit tahimik ako kasi kinulong ko sarili ko sa bahay nila Daddy Entot. Hindi ko naranasan makipagsalamuha sa mga bata sa labas habang nagsasaya sa tradisyunal na palarong Pilipino tulad ng tumbang preso, Chinese garter at iba pa. Medyo malayo pa ang loob ko sa mga kapatid at pinsan ko nung mga panahon na ‘yon. Hindi pa kami super close. Kapag nasa bahay ako nila Daddy Entot, sinusulit ko yung mga pagkain na gusto ko at mga laruan na binibigay agad sa akin. Pati wala lang din ako ibang ginawa kung ‘di ilunod ang sarili ko sa panonood, pagdo-drawing, pagsusulat, at pagbabasa. Siguro nagsimula yung pagkatahimik ko rito sa pamamagitan ng pagkatanikala ko sa panlibangan, imbis makipag-ugnayan ako sa mga tao. Nung tumigil na ‘ko makitira nung Grade 4 kila Daddy Entot, hindi ko naman sila kinalimutan bisitahin nang makaramdam na ‘ko ng pagnanais na makasama’t makilala pa ang tunay kong pamilya.',
        'Naging masaya at malapit na ‘ko sa pamilya ko, ang ‘di ko lang masyadong na-open sa kanila ay yung naranasan kong manlumo sa sarili ko sa mga sinasabi ng ibang tao dahil sa pagkatahimik ko sa school. Dumating yung time na minsan rin akong na-bully dahil sa pagiging tahimik ko. Pinagtripan talaga ako nang sobra dahil ayaw akong tantanan ni Ms. Bully-of-the-class at ni Mr. Anime-Guy-Name dahil lang hindi ako nagsasalita. Noong Grade 4, sinisipa pa ni Mr. Anime-Guy-Name yung likod ng upuan ko sa klasrum o kaya ginugulo yung backpack ko para ma-bwiset ako. Achievement kasi sa kanya kapag sinasabihan ko siya na tigilan niya ko. Sige, sabihin natin na nakuha niya nga yung gusto niyang mangyari, eh ano namang ambag no’n sa buhay niya? At least daw may boses akong napatunayan. May boses naman ako, nakakairita na baka sa sobrang rare lang nung mga oras na nagsasalita ako, konklusyon agad sa ‘kin ‘di na marunong magsalita.',
        'Napagtanto ko na kahit ayoko mag-ingay dahil ayoko maging spotlight sa mga tao, nanatili pa rin akong spotlight sa pagiging tahimik ko. Maliban sa mga nambully sa ‘kin, binibigyan talaga ako ng mundo ng taon-taon na mga grupong kekwestyunin yung pagkatahimik ko. Nung hayskul, hindi man nila ako kinukulit sa lebel na pambubully, iba sa kanila sadyang naiirita sa ‘kin o gusto akong i-testing ng parang robot.',
        '“Nagsasalita ka ba talaga?” “May boses ka pala. Akala ko ‘di ka marunong magsalita.” “Nakalimutan kong kasama ka pala namin. ‘Di ka kasi nagsasalita, eh.” “Oh ikaw naman, magrecite ka kaya.” sabi ng kaklase kong pinipilit itaas kamay ko. “Pakilakasan ng boses po, please.” “Bakit ang tahimik mo? Bakit ayaw mong sagutin?”',
        'Ramdam ko sa buto yung mga tingin nila habang kinukwestyon ako o pinagkakatuwaan kahit hindi halata sa ekspresyon ng mukha ko na apektado ako. Pa’no ko nasabi na hindi halata? Tatantanan lang nila ako kung umiyak ako. Dito pa lang sa “Magsalita ka nga, bili.” napaisip ako na mukha ba kong video game na Talking Tom at Talking Angela? Hindi tumitigil yung mga nagiging kaklase ko na tanungin ako sa nakakainsultong tono. Yung iba pinagkakatuwaan pa. Pero hinahayaan ko na lang mangyari. Wala sa isip ko na depensahan pa sarili ko dahil pinili ko pa ring manahimik. Medyo nalulungkot na ‘ko kasi ganito na yung siklo ng buhay ko sa mga nakakabangga kong mga tao taon-taon. Alam ko sa sarili ko na may boses ako na ‘di ko pa magampanan, hindi ko lang maipakita nang bulgaran. Sabi ko sa sarili ko, hindi ako magpapaapekto. Pero dumating sa punto na masasaktan din pala ako kasi bakit napakabig-deal sa mga tao na tahimik tayo? Anong pinagkaiba kung nakakairita rin ang sobrang ingay? Itong mga katanungan sa isip-isip ko ay nasagot ko during-pandemic at post-pandemic habang napagnilayan ko ang mid-highschool ko to college.',
        'Noong Grade 8 ako, naalala ko kada meeting sa Filipino, may individual class participation na dapat ipakita ang acting skills sa pamamagitan ng pagganap ng nais mong maging karakter. Libro man ‘yon o galing sa isang pelikula. Sa isang beses na pagkakataon lang ‘yon, doon ako kumuha ng tsansang magpraktis sa pagsasalita. Kinabisado ko talaga yung script. Kaya kahit baby steps lang, basta may progreso.',
        'Pinili kong gaganapin ‘non ay si Julia Montes mula sa palabas niyang Way Back Home. Nung dumating ang araw na ako na yung magpipresenta, hindi rin ako makapaniwala na naipakita ko yung galit at iyak ko kada bitaw ng linyahan. Nagulat nga yung best friend kong si Lizel nung sa kanya ko pa linalabas yung emosyon ko habang nakatingin sa kanya. Naaalala kong binitiw kong mga salita na tumagos din sa akin ay “Araw-araw ako nakikipagkompetensiya sa multo mo.” Sa palabas kasi, puntirya ng karakter ko ang kapatid niyang naligaw sa ibang pamilya matapos mawala ng ilang taon pero mas nakakakuha ng spotlight sa mga taong mahal nila sa buhay pagkabalik niya. Ang pinagkaibahan sa lagay ko, ang pinupuntirya ko rito ay ang sarili ko na nakikipagkompetensiya ang kahinaan-ng-loob-ko sa naliligaw na lakas-ng-loob-ko na mayroon palang ibubuga; sapat para bigyan pala ako ng spotlight. Tsaka nagsink-in sa ‘kin na gano’n pala ang pakiramdam na ikinalugod ka sa kakayahan mo pagkatapos makatanggap ng palakpakan sa klase at pagpuri ng guro. Nangyari man ‘to, nagamit ko pa rin naman yung acting skills ko nung hayskul hanggang kolehiyo. Ang kinagandahan magmula mangyari ‘yon, nakitaan ko sarili ko na may kakayahan naman pala ako makapag-present sa harap ng klase, pormal man o impormal para sa school projects. Na sa wakas, nagamit ko na rin yung boses kong tinatago.',
        'Medyo napapansin ko na yung pagbabago nitong mga panahon na ‘yon, mga Grade nine hanggang Grade eleven, hindi na ‘ko pinipintasan na mahina yung boses ko o gamitin ko naman daw boses ko sa klase. Ah, magsisinungaling ako kung completely wala nang nakakapagsabi na mahina pa rin boses ko kapag conversational set-up. May mga iilan pa rin na kinukwestyon at pinagkakatuwaan ako. Magsisinungaling din ako ‘pag sinabi kong ‘di siya nakakairita o nakakaapekto sa ‘kin lalo na’t kung may diin yung pagpapapansin nila sa katahimikan ko. Kaso nasa stage na rin ako nito na na-absorb ko na talaga yung sitwasyon ko dahil paulit-ulit na lang yung komento, para siyang routine na mapapasanay ka na lang. Kaya medyo nawawalan na rin ako ng pakialam sa sasabihin nila. Oh siya, basta progress pa rin ‘yon na gusto kong purihin sarili ko. Ang akin lang, iyong pagiging tahimik ay natural na parte na sa pagkatao ko. May malaking pinanghahawakan naman ako na iba ang nananahimik lang sa gumagamit talaga ng boses.',
        'Pre-pandemic noong nakakuha ako ng perfect score sa spoken word poetry na performance task kay Ms. Josef sa 21st Century Literature noong Grade eleven. Binigyang pansin niya pa ‘yong kulay asul kong suot na bestida, eh halos ‘di ko naman ‘yon pinaghandaan. Basta ang naalala ko magsulat daw patungkol sa librong nabasa na For One More Day ni Mitch Albom tsaka ito i-record nang tumutula. Bago pa ko maging isang ganap na makata, ng dahil lang sa isang school project, nabatid ko ang pagkainteres dito upang makalabas sa comfort zone ko at nagsimulang sumali sa mga public open mics noong 2023. Second year college na ‘ko nito, at masasabi kong masarap palang mag-ingay sa malikhaing paraan. Nakakarating pa yung ingay sa tamang kinaroroonan. Yung minsan kong inakala na nakakahiyang mag-ingay, magagawa ko rin pala basta’t nailalahad mo nang maayos at taos-pusong pagnanais na maunawaan ito ng mga tagapakinig. Katulad ni Sir Lito Balderrama, parte siya ng Taguig Heritage Society, na nakilala ko nung nagperform ako ng spoken word sa isang art gallery na ang tawag ay Galerie Du Soleil. Gusto ko lang ipaabot sa kanya ang mensahe na ikinalambot ko ang tulang inalay niya sa ‘kin nang pinost niya ito sa Facebook, matapos niyang hangaan ako sa pagtutula’t nilalaman nito. Snippet nga pala ng nabanggit niya sa isinulat niyang tula: Pagal man ang katawan, diwa ko’y nabuhayan. Batay pa lang dito, hindi ko inaakalang mayro’n at mayro’n talagang lalapit sa ‘kin para sabihing nahaplos ko ang puso nila nang makarating sa kanila ang mga piyesang naisulat ko. Surprisingly, hindi lang siya, kada performance ko, mayro’n nagme-message sa ‘kin o ‘di kaya lalapitan ako para sabihing kahali-halina ang mga nagagawa kong tula at kung pa’no ko ito ihayag sa entablado. Bata man o matanda.',
        'Hindi naman pala ako basta isang tahimik na tao lang. Kung aking babalikan, nakapaglimbag rin ako ng dalawang libro noong 2021 at tuloy-tuloy nakapag-ambag ng mga sulating pangkamalayan o panawagan sa mga kritikal na isyung panlipunan. Ang boses, hindi lang bibig, pero gamit din ang sulating pamamaraan, may kapangyarihan na makaabot ito ng mensahe o inspirasyon sa publiko. Naalala ko halos isang taon bago ako nakatanggap ng acceptance email na isasama sa lathalain yung maikling kwento na isinulat ko para sa panawagan ng antolohiya ukol sa Martial Law. Nagsulat din ako sa gitna ng umaapaw na init nung eleksyon, ang mga nag-iingay sa #NoToJeepneyPhaseout at pagtulong sa donasyon para sa #FreePalestine. Para na rin akong nag-iingay sa pagsusulat. May mga sarili man akong iniisip na priyoridad at tambak na mga gawain para sa pansariling pangarap, walang makakapagharang sa ‘kin na maglaan ng kahit katiting minuto na makaabot ng boses para sa bayan. Tahimik ako pero hindi nananahimik lang.',
        'Isa sa mga magagandang alaala kung bakit ‘di ko naman pala dapat kwestyunin yung sarili kong katahimikan, kung saan palagi kong dadalhin sa puso ko ay yung matagpuan ko ang mga kaibigan ko sa kolehiyo. Oo, lahat sila ay biktima rin ng mga tanong kung bakit ang tahimik ko. Ika nga nila, para raw akong nasa ibang dimensyon. May kakaibang operasyon sa pagkatao ko na sadyang wala akong iniisip at kinikitaan ko lang ng kapayapaan ang sarili ko na tumingin lang sa kawalan. Kahit anong gawin ko kasi na kahit pisikal ko silang kasama, mabilis lang maging malamya yung enerhiya ko o ‘di kaya sadyang wala na akong masabi. Nakikinig naman ako. Nagkakaroon pa rin ng ideyang maglahad ng opinyon para ro’n sa usapan o ‘di kaya magtanong-tanong kapag na-iintriga minsan. Kakaunti man ang paraan ko sa interaksyon, ang mahalaga may pagtugon. May buhay tulad ng taimtim na hampas ng mga alon o pagpatak ng mga ambon.',
        'Siguro pinaglaruan ata ako ng tadhana magmula nung nakilala ko mga kaibigan ko pero in a good way naman siya. Isipin mo, buong buhay ko kinukwestyon at pinagkakatuwaan ako ng ibang tao dahil tahimik ako pero dumating sila sa buhay ko para maging spokespersons ko kapag mayro’n pa ring iba na kinukwestyon ako. Ah, oo nga pala, may pagbabago pala akong napansin nitong kolehiyo kapag kinukwestyon na ‘ko ng iba kapag tahimik ako, hindi na siya pa-insulto o pinagkakatuwaan. Sign of maturity ba ‘to? This time kasi parang nag-aalala lang sa ‘kin yung iba dahil na obserbahan nila na nakakaintriga yung pagkatahimik ko. Nakakatawa rin na may ibang inaamin pa harap-harapan sa ‘kin na nakakatakot yung awra ng pagkatahimik ko. Yung mga panahon na minsan akong natakot magsalita kaya ako nananahimik, nag-iba na yung timeline ng mundo ko na yung mga nakapaligid sa ‘kin yung nakakapagsabi na nakakatakot yung pagiging tahimik ko. Nung nalaman ko ‘to, naramdaman kong kailangan ko lang pala hagkan kung ano ang natural sa ‘kin. Pero mismong mga kaibigan ko na mismo magdedepensa na wala akong malalang problemang dinidibdib at natural na sa ‘kin ang manahimik. Hindi ko naman sila inuutusan, kusa nila ‘yon ginagawa para sa ‘kin.',
        'Masaya rin naman magbonding at makipagkwentuhan, sadyang mabilis akong ma-lowbat. Mukha nga raw akong baterya nila na worth it i-drain. Nag-aani sila ng oras at pasensya para lang masulyapan ang bunga ng mga malalayang salita na lumalabas sa bibig ko. Kaya kay Bianca, Carlo, David, Josine, Kate, Maxene, Shannelle, at Thien, gusto ko lang ipaabot sa inyo ang mensahe na yung pinag-ugatan ko na balewala sa ‘kin ang mangatwiran, maliban sa mga nakaraang taon na pinaghirapan kong buoin ang aking boses, kayong mga kaibigan ko rin ang naging boses ko.',
        'Ang pinaghirapan kong boses at mga ambag ng mga taong mahal ko sa ‘king kaunlaran ay nakumpleto na sa isang magandang larawan nang pagbuo ko ng jigsaw puzzle. Ibuod ko man kung sino ako bilang tahimik na tao, sa kada piraso ng puzzle na ‘to ay mula sa mga taong pinagtitripan ako, sa mga taong kinukwestyon ako sa mga nakakainsultong tono, sa mga taong maliit tingin sa ‘kin dahil mahina boses ko, sa mapagmahal kong mga pamilyang tinanggap ako, sa mga kaibigan kong pinag-aralan ang kabatiran ng katahimikan ko, at sa sarili kong mas nakilala ko pa sa parehas na paraang maingay at tahimik.',
        'Hindi naman talaga okay ang piliing manahimik sa lahat ng aspeto. Ibang-iba ‘to sa pagiging tahimik. Pagkatapos kong maghunos-dili, nakitaan ko ng halaga ang ingay sa gitna ng mga nangangamba at nagtatago sa gulo ng mundo, habang nakitaan ko ng halaga ang katahimikan sa mga gustong makitsismis sa buhay na pinaghirapan ng bawat isang tao. Wala namang kaso magshare ng mga memories o kung ano man gustong i-post sa social media, pero mahirap ilantaran palagi ang buhay natin sa mga tao. May mga ibang nag-iingay naman para sa mga suliraning panlipunan, which is tingin ko, hindi naman ito mali. Pag-isipan lang palagi ang gustong ipahayag sa madla, mahirap nang maapektuhan ang mga grupong magiging biktima sa nakakalat na fake news. Kung walang pake sa lipunan, ibig sabihin lang din no’n na wala kang pake na parehas magiging dehado ang kalalagyan mo at ng ibang tao sa hinaharap. Marami-rami na rin sa ‘tin ang mga natuto sa konseptong kaingayan at katahimikan. Sapagkat may inaayon ang pinipiling mag-ingay at may inaayon ang pinipiling manahimik. Subalit may hangganan din ang pagiging maingay at may hangganan ang pagiging tahimik.',
        '“Ang tahimik mo. Mag-ingay ka nga!”',
        'Oh, natamaan ka ba? Biglang nagpaputok ng party popper sa harapan mo ng mga retratong naglalarawan sa mga nagsisigaw ng tulong sa gitna ng gyera sa kabilang panig ng mundo, mga nawalan ng pamumuhay dulot ng matitinding sakuna, mga pagpapatay ng mga inosenteng mamamayan, mga alipin ng sistema, mga gumagawa ng labag sa moralidad pero ikaw pilit na nagbulag-bulagan, at iba’t iba pang asta na ‘di nakakatulong sa kapwa. Alam mo naman pala. “Bakit ‘di ka nag-ingay!”',
        '“Ang ingay mo. Manahimik ka nga!”',
        'Oh, isa ka pa, natamaan ka rin ba? Biglang nagpaputok din ng isa pang party popper sa harapan mo ng mga retratong naglalarawan sa mga pagkukumpara’t panghuhusga mo ng buhay ng mga tao, pagkakalat ng mga nudes o fake news o walang hintong paninira sa iba, mangcancel lang nang mangcancel ng tao sa pagkakamaling ‘di naman nagpapalinaw ito sa buong pagkatao nila. Tapos tuloy ka pa rin sa pagsatsat. “Bakit ‘di ka kaya manahimik!”',
        '‘Yong unang pahayag masasabi kong matatamaan ako kung dala-dala ko pa rin hanggang ngayon ang takot ko na hindi gamitin boses ko nung bata ako. Mapapansin natin na wala namang problema ang kaingayan at katahimikan kung hindi naman ito mapagsamantala, insensitive, o mabagsik. Oh siya, ang daldal ko na masyado rito. Hay self, napaka-ingay mo talaga! Siguro kung pinili kong manahimik habang-buhay, ‘di ko lubusan mamahalin ang sarili ko kung mayroon naman pala akong saysay.'
      ]
    },
    {type:'poem', title:'Of One’s Own Volition',
      stanzas:[
        [ {t:'Observe his upright stance,',i:0}, {t:'with firmness, he holds the rifle.',i:0},
          {t:'While the bruise and dirt on his hands,',i:0}, {t:'he pledged not to stumble.',i:0} ],
        [ {t:'The proof is in his eyes,',i:0}, {t:'which a weeping soul,',i:0},
          {t:'gambles for billion lives,',i:0}, {t:'just to seal his golden role.',i:0} ],
        [ {t:'His dream yells, “Service!”',i:0}, {t:'It is not a mere mission.',i:0},
          {t:'Recognition is worthless',i:0}, {t:'for a true hero’s edition.',i:0} ],
        [ {t:'Whether for the sake of breaking roulettes,',i:0}, {t:'or the freedom we call for,',i:0},
          {t:'once they’ll catch some bullets,',i:0}, {t:'they’ve cleared a patriot’s score.',i:0} ]
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
      label:'Instagram',
      embed:'<iframe src="https://www.instagram.com/p/C-PEYSCvdo2/embed" width="340" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>'
    },
    {
      label:'Instagram',
      embed:'<iframe src="https://www.instagram.com/p/Csf3HrfJ8X8/embed" width="340" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>'
    }
  ]
}

};
