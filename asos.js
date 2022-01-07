function attachEventListeners() {
  var addToCartButton = document.querySelector(
    ".bag-title-quicklink--checkout"
  );
  var addToCartButton2 = document.querySelector(
    ".bag-total-button.bag-total-button--checkout.bag-total-button--checkout--total"
  );
  if ((addToCartButton || addToCartButton2) && FlutterAddToCart) {
    var childNode = document.getElementsByClassName("bag-items")[0].childNodes;
    if (addToCartButton) {
      addToCartButton.addEventListener("click", function (event) {
        event.preventDefault();

        const data_push = [];
        childNode.forEach(function (val, key) {
          if (val.className == "bag-item-holder") {
            newDomHtml = val.innerHTML;
            var newDom = document.createElement("div");
            newDom.innerHTML = newDomHtml;
            var price = newDom.querySelector(
              ".bag-item-price--current"
            ).innerText;
            data_push.push({
              url: newDom.querySelector(".bag-item-image > a").href,
              image: newDom.querySelector(".bag-item-image-img").src,
              name: newDom.querySelector(".bag-item-name").innerText.trim(),
              quantity: parseInt(
                newDom
                  .querySelector(
                    ".bag-item-variants > .bag-item-quantity-holder > span >.bag-item-quantity"
                  )
                  .innerText.trim()
              ),
              price: price.substring(1),
              other_information:
                newDom.querySelector(".bag-item-variants").innerText,
            });
          }
        });

        FlutterAddToCart.postMessage(JSON.stringify(data_push));
      });
    }
    if (addToCartButton2) {
      addToCartButton2.addEventListener("click", function (event) {
        event.preventDefault();

        const data_push = [];
        childNode.forEach(function (val, key) {
          if (val.className == "bag-item-holder") {
            newDomHtml = val.innerHTML;
            var newDom = document.createElement("div");
            newDom.innerHTML = newDomHtml;
            var price = newDom.querySelector(
              ".bag-item-price--current"
            ).innerText;
            data_push.push({
              url: newDom.querySelector(".bag-item-image > a").href,
              image: newDom.querySelector(".bag-item-image-img").src,
              name: newDom.querySelector(".bag-item-name").innerText.trim(),
              quantity: parseInt(
                newDom
                  .querySelector(
                    ".bag-item-variants > .bag-item-quantity-holder > span >.bag-item-quantity"
                  )
                  .innerText.trim()
              ),
              price: price.substring(1),
              other_information:
                newDom.querySelector(".bag-item-variants").innerText,
            });
          }
        });

        FlutterAddToCart.postMessage(JSON.stringify(data_push));
      });
    }
  }

  return 0;
}

setTimeout(attachEventListeners, 100);
