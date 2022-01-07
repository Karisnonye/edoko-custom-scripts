function attachEventListeners() {
  var addToCartButton = document.querySelector("#continue-to-checkout-top");
  if (addToCartButton && FlutterAddToCart) {
    var childNode =
      document.getElementsByClassName("mini-bag__products")[0].childNodes;
    addToCartButton.addEventListener("click", function (event) {
      event.preventDefault();
      const data_push = [];
      childNode.forEach(function (val, key) {
        if (val.className.trim() == "mini-bag-product-wrapper") {
          newDomHtml = val.innerHTML;
          var newDom = document.createElement("div");
          newDom.innerHTML = newDomHtml;
          var price = parseInt(
            newDom
              .querySelector(
                ".mini-bag-product__price--list.mini-bag-product__price--highlight"
              )
              .innerText.substring(1)
              .replaceAll(",", "")
          );
          data_push.push({
            url: newDom.querySelector(".mini-bag-product__column > a").href,
            image: newDom.querySelector(".mini-bag-product__image").src,
            name: newDom
              .querySelector(".mini-bag-product__description")
              .innerText.trim(),
            quantity: parseInt(
              newDom
                .querySelector(".mini-bag-product__quantity--bold")
                .innerText.trim()
            ),
            price: price,
            other_information: `Size:${newDom
              .querySelector(".mini-bag-product__size--bold")
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
