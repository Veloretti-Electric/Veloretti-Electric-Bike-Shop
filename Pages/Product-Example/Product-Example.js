 // Initialize cart if it doesn't exist
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify({ items: [], total: 0 }));
}

// Function to dispatch cart update event
function dispatchCartUpdated() {
    window.dispatchEvent(new CustomEvent('cartUpdated'));
}

// Function to update cart count in header
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || { items: [] };
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const itemCount = cart.items.reduce((total, item) => total + (item.quantity || 0), 0);
        cartCount.textContent = itemCount;
        cartCount.style.display = itemCount > 0 ? 'flex' : 'none';
    }
}

// Function to add item to cart
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || { items: [], total: 0 };
    const existingItemIndex = cart.items.findIndex(item => 
        item.id === product.id && item.color === product.color
    );
    
    if (existingItemIndex > -1) {
        cart.items[existingItemIndex].quantity += 1;
    } else {
        cart.items.push({...product, quantity: 1});
    }
    
    // Update total
    cart.total = cart.items.reduce((total, item) => {
        return total + (parseFloat(item.price) * item.quantity);
    }, 0);
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    dispatchCartUpdated(); // Notify other components
    
    // Show success message
    alert(`${product.name} (${product.color}) has been added to your cart!`);
}

// Format price from string to number
function parsePrice(priceText) {
    // Handle European format (1.299,00)
    return parseFloat(
        priceText
            .replace(/[^\d,]/g, '')  // Remove all non-digit and non-comma characters
            .replace(',', '.')         // Replace comma with dot for decimal
    );
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart count on page load
    updateCartCount();
    
    // Set up "Buy Now" button
    const buyNowBtn = document.querySelector('.btn-primary');
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function() {
            const productName = document.querySelector('.product-name').textContent.trim();
            const priceText = document.querySelector('.price').textContent.trim();
            const price = parsePrice(priceText);
            const color = document.querySelector('input[name="color"]:checked').value;
            
            const product = {
                id: 'ivy-two',
                name: productName,
                price: price,
                color: color,
                image: './../../Images/Veloretti Electric Ivy Two Pro.png'
            };
            
            addToCart(product);
        });
    }
    
    // Download specs functionality
    const downloadBtn = document.getElementById('download-specs');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const specs = `All in the details\n\nFrame\nFrame: Coated aluminium with integrated battery case\nPaint: PBG Powder Coating 2K\nWeight: Frame 26 kg, Battery 3 kg\nRider Height: 164-184cm\nYour bike comes 85% assembled.\n\nComponents\nMotor: Bafang® 36V 250W / 65Nm\nBattery: Removable Smart Battery / 36Vdc, 540 WH, 60-120 km range\nGears: Enviolo® TR / Pro 44T Stepless Automatic Shifting / Ratio 310%\nDisplay: Veloretti built-in display\nBrakes: Shimano® MT200 hydraulic disc brakes\nTires: Performance Plus tire / 60-622 / Anti Puncture level 2\nBelt: Gates® Carbon Beltdrive / 122T CDX\nLight front: Osram® Precision front light LED, StVZO approved\nLight rear: COB Hyperbolic LED\n\nAccessories\nAbus plug: In-chain lock 140 cm\nFront carrier: AVS front carrier 480g, Carrying Capacity: 10 kg (22 lb)\nRear carrier: TBA\nBasket: AVS basket 1330g, Carrying Capacity: 10 kg (22 lb)\nCargo basket: AVS cargo basket 1710g, Carrying Capacity: 10 kg (22 lb)`;
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            const lines = specs.split('\n');
            let y = 20;
            doc.setFont('helvetica');
            doc.setFontSize(14);
            doc.text('Veloretti Electric Bike - Full Specifications', 15, y);
            doc.setFontSize(11);
            y += 10;
            lines.forEach(line => {
                doc.text(line, 15, y);
                y += 8;
                if (y > 280) {
                    doc.addPage();
                    y = 20;
                }
            });
            doc.save('Veloretti_Full_Specifications.pdf');
        });
    }
});