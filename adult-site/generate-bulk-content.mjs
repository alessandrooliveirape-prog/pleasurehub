/* ============================================
   PLEASUREHUB - Bulk Content Generator
   Generates 120+ videos with realistic metadata in English
   Usage: node generate-bulk-content.mjs
   ============================================ */

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// === CONFIGURATION ===
const TOTAL_VIDEOS = 120;  // Total number of videos
const OUTPUT_FILE = join(__dirname, 'js', 'data.js');

// === CATEGORIES ===
const CATEGORIES = [
  { id: 'milf', name: 'MILF', emoji: '🔥', color: '#ff2d5c' },
  { id: 'latina', name: 'Latina', emoji: '💃', color: '#e84393' },
  { id: 'amateur', name: 'Amateur', emoji: '📱', color: '#6c5ce7' },
  { id: 'hentai', name: 'Hentai', emoji: '🎨', color: '#fd79a8' },
  { id: 'lesbian', name: 'Lesbians', emoji: '💋', color: '#e17055' },
  { id: 'brazilian', name: 'Brazilian', emoji: '🇧🇷', color: '#00b894' },
  { id: 'anal', name: 'Anal', emoji: '🔞', color: '#d63031' },
  { id: 'teen', name: 'Teens (18+)', emoji: '🌸', color: '#e84393' },
  { id: 'gangbang', name: 'Gang Bang', emoji: '🔥', color: '#e17055' },
  { id: 'solo', name: 'Solo / Masturbation', emoji: '✊', color: '#6c5ce7' },
  { id: 'couple', name: 'Amateur Couples', emoji: '💑', color: '#00b894' },
  { id: 'fetish', name: 'Fetish', emoji: '⛓️', color: '#2d3436' },
  { id: 'orgy', name: 'Orgy', emoji: '🎉', color: '#e17055' },
  { id: 'trans', name: 'Trans', emoji: '⚧️', color: '#a29bfe' },
  { id: 'interracial', name: 'Interracial', emoji: '🌍', color: '#00cec9' },
  { id: 'cosplay', name: 'Cosplay', emoji: '🎭', color: '#fd79a8' },
];

// === TITLE GENERATORS ===
const TITLES = {
  milf: [
    'Hot MILF neighbor invited me for coffee',
    'Fit MILF from work finally gave in - Part 2',
    'MILF teacher after private lesson - FULL',
    'Mature MILF teaching tantric massage',
    'Caught my MILF stepmom in the shower - Leaked',
    'Hottest Brazilian OnlyFans MILF - Full Video',
    'Thick MILF shaking in black lingerie - HD',
    'Sweet neighborhood MILF mom - Caught on camera',
    'Horny MILF after divorce - 40 years old',
    'Hot gym MILF - heavy workout - 4K',
    'MILF at motel with lover - full scene',
    'MILF stepmom catches stepson red-handed',
    'Thick MILF shaking and riding hard',
    'I will teach you everything says the hot MILF',
    'Hottest MILF in town - FULL 4K',
    'Hot blonde MILF in secret - caught on tape',
    'Hot exhibitionist MILF at the beach',
    'Horny mature OnlyFans MILF - Full Leak',
    'Extremely hot Brazilian MILF - Watch now',
    'Two hot MILFs with one lucky guy',
  ],
  latina: [
    'Hot Latina dancing - OnlyFans leaked',
    'Sexy Spanish girl in the car - beach trip',
    'Hottest Colombian girl on TikTok - FULL',
    'Mexican beauty shaking it slow in red dress',
    'Thick Latina in motel - full night recorded',
    'Venezuelan beauty doing explicit striptease',
    'Argentine OnlyFans creator - best of 2025',
    'Tattooed Latina giving sensual dance lesson',
    'Cuban babe at nude beach - uncensored',
    'Puerto Rican fire - best amateur scene',
    'Hot Latina from Tinder - real date',
    'Colombian babe dancing down to the floor',
    'Spanish girl dancing sexy - full video',
    'Thick Mexican on OnlyFans - leaked full',
    'Tattooed Latina having wild sex - amateur',
    'Argentine girl in motel - wild night',
    'Venezuelan model - best Latin OnlyFans',
    'Cuban fire at the beach - hot scenes',
    'Panamanian girl shaking it hard',
    'Chilean OnlyFans creator - full HD video',
  ],
  amateur: [
    'Amateur couple recording for the first time',
    'Amateur webcam - teen showing off',
    'Leaked: Best moments of Brazilian amateur OnlyFans',
    'Amateur secret tape - full homemade video',
    'Exhibitionism on the balcony - busy street',
    'Chubby couple having wild sex - full video',
    'Amateur in nature - sex in the woods',
    'Girlfriend recording boyfriend secretly - spycam',
    'Best amateur video of 2025',
    'Hot neighbor through the window - filmed from afar',
    'Amateur couple recording in the bedroom - full',
    'Amateur webcam show - private performance',
    'Leaked: Couple recording - full 4K',
    'Amateur motel tape - full recording',
    'Amateur couple in the kitchen - caught in action',
    'Exhibitionist in the car - filmed in secret',
    'Best amateur compilation - 2025 release',
    'Brazilian amateur - full homemade sex',
    'Amateur couple naked at home - full video',
    'First time recording - amateur couple',
  ],
  hentai: [
    '3D Hentai Thick MILF - Full Animation HD',
    'Hentai - Cyborg Escort Girl - Episode 4',
    'Hentai Futanari - Best 2025 Compilation',
    'Hentai High School Elite - Hot Scenes',
    'Anime Hentai - Sexy Shinobi vs Monster',
    'Hentai Harem - One Night with 5 Girls',
    'Hentai Tentacle - Full Dubbed Version',
    'Hentai Yuri - Animated Lesbian Romance',
    'Hentai - Horny Little Sister - Episode 2',
    'Hentai Neighbor MILF - 4K HDR Animation',
    '3D Hentai - Fighter Girls - Full Video',
    'Hentai Futanari - The Revenge - Episode 1',
    'Hentai School - Horny Girls - 4K HDR',
    'Hentai Harem - All For Me - Full Episode',
    'Hentai Tentacle 2 - The Invasion - Dubbed',
    'Hentai Yuri - Forbidden Passion - Animated',
    'Hentai Shinobi - Dangerous Mission - Full',
    'Hentai MILF - Horny Neighbor - Part 3',
    '3D Hentai Thick Girl - Premium 4K Animation',
    'Hentai Futanari Collection - 2 Hour Special',
  ],
  lesbian: [
    'Two hot blondes in the shower - full HD',
    'Lesbians meeting on Tinder - real date',
    'Tantric massage between girlfriends - full video',
    'Brunette and blonde at motel - best lesbian scene',
    'Brazilian lesbians - filming for OnlyFans',
    'Gym class - personal trainer and client - hot scenes',
    'Best friends - discovering together - full video',
    'Tattooed lesbians - hot photoshoot',
    'Escort girls - meeting between friends',
    'Romantic lesbians - full night recorded',
    'Two hot friends having fun at home',
    'Tattooed Brazilian lesbians - full 4K',
    'Massage between girlfriends - full HD video',
    'Hot blondes having sex - lesbian scene',
    'Hot brunettes having fun - full video',
    'Lesbians in the shower - hot scenes HD',
    'Intimate friends - special night - full video',
    'Romantic lesbians - love between women',
    'Two friends playing with a vibrator - full',
    'Lesbians loving each other - full film HD',
  ],
  brazilian: [
    'Hot Brazilian girl shaking at funk party - leaked',
    'Blonde from OnlyFans leaked - full updated',
    'Thick Brazilian girl in secret - amateur recording',
    'Big brunette from Tinder - real date recorded',
    'Horny Brazilian - best Brazilian OnlyFans 2025',
    'Paulista babe at nude beach - uncensored',
    'Carioca girl dancing - best of Brazil',
    'Tattooed Mineira from OnlyFans - full HD',
    'Hot Gaúcha in the countryside - amateur video',
    'Brazilian girl in group sex - 3 guys 1 girl',
    'Hot blonde from OnlyFans - full leak',
    'Brazilian girl dancing Rio funk - HD',
    'Thick Paulista in secret - full video',
    'Carioca babe having sex - homemade amateur',
    'Horny Mineira on OnlyFans - full HD',
    'Baiana babe shaking it hard - full video',
    'Gaúcha girl in the field - hot scenes',
    'Hot Brazilian from Tinder - real encounter',
    'Carioca at nude beach - caught on tape',
    'Horny Brazilian in motel - wild night',
  ],
  anal: [
    'Hot Brazilian taking it in the ass - full HD',
    'Amateur anal - first time taking it deep',
    'Hot brunette riding the dick - anal 4K',
    'Sensual anal with horny Brazilian - full video',
    'Blonde taking it in the ass at motel - full scene',
    'Anal just the tip - hot Brazilian girl',
    'Taking it deep for boyfriend - homemade anal',
    'Wild anal - thick girl riding on dick',
    'Tight ass - best Brazilian anal of 2025',
    'Amateur anal full video - homemade recording',
    'Brazilian girl trying anal for the first time',
    'Hot anal - thick brunette at motel',
    'Anal in secret - amateur recording',
    'Tight ass riding and sitting deep',
    'Anal 4K - extremely hot Brazilian girl',
    'Blonde taking it deep - full HD video',
    'Wild anal - full homemade sex',
    'Tight Brazilian ass - best scene of 2025',
    'Brunette taking anal - amateur film',
    'Anal just the tip - full 4K HDR',
  ],
  teen: [
    'Hot 18yo teen - first time recording',
    'OnlyFans teen model - full 4K HD',
    'Young babe having fun - amateur tape',
    'Teen shaking it hard - leaked online',
    'First time of the teen - recorded full',
    'Hot teen from Tinder - real date',
    '18yo young model - OnlyFans full video',
    'Horny teen - best content of 2025',
    'Hot teens having fun together',
    'First sex tape - 18 year old teen',
    'Hot teen from OnlyFans - leaked full',
    'Young brunette beauty - full video',
    'Teen shaking - leaked on the internet',
    'First experiences - 18yo teen',
    'Hot blonde teen - full HD',
    'Young and horny - secret tape full',
    'OnlyFans teen - full scene',
    'Twin teens having fun - full video',
    'Tattooed brunette teen - 4K full',
    'Best teens of 2025 - compilation',
  ],
  gangbang: [
    'Brazilian gangbang - 3 guys 1 girl',
    'Full swinger orgy - 5 guys 1 hot girl',
    'Amateur gangbang - Brazilian girl in group',
    'Full group sex - homemade orgy',
    'OnlyFans gangbang - hot girl in group',
    '3 guys 1 girl - amateur full video',
    'Wild gangbang - 4 guys 1 girl',
    'Secret gangbang - full group tape',
    'Brazilian gangbang 4K - full video',
    'Hot girl in gangbang - part 1',
    'Amateur gangbang full - HD',
    '5 guys 1 girl - at motel full video',
    'Homemade swinger party - full group action',
    'OnlyFans gangbang - leaked full video',
    'Brazilian girl in group sex - gangbang',
    'Full gangbang - amateur recording',
    '3 guys 1 hot girl - full night action',
    'Orgy with 4 couples - full swinger party',
    'Gangbang 4K - best group scene',
    'Brazilian girl in gangbang - full HD',
  ],
  solo: [
    'Hot masturbation - teen touching herself',
    'Solo in the bedroom - private webcam',
    'Brazilian girl cumming alone - full video',
    'Masturbation with toys - full HD',
    'Solo on webcam - hot teen model',
    'Touching herself - full video recording',
    'Female masturbation - full orgasm',
    'Sex toys - teen having fun alone',
    'Solo fun - Brazilian girl in bedroom',
    'Cumming alone - best solo scene',
    'Solo in the bathtub - relaxing full video',
    'Masturbation with vibrator - 4K full',
    'Touching herself on bed - full video',
    'Webcam solo - extremely hot teen',
    'Brazilian girl masturbating - full HD',
    'Solo action - sex toys 4K full',
    'Cumming for boyfriend - full video',
    'Hot masturbation - full video scene',
    'Solo in the shower - hot scenes HD',
    'Having fun alone - amateur full video',
  ],
  couple: [
    'Couple having hot sex - full amateur tape',
    'Girlfriend and boyfriend recording - hot bed',
    'Couple in motel - full love night',
    'Sex of passionate couple - HD full video',
    'Brazilian couple having sex - homemade tape',
    'Secret lovers - full recording',
    'Hot couple having sex - intimate scenes',
    'Husband and wife - wild night HD',
    'Amateur couple having sex - filmed secretly',
    'Love story - couple sex full video',
    'Couple in bed - hot sex full tape',
    'Passionate lovers - full night recording',
    'Secret couple - filmed in the bedroom',
    'Brazilian couple sex - HD full video',
    'Hot amateur couple - full 4K video',
    'Husband and wife - love night HD',
    'Hot lovers - full sex tape recorded',
    'Girlfriend and boyfriend - homemade sex',
    'Couple in motel - full scenes HD',
    'Love and lust - couple full 4K',
  ],
  fetish: [
    'BDSM full session - handcuffs and leather',
    'Brazilian fetish - hot dominatrix',
    'Handcuffs and whip - BDSM session',
    'Amateur fetish - BDSM couple full video',
    'Female domination - Brazilian mistress rules',
    'Fetish with handcuffs - amateur full',
    'Hot BDSM - fetish couple',
    'Total submission - full session HD',
    'Brazilian fetish - handcuffs and blindfolds',
    'Leather and heels - full dominatrix session',
    'Amateur BDSM - fetish couple 4K',
    'Rope fetish - full shibari session',
    'Female domination - full video session',
    'Handcuffs and whip - BDSM mistress',
    'Fetish in basement - full couple tape',
    'Premium BDSM - Brazilian dominatrix',
    'Voluntary submission - full HD video',
    'Footwear fetish - heels and stockings',
    'Brazilian shibari - rope action full',
    'BDSM 4K - best fetish session',
  ],
  orgy: [
    'Full orgy with 4 couples',
    'Brazilian amateur orgy - full group tape',
    'Orgy at motel - 4 couples swapping',
    'Wild orgy - 10 people having fun',
    'Homemade swinger party - friends with benefits',
    'Amateur orgy - full video HD',
    'Brazilian orgy - 3 couples swapping',
    'Orgy with 8 people - wild night',
    'Secret swinger orgy - full group tape',
    'Wild orgy - full 4K HDR video',
    'Swinger couples - partner swapping',
    'Brazilian amateur orgy - filmed live',
    'Full orgy - 5 couples at motel',
    'Orgy with 12 people - wild night out',
    'Orgy in the wild - nature full video',
    'Full orgy - couple swap HD',
    'Amateur orgy - filmed full 4K',
    'Orgy by the pool - summer special',
    'Brazilian orgy - full HD video',
    'Night of orgy - 4 couples full tape',
  ],
  trans: [
    'Hot trans girl shaking - full HD',
    'Hottest Brazilian shemale on OnlyFans',
    'Trans woman in motel - full 4K',
    'Thick trans girl shaking and sitting hard',
    'Sexy shemale - best content of 2025',
    'Brazilian trans - full video HD',
    'OnlyFans shemale - leaked full video',
    'Hot trans model - full hot scenes',
    'Tattooed trans woman - amateur full video',
    'Horny shemale in secret - full tape',
    'Hot trans brunette - full HD video',
    'Brazilian shemale - full scenes',
    'Trans in motel - full night 4K',
    'Hot shemale shaking - full video',
    'Thick trans woman - OnlyFans leaked',
    'Hot trans blonde - full HD video',
    'Shemale from Tinder - real encounter',
    'Extremely hot trans - full 4K video',
    'Tattooed shemale - filmed full video',
    'Best Brazilian trans - compilation',
  ],
  interracial: [
    'Hot Brazilian girl with foreigner - full HD',
    'Amateur interracial - brunette with blonde guy',
    'Hot foreigner with Brazilian girl - 4K full',
    'Interracial in motel - full video tape',
    'Brazilian girl with foreigner - hot scenes',
    'Amateur interracial - mixed couple HD',
    'Hot brunette with blonde - full video',
    'Foreigner fucks Brazilian - full 4K video',
    'Interracial in secret - amateur full video',
    'Interracial couple having sex - full video',
    'Brazilian and foreigner - full night HD',
    'Interracial at the beach - couple full video',
    'Brunette and blonde guy having sex - filmed',
    'Hot foreigner with brunette - 4K full video',
    'Mixed couple amateur - full HD video',
    'Brazilian girl with American guy - full video',
    'Interracial action - hot scenes',
    'Hot brunette with foreigner at motel',
    'Mixed couple having sex - full HD video',
    'Best Brazilian interracial of 2025',
  ],
  cosplay: [
    'Adult cosplay - anime character full scene',
    'Sexy costume - hot nurse fantasy',
    'Cosplay OnlyFans - game character HD',
    'Full costume play - hot police officer',
    'Brazilian cosplay - famous character',
    'Sexy fantasy - student full scene',
    'Cosplay 4K - anime character full video',
    'Maid costume erotica - hot scenes',
    'Amateur cosplay - dressed up couple HD',
    'Best adult cosplay of 2025 - full video',
    'Cosplay OnlyFans - anime character 4K',
    'Sexy fantasy erotica - hot teacher',
    'Brazilian cosplay - superhero character',
    'Full costume play - hot devil girl',
    'Cosplay 4K - game character full video',
    'Nurse costume - full scene play',
    'Amateur cosplay - anime couple HD',
    'Sexy fantasy - bunny girl full scene',
    'Cosplay OnlyFans - best costume 4K',
    'Anime character cosplay - full video',
  ],
};

// === DURATION POOL ===
const DURATIONS = [
  '12:34', '18:22', '25:10', '08:45', '32:15',
  '15:40', '22:08', '45:30', '10:55', '60:00',
  '07:22', '28:45', '35:20', '14:18', '42:07',
  '06:55', '19:33', '51:12', '09:47', '38:40',
  '05:30', '16:15', '27:50', '11:22', '33:45',
  '09:10', '20:00', '40:25', '13:33', '55:30',
  '04:45', '17:50', '30:10', '14:55', '48:20',
  '08:22', '21:05', '36:40', '10:10', '52:15',
  '06:30', '24:20', '39:10', '12:45', '58:00',
  '07:15', '18:45', '29:30', '15:00', '44:50',
];

// === VIEWS POOL ===
const VIEWS = [
  '158K', '234K', '67K', '892K', '1.2M', '445K',
  '78K', '523K', '987K', '345K', '156K', '678K',
  '2.1M', '89K', '312K', '567K', '123K', '789K',
  '234K', '456K', '432K', '876K', '543K', '1.5M',
  '210K', '654K', '321K', '789K', '147K', '963K',
  '1.8M', '369K', '741K', '852K', '159K', '753K',
  '456K', '321K', '654K', '987K', '741K', '852K',
  '159K', '753K', '951K', '357K', '168K', '349K',
  '215K', '673K', '892K', '437K', '561K', '784K',
  '324K', '698K', '145K', '823K', '476K', '539K',
  '111K', '222K', '333K', '444K', '555K', '666K',
  '777K', '888K', '999K', '111K', '222K', '333K',
];

// === QUALITIES ===
const QUALITIES = ['HD', 'Full HD', '4K', 'Full HD', 'HD', '4K'];

// === TAGS ===
const TAG_POOLS = [
  ['brazilian', 'hot', 'onlyfans', 'leaked'],
  ['amateur', 'homemade', 'couple', 'bedroom'],
  ['milf', 'mature', 'hot', 'fit'],
  ['teen', '18', 'first time', 'amateur'],
  ['latina', 'hot', 'dancing', 'sensual'],
  ['hentai', 'animated', '3d', 'anime'],
  ['lesbian', 'girls', 'romantic', 'amateur'],
  ['brazilian', 'thick', 'onlyfans', 'leaked'],
  ['sex', 'couple', 'amateur', 'homemade'],
  ['orgy', 'group sex', 'swinger', 'motel'],
  ['anal', 'tight ass', 'deep anal', 'riding'],
  ['trans', 'shemale', 'hot', 'brazilian'],
  ['fetish', 'bdsm', 'handcuffs', 'leather'],
  ['cosplay', 'costume', 'anime', 'game'],
  ['interracial', 'foreigner', 'brazilian', 'mixed'],
  ['solo', 'masturbation', 'webcam', 'toys'],
];

// === EMBED URL PATTERNS BY PLATFORM ===
const EMBED_PATTERNS = [
  (id) => `https://www.xvideos.com/embedframe/xv${id}`,
  (id) => `https://www.pornhub.com/embed/ph${id}`,
  (id) => `https://www.xnxx.com/embedframe/xn${id}`,
  (id) => `https://xhamster.com/embed/xh_video_${id}`,
  (id) => `https://www.redtube.com/embed/rt${id}`,
];

// === MAIN GENERATOR ===
function generateVideos(count = TOTAL_VIDEOS) {
  const videos = [];
  const catIds = CATEGORIES.map(c => c.id);
  let id = 1;

  const videosPerCategory = Math.ceil(count / catIds.length);

  catIds.forEach((catId) => {
    const titles = TITLES[catId] || [];
    for (let i = 0; i < videosPerCategory && id <= count; i++) {
      const titleIdx = i % titles.length;
      const hue = (id * 137.508) % 360;
      const embedFn = EMBED_PATTERNS[id % EMBED_PATTERNS.length];
      const videoId = String(id).padStart(6, '0');

      videos.push({
        id: id,
        title: titles[titleIdx],
        category: catId,
        duration: DURATIONS[Math.floor(Math.random() * DURATIONS.length)],
        views: VIEWS[Math.floor(Math.random() * VIEWS.length)],
        quality: QUALITIES[Math.floor(Math.random() * QUALITIES.length)],
        tags: TAG_POOLS[Math.floor(Math.random() * TAG_POOLS.length)],
        likes: Math.floor(Math.random() * 20000) + 500,
        dislikes: Math.floor(Math.random() * 600) + 5,
        date: generateRandomDate(),
        gradient: `linear-gradient(135deg, hsl(${hue}, 70%, 30%), hsl(${(hue + 40) % 360}, 60%, 20%))`,
        embedUrl: embedFn(videoId),
      });
      id++;
    }
  });

  console.log(`✅ Generated ${videos.length} videos in ${catIds.length} categories`);
  return videos;
}

function generateRandomDate() {
  const month = Math.floor(Math.random() * 5) + 1;
  const day = Math.floor(Math.random() * 28) + 1;
  return `2025-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

// === GENERATE DATA.JS ===
function generateDataJS(videos) {
  const counts = {};
  videos.forEach(v => {
    counts[v.category] = (counts[v.category] || 0) + 1;
  });

  const categoriesData = CATEGORIES.map((cat, idx) =>
    `    { id: '${cat.id}', name: '${cat.name}', emoji: '${cat.emoji}', count: ${counts[cat.id] || 0}, color: '${cat.color}' }`
  ).join(',\n');

  let formatted = JSON.stringify(videos, null, 2);
  
  formatted = formatted
    .replace(/"id": /g, 'id: ')
    .replace(/"title": /g, 'title: ')
    .replace(/"category": /g, 'category: ')
    .replace(/"duration": /g, 'duration: ')
    .replace(/"views": /g, 'views: ')
    .replace(/"quality": /g, 'quality: ')
    .replace(/"tags": /g, 'tags: ')
    .replace(/"likes": /g, 'likes: ')
    .replace(/"dislikes": /g, 'dislikes: ')
    .replace(/"date": /g, 'date: ')
    .replace(/"gradient": /g, 'gradient: ')
    .replace(/"embedUrl": /g, 'embedUrl: ')
    ;

  const template = `/* ============================================
   PLEASUREHUB - Content Data
   Automatically generated on ${new Date().toISOString().split('T')[0]}
   Total: ${videos.length} videos in ${CATEGORIES.length} categories
   ============================================ */

const SITE_DATA = {
  categories: [
${categoriesData}
  ],

  videos: ${formatted},

  getVideosByCategory(categoryId) {
    if (!categoryId || categoryId === 'all') return this.videos;
    return this.videos.filter(v => v.category === categoryId);
  },

  getVideoById(id) {
    return this.videos.find(v => v.id === id);
  },

  getRelatedVideos(categoryId, excludeId, limit = 8) {
    return this.videos
      .filter(v => v.category === categoryId && v.id !== excludeId)
      .slice(0, limit);
  },

  getTrending(limit = 12) {
    return [...this.videos].sort((a, b) => {
      const viewsA = parseInt(String(a.views).replace(/[KM]/g, m => m === 'K' ? '000' : '000000'));
      const viewsB = parseInt(String(b.views).replace(/[KM]/g, m => m === 'K' ? '000' : '000000'));
      return viewsB - viewsA;
    }).slice(0, limit);
  },

  getLatest(limit = 8) {
    return this.videos.slice(0, limit);
  }
};
`;

  return template;
}

// === EXECUTE ===
console.log('🚀 PLEASUREHUB - Bulk Content Generator (English)\n');
console.log(`📊 Generating ${TOTAL_VIDEOS} videos in ${CATEGORIES.length} categories...\n`);

const videos = generateVideos(TOTAL_VIDEOS);
const output = generateDataJS(videos);

writeFileSync(OUTPUT_FILE, output, 'utf-8');

// Print summary
console.log('\n📁 File generated: js/data.js');
console.log('\n📋 SUMMARY:');
const catCount = {};
videos.forEach(v => {
  catCount[v.category] = (catCount[v.category] || 0) + 1;
});
Object.entries(catCount).forEach(([cat, count]) => {
  const catInfo = CATEGORIES.find(c => c.id === cat);
  console.log(`   ${catInfo ? catInfo.emoji : '•'} ${catInfo ? catInfo.name : cat}: ${count} videos`);
});
console.log(`\n📊 Total: ${videos.length} videos`);
console.log('\n✅ Generation complete!');
console.log('\n💡 TIP: Replace the embedUrls in data.js with real URLs using the tool admin/import.html');
