
window.addEventListener("load", function () {
    var intro = document.getElementById("intro");

    setTimeout(function () {
        intro.classList.add("hide");

        setTimeout(function () {
            intro.style.display = "none";
        }, 900);

    }, 2100);
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

function checkout() {
    window.location.href = 'checkout.html'; 
}

