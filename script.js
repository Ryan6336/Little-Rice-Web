
window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("intro").remove();
    }, 4000);
});


let total = 0;

function addToCart(name, price) {

    let cart = document.getElementById("cart-items");

    // Remove empty message
    if (total === 0) {
        cart.innerHTML = "";
    }

    // Create new item
    let item = document.createElement("p");

    item.innerHTML = name + " - $" + price.toFixed(2);

    cart.appendChild(item);

    // Calculate total
    total = total + price;

    document.getElementById("total").innerHTML =
        total.toFixed(2);
}

document.getElementById("feedbackform").addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("successMessage").innerHTML =
        "Your feedback has been submitted successfully!";

    document.getElementById("successMessage").style.color = "green";

    document.getElementById("feedbackForm").reset();

});

function checkout() {
    window.location.href = 'checkout.html'; 
}

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    
    cart.push({ name: name, price: price });
    
    localStorage.setItem('myCart', JSON.stringify(cart));
    
    displayCart();
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    let cartItemsDiv = document.getElementById('cart-items');
    let totalSpan = document.getElementById('total');

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Your cart is empty</p>";
        totalSpan.innerText = "0.00";
        return;
    }

    cartItemsDiv.innerHTML = ""; 
    let total = 0;

    cart.forEach((item, index) => {
        cartItemsDiv.innerHTML += `
            <p>${item.name} - $${item.price.toFixed(2)} 
            <button onclick="removeItem(${index})" style="color:red; margin-left:10px; cursor:pointer;">Remove</button></p>
        `;
        total += item.price;
    });

    totalSpan.innerText = total.toFixed(2);
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('myCart'));
    cart.splice(index, 1); 
    localStorage.setItem('myCart', JSON.stringify(cart));
    displayCart(); 
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('cart-items')) {
        displayCart();
    }
});

function checkout() {
    let cart = JSON.parse(localStorage.getItem('myCart')) || [];
    if (cart.length === 0) {
        alert("Your cart is empty! Please add items first.");
    } else {
        window.location.href = 'checkout.html'; 
    }
}

