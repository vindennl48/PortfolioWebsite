function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}

function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}

function runAtStart() {
  $('.header h1 span').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  anime.timeline()
    .add({
      targets:  '.header',
      scaleY:   [0,1],
      opacity:  [0.5,1],
      easing:   "easeOutElastic",
      duration: 700,
      delay:    500,
    })
    .add({
      targets:    '.header .bracket-close',
      translateX: [-vw(75),0],
      easing:     "easeOutElastic",
      //delay:    500,
      duration:   800,
    }, '-=400')
    .add({
      targets:  '.header .letter',
      opacity:  [0,1],
      easing:   "easeOutExpo",
      duration: 600,
      delay: function(el, i) {
        return 34 * (i+1)
      }
    }, '-=800')
    .add({
      targets: ['.slogan', '.projects'],
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
    }, '-=500')
    .add({
      targets: '.project',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: function(el, i) {
        return 200 * (i)
      }
    }, '-=1200')
}
