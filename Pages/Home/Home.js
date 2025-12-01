// Home Page JavaScript

// Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const accordionItem = this.closest('.accordion-item');
            const isOpen = accordionItem.classList.contains('open');
            const icon = this.querySelector('.accordion-icon');
            
            // Close all accordions
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('open');
                item.querySelector('.accordion-icon').textContent = '+';
            });
            
            // Open clicked accordion if it wasn't open
            if (!isOpen) {
                accordionItem.classList.add('open');
                icon.textContent = '-';
            }
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle form submission here
            console.log('Form submitted');
        });
    }
    
    // Newsletter subscription
    const subscriptionForm = document.querySelector('.subscription-form');
    if (subscriptionForm) {
        subscriptionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle newsletter subscription here
            console.log('Newsletter subscription submitted');
        });
    }
});

