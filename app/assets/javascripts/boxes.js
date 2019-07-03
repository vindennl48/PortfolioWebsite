function runMe() {
  anime({
    targets: 'div.box.red',
    //translateY: [
      //{ value: 200, duration: 1200 },
      //{ value: 0,   duration: 500 },
    //],
    rotate: [
      { value: '0.5turn', duration: 2400, easing: 'easeInOutSine' },
      { value: '0turn', duration: 500,  easing: 'easeInOutSine' },
    ],
  })
}
