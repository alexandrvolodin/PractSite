let accum = new Accumulator(0);

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = () => {
        this.value += Number(prompt("Сколько хотите купить?: ", "0"));
    }
}

function addToCart() {
    let cartItems = document.querySelector('#shoppingCart span');
    accum.read();
    if (accum.value > 0) {
        cartItems.innerHTML = accum.value;
    }
}