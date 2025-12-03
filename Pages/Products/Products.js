

document.addEventListener('DOMContentLoaded', function() {

    const bikeSelectorButtons = document.querySelectorAll('.bike-selector-btn');
    
    bikeSelectorButtons.forEach(button => {
        button.addEventListener('click', function() {

            bikeSelectorButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.querySelector('.bike-selector-container').classList.remove('active');
            });
            

            this.classList.add('active');
            this.querySelector('.bike-selector-container').classList.add('active');
            

            const bikeName = this.querySelector('.bike-selector-title span:first-child').textContent;
            const mainImage = document.querySelector('.product-img');
            
            if (bikeName.includes('Ace')) {
                mainImage.src = '../../Images/Veloretti Electric Ace Two.png';
                mainImage.alt = 'Electric Ace Two';
            } else if (bikeName.includes('Ivy')) {
                mainImage.src = '../../Images/Veloretti Electric Ivy Two.png';
                mainImage.alt = 'Electric Ivy Two';
            }
        });
    });
    

    const colorSwatches = document.querySelectorAll('.color-swatch-btn');
    
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', function() {

            colorSwatches.forEach(s => s.classList.remove('active'));
            

            this.classList.add('active');
            

            const colorHeading = document.querySelector('.color-heading');

        });
    });
    

    let currentSlide = 0;
    const slider = document.querySelector('.keen-slider');
    const sliderArrow = document.querySelector('.slider-arrow');
    
    if (sliderArrow) {
        sliderArrow.addEventListener('click', function() {


            console.log('Next slide');
        });
    }
    

    const scrollSpecsBtn = document.querySelector('.scroll-specs-btn');
    const specsSection = document.querySelector('.specs-section');
    
    if (scrollSpecsBtn && specsSection) {
        scrollSpecsBtn.addEventListener('click', function() {
            specsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
    

    const highlightPoints = document.querySelectorAll('.highlight-point');
    
    highlightPoints.forEach(point => {
        point.addEventListener('click', function() {

            console.log('Highlight point clicked:', this);
        });
    });
    

    const favoriteBtn = document.querySelector('.favorite-btn');
    
    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', function() {
            this.classList.toggle('active');

        });
    }
    

    const subscriptionForm = document.querySelector('.subscription-form');
    if (subscriptionForm) {
        subscriptionForm.addEventListener('submit', function(e) {
            e.preventDefault();

            console.log('Newsletter subscription submitted');
        });
    }
});


