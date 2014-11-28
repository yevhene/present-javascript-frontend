var kurs = 14.96;

function d2h(d) {
  return Math.round(d * kurs * 100) / 100;
}

function h2d(g) {
  return Math.round(g / kurs * 100) / 100;
}
