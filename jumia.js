function attachEventListeners() {
  var addToCartButton = document.querySelector("#cartCheckout");
  if (addToCartButton && FlutterAddToCart) {
    var childNode = document.getElementById("items").childNodes;

    addToCartButton.addEventListener("click", function (event) {
      event.preventDefault();

      const data_push = [];
      childNode.forEach(function (val, key) {
        if (val.className != "header") {
          newDomHtml = val.innerHTML;
          var newDom = document.createElement("div");
          newDom.innerHTML = newDomHtml;
          data_push.push({
            url: newDom.querySelector(".osh-col-1of3 &gt; a").href,
            image: newDom.querySelector(".osh-col-1of3 &gt; a &gt; img").src,
            name: newDom
              .querySelector(".osh-col-2of3 &gt; .text-display-4")
              .innerText.trim(),
            quantity: 1,
            price: newDom.querySelector(".prd--price &gt; span:nth-child(2)")
              .innerText,
            other_information: newDom.querySelector(".text-body-3").innerText,
          });
        }
      });

      FlutterAddToCart.postMessage(JSON.stringify(data_push));
    });
  }

  return 0;
}

setTimeout(attachEventListeners, 100);
