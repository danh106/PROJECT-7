let slideIndex = 1;

    function showSlides(n) {
        let slides = document.querySelector('.slides');
        let totalSlides = document.querySelectorAll('.slide').length;

        if (n > totalSlides) {
            slideIndex = 1;
        } else if (n < 1) {
            slideIndex = totalSlides;
        } else {
            slideIndex = n;
        }

        let translateValue = -(slideIndex - 1) * 100;
        slides.style.transform = `translateX(${translateValue}%)`;
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function autoSlides() {
        showSlides(slideIndex += 1);
    }

    setInterval(autoSlides, 2000);

