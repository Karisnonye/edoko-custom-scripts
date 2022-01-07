// url https://www.missguided.eu/

function attachEventListeners() {
  const addToCartButton = document.querySelector(
    ".button.checkout__action-button"
  );

  if (addToCartButton && FlutterAddToCart) {
    const childNode = document.getElementsByClassName(
      "order-summary__item-list"
    )[0].childNodes;
    addToCartButton.addEventListener("click", function (event) {
      event.preventDefault();
      const data_push = [];
      childNode.forEach(function (val, key) {
        if (val.className && val.className.trim() == "order-summary__item 1") {
          newDomHtml = val.innerHTML;
          const newDom = document.createElement("div");
          newDom.innerHTML = newDomHtml;

          const price = parseInt(
            newDom
              .querySelector(".cart-price > .price")
              .innerText.trim()
              .substring(
                0,
                newDom.querySelector(".cart-price > .price").innerText.trim()
                  .length - 4
              )
              .replaceAll(",", "")
          );

          data_push.push({
            url: newDom.querySelector(".product-name > a").href,
            image: newDom.querySelector(".order-summary__item-image img").src,
            name: newDom.querySelector(".product-name > a").innerText.trim(),
            quantity: parseInt(
              newDom.querySelector(".qty.order-summary__item-qty").value
            ),
            price: price,
            other_information: `${newDom
              .querySelector(".product-attributes__item")
              .innerText.trim()}`,
          });
        }
      });
      FlutterAddToCart.postMessage(JSON.stringify(data_push));
    });
  }

  return 0;
}
setTimeout(attachEventListeners, 100);
