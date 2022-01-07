// url https://www.converse.com/

function attachEventListeners() {
  const addToCartButton = document.querySelector(
    ".button.button--primary.set--full"
  );

  if (addToCartButton && FlutterAddToCart) {
    const childNode =
      document.getElementsByClassName("cart__items")[0].childNodes;
    addToCartButton.addEventListener("click", function (event) {
      event.preventDefault();
      const data_push = [];
      childNode.forEach(function (val, key) {
        if (
          val.className &&
          val.className.trim() == "cart__item gutter--normal"
        ) {
          newDomHtml = val.innerHTML;
          const newDom = document.createElement("div");
          newDom.innerHTML = newDomHtml;

          const price = parseInt(
            newDom
              .querySelector(".product-price--sales")
              .innerText.trim()
              .substring(1)
          );

          data_push.push({
            url: newDom.querySelector(".text--underline.set--quickview-ready")
              .href,
            image: newDom.querySelector(".product-mini__image-url > img").src,
            name: newDom
              .querySelector(".text--underline.set--quickview-ready")
              .innerText.trim(),
            quantity: parseInt(
              newDom.querySelector(".input-select--double").value
            ),
            price: price,
            other_information: `${newDom
              .querySelector(
                ".product-mini__attribute-item[data-attribute='size']"
              )
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
