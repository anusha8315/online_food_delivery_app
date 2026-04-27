let total = 0;

function addToCart(price) {
    total += price;
    document.getElementById("total").innerText = total;
}

function placeOrder() {
    if (total === 0) {
        alert("Please add items to cart!");
        return;
    }

    document.getElementById("message").innerHTML =
        "✅ Order Placed Successfully! Your food is on the way 🚚";

    total = 0;
    document.getElementById("total").innerText = total;
}
