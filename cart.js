document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('hsiCart')) || [];
    const cartDetails = document.getElementById('cart-details');
    const cartTotalSpan = document.getElementById('cart-total');
    const viewCartButton = document.querySelector('.view-cart-button');
    const productData = [
        { id: 1, name: "Servidor PowerEdge R760", price: 17000.00 },
        { id: 2, name: "NAS Synology RS1221+", price: 1200.00 },
        { id: 3, name: "Firewall FortiGate 100F", price: 1400.00 }
    ];

    function updateCartUI() {
        localStorage.setItem('hsiCart', JSON.stringify(cart));
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        viewCartButton.textContent = `Ver Carrito (${cart.length})`;
        cartTotalSpan.textContent = total.toFixed(2);
    }

    function añandircarro(productId) {
        const product = productData.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            updateCartUI();
            alert(`"${product.name}" añadido al carrito!`);
        }
    }

    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = parseInt(event.target.getAttribute('data-product-id'));
            añandircarro(productId);
        });
    });

    
    viewCartButton.addEventListener('click', () => {
        const isHidden = cartDetails.style.display === 'none' || cartDetails.style.display === '';
        cartDetails.style.display = isHidden ? 'block' : 'none';
    });
    updateCartUI();
});
