const cartBody = document.querySelector(".card__body");
const btnRadioDefault = document.querySelector(".default_check");

function handleClickItem(e) {
  const bodyElm = e.target.closest(".card__body");
  const selectedCartItem = e.target.closest(".card__item");
  const selectedBtnRadio = selectedCartItem.querySelector(".btn__radio");

  // Get array of all carts element
  const cartItems = Array.from(bodyElm.children);

  // Rest nodes
  cartItems.forEach((item) => {
    const cart = item.closest(".card__item");
    const btnRadio = item.querySelector(".btn__radio");
    btnRadio.checked = false;
    if (cart.classList.contains("selected")) item.classList.remove("selected");
  });

  // Mutations on selected node
  selectedCartItem.classList.add("selected");
  selectedBtnRadio.checked = true;
}

// Function to reset selection on page load
function resetSelection() {
  btnRadioDefault.checked = true;
}

// Adding click event listener to each cart item in the NodeList
cartBody.addEventListener("click", handleClickItem);

// Reset cart when the page loads
document.addEventListener("DOMContentLoaded", resetSelection);
