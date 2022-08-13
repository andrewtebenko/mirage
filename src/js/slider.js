document.addEventListener('DOMContentLoaded', () => {

    let slideIndex = 1;

    const slides = document.querySelectorAll('.testimonial__slider .testimonial__wrapper'),
          previousButton = document.querySelectorAll('.prev'),
          nextButton = document.querySelectorAll('.next');

    const showSlides = n => {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'flex';
    };

    showSlides(slideIndex);

    const plusSlides = n => {
        showSlides(slideIndex += n);
    }
    ;
    previousButton.forEach(previousBtn => {
        previousBtn.addEventListener('click', () => {
            plusSlides(-1);
        });
    });

    nextButton.forEach(nextBtn => {
        nextBtn.addEventListener('click', () => {
            plusSlides(1);
        });
    });
});