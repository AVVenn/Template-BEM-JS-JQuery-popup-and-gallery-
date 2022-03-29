const menu = document.querySelector('.menu__btn');
const menuList = document.getElementsByClassName('menu__list')[0];

menu.addEventListener('click', () => {
  menuList.classList.toggle('menu__list--active');
  menu.classList.toggle('menu__btn--active');
});

$(() => {
  $('.popup__link').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  $('.gallery__slider').slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.svg" alt=""</button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg" alt=""</button>',
  });

  $('.gallery__item-inner').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
  });
});

// const popup = document.querySelector('.about__popup');
// const aboutContainer = document.querySelector('.about').firstElementChild;
// popup.addEventListener('click', (event) => {
//   event.preventDefault();
//   const elemVideo = document.querySelector('.about__video');
//   if (!elemVideo) {
//     const video = document.createElement('div');
//     video.classList.add('about__video');
//     aboutContainer.append(video);
//     video.insertAdjacentHTML(
//       'afterbegin',
//       `<iframe width="100vh"src="https://www.youtube.com/embed/y1uRk8kgVh4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//      `
//     );
//   }
// });
