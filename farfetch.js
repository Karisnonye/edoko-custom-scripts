function attachEventListeners() {
  var addToCartButton = document.querySelector("._ebcf1c");
  const addToCarButton2 = document.querySelector("#BasketGoToCheckout");
  if ((addToCartButton || addToCarButton2) && FlutterAddToCart) {
    var childNode_ = document.getElementsByClassName("_02b5c3")[0].childNodes;

    if (addToCartButton) {
      addToCartButton.addEventListener("click", function (event) {
        event.preventDefault();
        var childNode = childNode_[0].childNodes;

        const data_push = [];
        childNode.forEach(function (val, key) {
          if (val.className == "_506ad7") {
            newDomHtml = val.innerHTML;
            var newDom = document.createElement("div");
            newDom.innerHTML = newDomHtml;
            var price = newDom.querySelector("._abd608").innerText;
            data_push.push({
              url: newDom.querySelector("._624eb5 > a").href,
              image: newDom.querySelector("._624eb5 > a > picture > img").src,
              name: newDom.querySelector("._c9c433 > a").innerText.trim(),
              quantity: parseInt(
                newDom
                  .querySelector("._440b02 > ._ea993b > ._2297de")
                  .innerText.trim()
              ),
              price: price.substring(1),
              other_information: newDom.querySelector("._c9c433 > ._b4693b")
                .innerText,
            });
          }
        });
        FlutterAddToCart.postMessage(JSON.stringify(data_push));
      });
    }
    if (addToCartButton2) {
      addToCartButton.addEventListener("click", function (event) {
        event.preventDefault();
        var childNode = childNode_[0].childNodes;

        const data_push = [];
        childNode.forEach(function (val, key) {
          if (val.className == "_506ad7") {
            newDomHtml = val.innerHTML;
            var newDom = document.createElement("div");
            newDom.innerHTML = newDomHtml;
            var price = newDom.querySelector("._abd608").innerText;
            data_push.push({
              url: newDom.querySelector("._624eb5 > a").href,
              image: newDom.querySelector("._624eb5 > a > picture > img").src,
              name: newDom.querySelector("._c9c433 > a").innerText.trim(),
              quantity: parseInt(
                newDom
                  .querySelector("._440b02 > ._ea993b > ._2297de")
                  .innerText.trim()
              ),
              price: price.substring(1),
              other_information: newDom.querySelector("._c9c433 > ._b4693b")
                .innerText,
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
