function initCarousel() {

  // find an object with a class `.carousel__inner`
  let  carouselTape = document.querySelector('.carousel__inner');
  
  // find an object with a class `.carousel__slide`
  let carouselSlide = document.querySelector('.carousel__slide');
  
  // search slide width
  let slideWidth = carouselSlide.offsetWidth;
  console.log(slideWidth);

  // search buttons
  let rigthButton = document.querySelector('.carousel__arrow_right');
  let leftButton = document.querySelector('.carousel__arrow_left');
  
  // set start value
  let slideMove = 0;
  let slideIndex = 1;
  
  // checking the stealth of arrows
  function checkArrows () {
    if (slideIndex === 4) {
      rigthButton.style.display = 'none';
    } else {
      rigthButton.style.display = '';
    }

    if (slideIndex === 1) {
      leftButton.style.display = 'none';
    } else {
      leftButton.style.display = '';
    }
  }
  checkArrows();
  
  // move slide to the rigth
  rigthButton.onclick = function () { 
    slideMove = slideMove - slideWidth;
    slideIndex = slideIndex + 1;
    carouselTape.style.transform = `translateX(${slideMove}px)`;
    checkArrows();
  };

  // move slide to the left
  leftButton.onclick = function () {
    slideMove = slideMove + slideWidth;
    slideIndex = slideIndex - 1;
    carouselTape.style.transform = `translateX(${slideMove}px)`;
    checkArrows();
  };
}
