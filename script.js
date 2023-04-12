const products = document.querySelectorAll('.product');
const cart = document.querySelector('#cart');

products.forEach(product => {
  const button = product.querySelector('button');
  const quantity = product.querySelector('input');

  button.addEventListener('click', function() {
    const name = product.querySelector('h2').textContent;
    const price = parseFloat(product.querySelector('p:last-of-type').textContent.slice(8));
    const image = product.querySelector('img').src;
    const quantityValue = parseInt(quantity.value);

    const item = document.createElement('div');
    item.classList.add('cart-item');
    item.innerHTML = `
      <img src="${image}" alt="${name}">
      <div>
        <h3>${name}</h3>
        <p>$${price}</p>
        <p>Total cost: $${price * quantityValue}</p>
        <p>Quantity: ${quantityValue}</p>
      </div>
    `;

    cart.appendChild(item);
  });
});
