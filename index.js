var adsbygoogle = {
  init: function (n) {
    this.run(n), (document.cookie = 'nct=0;');
  },
  readData: function (n) {
    for (var t = n + '=', e = decodeURIComponent(document.cookie).split(';'), o = 0; o < e.length; o++) {
      for (var r = e[o]; ' ' == r.charAt(0); ) r = r.substring(1);
      if (0 == r.indexOf(t)) return r.substring(t.length, r.length);
    }
    return '';
  },
  run: function (n) {
    for (var t = n.click, e = n.interval, o = document.getElementsByClassName('adsbygoogle'), r = 0, c = o.length; r < c; r++)
      o[r].addEventListener('click', function () {
        (tn = Arlina.readData('nct')), (po = tn - 1 + 2), Arlina.changer(t, e) ? (document.cookie = 'nct=' + po + ';') : Arlina.n('pointer-events:none;');
      });
  },
  changer: function (n, t) {
    return (
      (tc = this.readData('nct') - 1 + 2),
      tc != n ||
        (setTimeout(function () {
          (document.cookie = 'nct=0;'), Arlina.n('pointer-events:cursor;');
        }, t),
        !1)
    );
  },
  n: function (n) {
    for (var t = document.getElementsByClassName('adsbygoogle'), e = 0, o = t.length; e < o; e++) t[e].style = n;
  },
};
