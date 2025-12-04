document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const cartItemsContainer = document.querySelector('.cart-section');
    const orderSummaryTotal = document.querySelector('.total-price');
    const checkoutBtn = document.querySelector('.checkout-button');
    const cartTitle = document.querySelector('.cart-title');

    // Format price to European format (1.234,56)
    function formatPrice(price) {
        return new Intl.NumberFormat('de-DE', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(price);
    }

    // Update cart display
    function updateCartDisplay() {
        const cart = JSON.parse(localStorage.getItem('cart')) || { items: [], total: 0 };
        
        // Update cart title with item count
        const itemCount = cart.items.reduce((total, item) => total + item.quantity, 0);
        cartTitle.textContent = `Cart (${itemCount})`;
        
        // Clear existing items
        const existingItems = document.querySelectorAll('.cart-item');
        existingItems.forEach(item => item.remove());
        
        if (cart.items.length === 0) {
            cartItemsContainer.insertAdjacentHTML('beforeend', `
                <div class="empty-cart-message">
                    <p>Your cart is empty</p>
                    <a href="../../Pages/Products/Products.html" class="continue-shopping">Continue Shopping</a>
                </div>
            `);
            orderSummaryTotal.textContent = '0,00';
            checkoutBtn.disabled = true;
            return;
        }
        
        // Add each item to the cart
        cart.items.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" loading="eager" class="animated-img">
                </div>
                <div class="cart-item-details">
                    <h3 class="cart-item-name">${item.name} - ${item.color}</h3>
                    <div class="quantity-controls">
                        <button class="quantity-btn" data-index="${index}" data-action="decrease">−</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" data-index="${index}" data-action="increase">+</button>
                    </div>
                    <p class="cart-item-price">${formatPrice(item.price * item.quantity)}</p>
                </div>
                <button class="cart-item-remove" data-index="${index}" aria-label="Remove item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </button>
            `;
            cartItemsContainer.insertBefore(itemElement, document.querySelector('.insurance-section'));
        });
        
        // Update total
        orderSummaryTotal.textContent = formatPrice(cart.total);
        
        // Add event listeners
        addCartEventListeners();
    }

    // Update cart in localStorage
    function updateCart(updatedCart) {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        updateCartDisplay();
        // Notify other components about cart update
        window.dispatchEvent(new CustomEvent('cartUpdated'));
    }

    // Handle quantity changes
    function handleQuantityChange(index, action) {
        const cart = JSON.parse(localStorage.getItem('cart')) || { items: [], total: 0 };
        
        if (action === 'increase') {
            cart.items[index].quantity += 1;
        } else if (action === 'decrease' && cart.items[index].quantity > 1) {
            cart.items[index].quantity -= 1;
        }
        
        // Recalculate total
        cart.total = cart.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
        
        updateCart(cart);
    }

    // Handle item removal
    function handleRemoveItem(index) {
        const cart = JSON.parse(localStorage.getItem('cart')) || { items: [], total: 0 };
        
        // Remove the item
        cart.items.splice(index, 1);
        
        // Recalculate total
        cart.total = cart.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
        
        updateCart(cart);
    }

    // Add event listeners for cart actions
    function addCartEventListeners() {
        // Quantity buttons
        document.querySelectorAll('.quantity-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.closest('.quantity-btn').dataset.index);
                const action = e.target.closest('.quantity-btn').dataset.action;
                handleQuantityChange(index, action);
            });
        });
        
        // Remove buttons
        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                handleRemoveItem(index);
            });
        });
    }

    // Handle checkout
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            const cart = JSON.parse(localStorage.getItem('cart')) || { items: [] };
            if (cart.items.length === 0) {
                alert('Your cart is empty');
                return;
            }
            // Here you would typically redirect to checkout
            alert('Proceeding to checkout!');
        });
    }

    // Initialize cart display
    updateCartDisplay();

    // Listen for cart updates from other pages
    window.addEventListener('storage', function(event) {
        if (event.key === 'cart') {
            updateCartDisplay();
        }
    });

    // Also listen for the custom cartUpdated event
    window.addEventListener('cartUpdated', updateCartDisplay);
});
