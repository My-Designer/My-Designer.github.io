function myFunction() {
  document.getElementById('demo').innerHTML = 'Paragraph changed.';

  newStyles();
}

/* ᛬፡։ː• */

const g = {};

function setStyles() {
  g.sheet = document.createElement('style')
  g.sheet.innerHTML = "div {border: 2px solid black; background-color: blue;}";
  document.body.appendChild(g.sheet);
}

function newStyles() {
  g.sheet.innerHTML = "div {border: 2px solid black; background-color: green;}";
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
  StyleSheet.insertRule(".symbol::before {content: '⬇️'}");
}
