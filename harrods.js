// link https://www.harrods.com/en-ng/

function attachEventListeners() {
  const cartButtons = document.querySelectorAll(".e1fbjroo5.er62km90");
  const addToCartButton = cartButtons[0];
  const addToCartButton2 = cartButtons[1];

  if (addToCartButton && FlutterAddToCart) {
    const childNode =
      document.getElementsByClassName("e1fbjroo15")[0].childNodes;
    addToCartButton.addEventListener("click", function (event) {
      event.preventDefault();
      const data_push = [];
      childNode.forEach(function (val, key) {
        if (val.className.trim() == "css-7jl1xd e1fbjroo8") {
          newDomHtml = val.innerHTML;
          const newDom = document.createElement("div");
          newDom.innerHTML = newDomHtml;
          let price;
          if (newDom.querySelector(".css-1ra2v28.e1h3wjaz2")) {
            price = parseInt(
              newDom
                .querySelector(".css-1ra2v28.e1h3wjaz2")
                .innerText.trim()
                .substring(1)
                .replaceAll(",", "")
            );
          } else {
            price = parseInt(
              newDom
                .querySelector(".css-1d3kywv.e1h3wjaz1")
                .innerText.trim()
                .substring(1)
                .replaceAll(",", "")
            );
          }
          data_push.push({
            url: newDom.querySelector(".css-14fkdlu.eae6h7r32").href,
            image: newDom.querySelector(".eae6h7r6.css-16plnkp.e1ji98wl0").src,
            name: newDom
              .querySelector(".css-mt1w4c.eae6h7r10")
              .innerText.trim(),
            quantity: parseInt(
              newDom
                .querySelector(
                  ".css-qpixi5.eae6h7r17[data-test='bag-item-quantity']"
                )
                .innerText.trim()
            ),
            price: price,
            other_information: `Size:${newDom
              .querySelector(".css-qpixi5.eae6h7r17")
              .innerText.trim()}`,
          });
        }
      });
      FlutterAddToCart.postMessage(JSON.stringify(data_push));
    });
  }
  if (addToCartButton2 && FlutterAddToCart) {
    const childNode =
      document.getElementsByClassName("e1fbjroo15")[0].childNodes;
    addToCartButton.addEventListener("click", function (event) {
      event.preventDefault();
      const data_push = [];
      childNode.forEach(function (val, key) {
        if (val.className.trim() == "mini-bag-product-css-7jl1xd e1fbjroo8") {
          newDomHtml = val.innerHTML;
          const newDom = document.createElement("div");
          newDom.innerHTML = newDomHtml;
          let price;
          if (newDom.querySelector(".css-1ra2v28.e1h3wjaz2")) {
            price = parseInt(
              newDom
                .querySelector(".css-1ra2v28.e1h3wjaz2")
                .innerText.trim()
                .substring(1)
                .replaceAll(",", "")
            );
          } else {
            price = parseInt(
              newDom
                .querySelector(".css-1d3kywv.e1h3wjaz1")
                .innerText.trim()
                .substring(1)
                .replaceAll(",", "")
            );
          }
          data_push.push({
            url: newDom.querySelector(".css-14fkdlu.eae6h7r32").href,
            image: newDom.querySelector(".eae6h7r6.css-16plnkp.e1ji98wl0").src,
            name: newDom
              .querySelector(".mini-bag-product__description")
              .innerText.trim(),
            quantity: parseInt(
              newDom.querySelector(".css-qpixi5.eae6h7r17").innerText.trim()
            ),
            price: price,
            other_information: `Size:${newDom
              .querySelector(".css-qpixi5.eae6h7r17")
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
