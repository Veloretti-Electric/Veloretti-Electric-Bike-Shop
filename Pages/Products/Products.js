// Single Product Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Bike Selector functionality
    const bikeSelectorButtons = document.querySelectorAll('.bike-selector-btn');
    
    bikeSelectorButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            bikeSelectorButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.querySelector('.bike-selector-container').classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            this.querySelector('.bike-selector-container').classList.add('active');
            
            // Update main product image based on selection
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
    
    // Color Swatch selection
    const colorSwatches = document.querySelectorAll('.color-swatch-btn');
    
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', function() {
            // Remove active class from all swatches
            colorSwatches.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked swatch
            this.classList.add('active');
            
            // Update color heading based on selected color
            const colorHeading = document.querySelector('.color-heading');
            // This would typically update based on the color data
        });
    });
    
    // Image slider functionality
    let currentSlide = 0;
    const slider = document.querySelector('.keen-slider');
    const sliderArrow = document.querySelector('.slider-arrow');
    
    if (sliderArrow) {
        sliderArrow.addEventListener('click', function() {
            // Navigate to next slide
            // This would be implemented with a slider library like Keen Slider
            console.log('Next slide');
        });
    }
    
    // Scroll to Specifications button
    const scrollSpecsBtn = document.querySelector('.scroll-specs-btn');
    const specsSection = document.querySelector('.specs-section');
    
    if (scrollSpecsBtn && specsSection) {
        scrollSpecsBtn.addEventListener('click', function() {
            specsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
    
    // Highlight points interaction
    const highlightPoints = document.querySelectorAll('.highlight-point');
    
    highlightPoints.forEach(point => {
        point.addEventListener('click', function() {
            // This would show a tooltip or modal with feature information
            console.log('Highlight point clicked:', this);
        });
    });
    
    // Favorite button
    const favoriteBtn = document.querySelector('.favorite-btn');
    
    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            // Save favorite state to localStorage or send to server
        });
    }
    
    // Newsletter subscription
    const subscriptionForm = document.querySelector('.subscription-form');
    if (subscriptionForm) {
        subscriptionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle newsletter subscription
            console.log('Newsletter subscription submitted');
        });
    }
});

