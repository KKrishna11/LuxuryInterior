function sliderPrevNext(options) {
    const slider = new Siema(options);
    const prev = () => slider.prev();
    const next = () => slider.next();
    document.querySelectorAll(options.prev).forEach(button => {
      button.addEventListener('click', prev);
    });
    document.querySelectorAll(options.next).forEach(button => {
      button.addEventListener('click', next);
    });
    return slider;
  }
  document.querySelectorAll('.hero-images .images img')
    .forEach(img => img.setAttribute('src', img.getAttribute('data-src')));
  sliderPrevNext({
    selector: '.hero-images .images',
    duration: 500,
    perPage: 1,
    draggable: true,
    threshold: 10,
    loop: true,
    prev: '.hero-images .arrow-up',
    next: '.hero-images .arrow-down, .hero-images .box-arrow-down',
  });
  sliderPrevNext({
    selector: '.section-4 .slider .items',
    duration: 500,
    perPage: {
      0: 1,
      900: 2
    },
    draggable: true,
    threshold: 10,
    prev: '.section-4 .arrow-left',
    next: '.section-4 .arrow-right',
  });


