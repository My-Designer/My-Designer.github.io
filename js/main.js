/* ᛬፡։ː• */

const g = {};


function mergeDeep(source, target) {
  if (!target) target = {};
  if (typeof source !== 'object' || Array.isArray(source)) target = source;
  else for (const key in source) target[key] = mergeDeep(source[key], target[key]);
  return target;
}

const offers = {
  menu: {
    head: 'Tip for Tasks',
    2: 'PM',
    5: 'Blow Kiss',
    12: 'Wet my Shirt',
    21: 'Get out of these damp Clothes',
  },
  fans: {
    head: 'Fan Club Exlusive',
    13: 'Cut my Shirt',
    23: 'Shower without any Clothes',
    33: 'Shower with all my Clothes',
    37: 'Take off all my Clothes and wash them',
  },
  dice: {
    head: 'Tip 9 to roll Dice',
    2: 'Strip Dance',
    3: 'Flash Tits',
    4: 'Blow Kiss',
    5: 'Lick Finger',
    6: 'Brush Bush',
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
      target.w = source.w || 'normal';
    }
    const sep = this.all.n ? '\\A' : '  ';
    g.css = ''
    + '\n.symbol::before {content: "'+sep+'"; white-space: pre}'
    + '\n.price::before {content: " "}'
    + '\n.price::after {content: " ' + (this.all.j||'➜') + '"}'
    + '\n.action::before {content: " "}'
    + '\n#dice .price {display: none}'
  }
}

g.s0 = new Style({
  menu: {s: '🌹', f: '#ee5'},
  fans: {s: '🐸', f: '#090'},
  dice: {s: '🎲', f: '#b3d'},
});

g.s1 = new Style({
  menu: {s: '🐍', f: '#f7b'},
  fans: {s: '🐞', f: '#090'},
  dice: {s: '🎲', f: '#0ff'},
});

g.s2 = new Style({
  menu: {s: '🌸', f: '#0bd'},
  fans: {s: '🍁', f: '#090'},
  dice: {s: '🎲', f: '#ff0'},
});

g.s3 = new Style({
  menu: {s: '🌵', f: '#0bd'},
  fans: {s: '🏰', f: '#090'},
  dice: {s: '🎲', f: '#ff0'},
  n: true
});

function setCSS(s) {
  g.sheet.innerHTML =  s;
}

function setAfter(s) {
  setCSS( ''
//    +'\np::after {content: "hup'+s+'"}'
    +'\n.symbol::after {content: "hup'+s+'"}'
  );
}

function initStyles() {
  g.sheet = document.createElement('style')
  document.body.appendChild(g.sheet);
}

function setStyles(y = g.s0) {
  y.apply();
  let r = g.css;
  for (const duty in offers) {
    const {s, f, w} = offers[duty];
    r += ''
    + `\n #${duty} .symbol::after {content: "${s}"}`
    + `\n #${duty} .action {font: "color=${f}"}`
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
  let s = `<span class="offer" id="${name}">Notice: `+offer.head;
  for (const key in offer) {
    const price = +key;
    const val = offer[key];
    if (price > 0) s += `<span class="symbol"></span><span class="price">${price}</span><span class="action">${val}</span>`
  }
  return s + '</span><br>';
}
function setOffers() {
  let inner = '';
  for (const name in offers) inner += oneOffer(name);
  document.getElementById('offers').innerHTML = inner;
  return;
  // StyleSheet.insertRule(".symbol::before {content: '⬇️'}");
}
