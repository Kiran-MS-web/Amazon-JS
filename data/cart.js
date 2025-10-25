export const cart = [];


export function addToCart(productId) {
  let matchingItem;
  let quantity = 1;

  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });




  const quantitySelector = document.querySelector(
    `.js-quantity-selector-${productId}`
  );

  quantity = Number(quantitySelector.value);

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId,
      quantity
    });
  }
}