// url https://m.shein.com/
// currency USD
function attachEventListeners() {
  const addToCartButton = document.querySelector(
    ".S-button.cart-checkout__button"
  );

  if (addToCartButton && FlutterAddToCart) {
    const childNode = document.getElementsByClassName(
      "c-cart-list-wrap"
    )[0].childNodes;
    addToCartButton.addEventListener("click", function (event) {
      event.preventDefault();
      const data_push = [];
      childNode.forEach(function (val, key) {
        if (val.className && val.className.trim() == "j-product-item.mshe-item.swiper-slide.swiper-slide-active") {
          newDomHtml = val.innerHTML;
          const newDom = document.createElement("div");
          newDom.innerHTML = newDomHtml;

          const price = parseInt(
            newDom
              .querySelector(".right-price > span")
              .innerText.trim()
              .substring(
                3,
                newDom.querySelector(".right-price > span").innerText.trim()
                  .length - 2
              )
              .replaceAll(".", "")
          );

          data_push.push({
            url: newDom.querySelector(".mcart-left > a").href,
            image: newDom.querySelector(".a > img").src,
            name: newDom.querySelector(".right-struct > span").innerText.trim(),
            quantity: parseInt(
              newDom.querySelector(".cart-item__stepper-num.j-FS-cart-item-qty").value
            ),
            price: price,
            other_information: `${newDom
              .querySelector(".cart-item__editor-content")
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