
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


