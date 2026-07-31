document.addEventListener('DOMContentLoaded', function () {
    // Banner Slider
    const bannerSlides = document.querySelector('.banner-slides');
    if (bannerSlides) {
        const slides = document.querySelectorAll('.banner-slide');
        const prevBtn = document.querySelector('.banner-slider .prev');
        const nextBtn = document.querySelector('.banner-slider .next');
        let currentIndex = 0;
        const totalSlides = slides.length;

        function updateSlidePosition() {
            bannerSlides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlidePosition();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlidePosition();
        });

        // Auto slide
        setInterval(() => {
            nextBtn.click();
        }, 5000);
    }

    // You can add more JS for product carousels if needed
});
