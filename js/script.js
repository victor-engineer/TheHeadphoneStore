// Exemplo simples de manipulação do carrinho
let cart = [];

function addToCart(productId, productName, productPrice) {
    const product = { id: productId, name: productName, price: productPrice, quantity: 1 };
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartTable = document.getElementById('cart-items');
    cartTable.innerHTML = '';

    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
            <td><button onclick="removeFromCart(${item.id})">Remover</button></td>
        `;
        cartTable.appendChild(row);
    });
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function checkout() {
    alert('Pedido finalizado!');
    cart = [];
    updateCart();
}

// Array de produtos do catálogo
const products = [
    {
        name: 'Fone de Ouvido Wireless',
        price: 199.00,
        image: 'product1.png'
    },
    {
        name: 'Teclado Mecânico Gamer',
        price: 129.00,
        image: 'product2.png'
    },
    {
        name: 'Mouse Gamer RGB',
        price: 79.00,
        image: 'product3.png'
    },
    {
        name: 'Monitor 4K Ultra HD',
        price: 349.00,
        image: 'product4.png'
    }
];

let currentProductIndex = 0;

// Atualiza o produto exibido no catálogo
function updateProductDisplay() {
    const product = products[currentProductIndex];
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-price').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('product-image').src = product.image;
}

// Alterna para o próximo produto
function nextProduct() {
    currentProductIndex = (currentProductIndex + 1) % products.length;
    updateProductDisplay();
}

// Adiciona o produto atual ao carrinho
function addToCart() {
    const product = products[currentProductIndex];
    const cartItemsContainer = document.querySelector('.cart-items');

    // Cria o elemento de item do carrinho
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="item-details">
            <h3>${product.name}</h3>
            <p class="item-price">$${product.price.toFixed(2)}</p>
            <div class="quantity-control">
                <button onclick="updateQuantity(this, -1)">-</button>
                <span class="quantity">1</span>
                <button onclick="updateQuantity(this, 1)">+</button>
            </div>
        </div>
        <button class="remove-item" onclick="removeItem(this)"><i class='bx bx-trash'></i></button>
    `;

    cartItemsContainer.appendChild(cartItem);
    updateCart(); // Atualiza o resumo do carrinho
}

// Inicializa o catálogo com o primeiro produto
updateProductDisplay();
