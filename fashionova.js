function attachEventListeners() {
  var addToCartButton = document.querySelector(".cart-page__checkout-CTA");
  if (addToCartButton && FlutterAddToCart) {
    var childNode = document.getElementsByClassName("cart-content__items")[0]
      .childNodes;
    addToCartButton.addEventListener("click", function (event) {
      event.preventDefault();
      const data_push = [];
      childNode.forEach(function (val, key) {
        if (val.className == "cart-content__item") {
          newDomHtml = val.innerHTML;
          var newDom = document.createElement("div");
          newDom.innerHTML = newDomHtml;
          var price = newDom.querySelector(
            ".cart-content__item-price"
          ).innerText;
          data_push.push({
            url: newDom.querySelector(".cart-content__product-title").href,
            image: newDom.querySelector(".cart-content__item-image").src,
            name: newDom
              .querySelector(".cart-content__product-title")
              .innerText.trim(),
            quantity: parseInt(
              newDom.querySelector(".cart-content__quantity__input").value
            ),
            price: price.substring(1),
            other_information: newDom.querySelector(
              ".cart-content__variant-title"
            ).innerText,
          });
        }
      });
      FlutterAddToCart.postMessage(JSON.stringify(data_push));
    });
  }
  return 0;
}
setTimeout(attachEventListeners, 100);
