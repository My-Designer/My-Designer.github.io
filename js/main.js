/* ։ː• */

/* Lost in Space:
&emsp13; (sticks with previous line in case of line break)
space (regular, next separator may be begin of next line)
separator symbol
no-break space, price. narrow no-break space, joiner
no-break space, action with each space replaced by no-break space
*/

const g = {};


function mergeDeep(source, target) {
  if (!target) target = {};
  if (typeof source !== 'object' || Array.isArray(source)) target = source;
  else for (const key in source) target[key] = mergeDeep(source[key], target[key]);
  return target;
}

const offers = {
  goal: {
    head: 'Go for the Goal',
    20: 'Drop one Strap',
    50: 'Drop other Strap',
    90: 'Hands up!',
  },
  dice: {
    head: 'Tip 9 or type /dice',
    2: 'Strip Dance',
    3: 'Flash Tits',
    4: 'Blow Kiss',
    5: 'Lick Finger',
    6: 'Brush Bush',
  },
  menu: {
    head: 'Tip for Tasks',
    2: 'PM',
    5: 'Blow Kiss',
    17: 'Turn around',
    22: 'Wet my Shirt',
    27: 'Get out of these damp Clothes',
    33: 'Spank that naughty Ass',
  },
  fans: {
    head: 'Fan Club Exlusive',
    13: 'Cut my Shirt',
    23: 'Shower without any Clothes',
    32: 'Shower with all my Clothes',
    34: 'Take off all my Clothes and wash them',
  },
};

class Style {
  constructor(all) {
    this.all = all;
  }
  apply() {
    for (const duty in offers) {
      const source = this.all[duty];
      const target = offers[duty];
      target.s = source.s;
      target.f = source.f;
      target.n = source.n;
      target.w = source.w || 'normal';
    }
    g.css = 'p{margin: 0; margin-top: .3em; padding: 0;}'
    + '\n.price::before {content: " "}'
    + '\n.price::after {content: " ' + (this.all.j||'➜') + '"}'
    + '\n.action::before {content: " "}'
    + '\n#dice .price {display: none}'
  }
}

g.s0 = new Style({
  goal: {s: '🚩', f: '#777', n:true},
  menu: {s: '🌹', f: '#f90'},
  fans: {s: '🐸', f: '#090'},
  dice: {s: '🎲', f: '#b3d'},
});

g.s1 = new Style({ j: '•',
  goal: {s: '🏁', f: '#aaa', n:true},
  menu: {s: '🐍', f: '#f7b'},
  fans: {s: '🐞', f: '#090'},
  dice: {s: '🎲', f: '#0ad'},
});

g.s2 = new Style({ j: '։',
  goal: {s: '🚩', f: '#555'},
  menu: {s: '🌸', f: '#0ad'},
  fans: {s: '🍁', f: '#090'},
  dice: {s: '🎲', f: '#a70', n:true},
});

g.s3 = new Style({ j: 'ː',
  goal: {s: '🏁', f: '#bbb'},
  menu: {s: '🌸', f: '#0ad'},
  fans: {s: '🍁', f: '#090'},
  dice: {s: '🎲', f: '#a70'},
});

g.s4 = new Style({
  goal: {s: '🚩', f: '#666', n:true},
  menu: {s: '🌵', f: '#0bd', n:true},
  fans: {s: '💎', f: '#090', n:true},
  dice: {s: '🎲', f: '#c90'},
});

function setCSS(s) {
  g.sheet.innerHTML =  s;
}

function initStyles() {
  g.sheet = document.createElement('style')
  document.body.appendChild(g.sheet);
}

function setStyles(y = g.s0) {
  y.apply();
  let r = g.css;
  for (const duty in offers) {
    const {s, f, w, n} = offers[duty];
    const b = n ? '\\A' : '  ';
    r += ''
    + `\n #${duty} .symbol::before {content: "${b}"; white-space: pre}`
    + `\n #${duty} .symbol::after {content: "${s}"}`
    + `\n #${duty} {color: ${f}}`;
  }
  setCSS(r);
}

const nbsp = s => s.replace(/ /g,' ');
function prepareText() {
  for (const off in offers) {
    const offer = offers[key];
    for (const key in offer) offer[key] = nbsp(offer[key])
  }
}
function oneOffer(name) {
  const offer = offers[name];
  let s = `<p><span class="offer" id="${name}">Notice: `+offer.head;
  for (const key in offer) if (+key>0) {
    const val = offer[key].replaceAll(' ',' ');
    s += `<span class="symbol"><wbr></span><span class="price">${+key}</span><span class="action">${val}</span>`
  }
  return s + '</span></p>';
}
function setOffers() {
  let inner = '';
  for (const name in offers) inner += oneOffer(name);
  document.getElementById('offers').innerHTML = inner;
  return;
  // StyleSheet.insertRule(".symbol::before {content: '⬇️'}");
}
