function attachEventListeners() {
  var addToCartButton = document.querySelector(".sg-button-primary");
  if (addToCartButton && FlutterAddToCart) {
    var childNode =
      document.getElementsByClassName("D6kPf t1q_9")[0].childNodes;
    addToCartButton.addEventListener("click", function (event) {
      event.preventDefault();
      const data_push = [];
      childNode.forEach(function (val, key) {
        console.log(val.className);
        if (val.className.trim() == "JQ4Dd  undefined") {
          newDomHtml = val.innerHTML;
          var newDom = document.createElement("div");
          newDom.innerHTML = newDomHtml;
          var price = newDom.querySelector(
            ".layout-text.column-12.sg-action.zvQz3"
          ).innerText;

          data_push.push({
            url: newDom.querySelector(".sg-action.t7x3s").href,
            image: newDom.querySelector(
              ".layout-image.column-12.card__image.loaded > img"
            ).src,
            name: newDom.querySelector(".sg-action.t7x3s").innerText.trim(),
            quantity: parseInt(
              newDom
                .querySelector(".layout-text.column-12.sg-body-small.a2lWP")
                .innerText.trim()
                .substring(6)
            ),
            price: price.substring(3),
            other_information: null,
          });
        }
      });
      FlutterAddToCart.postMessage(JSON.stringify(data_push));
    });
  }
  return 0;
}
setTimeout(attachEventListeners, 100);
