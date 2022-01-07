function attachEventListeners() {
  var addToCartButton = document.querySelector(
    ".CartSidebar--continueButton__3ds9k"
  );
  if (addToCartButton && FlutterAddToCart) {
    var childNode = document.getElementsByClassName(
      "CartItemsList--list__2ECvP"
    )[0].childNodes;
    addToCartButton.addEventListener("click", function (event) {
      event.preventDefault();
      const data_push = [];
      childNode.forEach(function (val, key) {
        if (
          val.className ==
          "CartItemsList--listItem__yImUQ CartItemsList--noItemDivider__1DF77"
        ) {
          newDomHtml = val.innerHTML;
          var newDom = document.createElement("div");
          newDom.innerHTML = newDomHtml;
          var price = newDom.querySelector(
            ".CartItem-module--details__2tnaB > span"
          ).innerText;

          data_push.push({
            url: newDom.querySelector(".CartItem-module--item__1kpm2 > a").href,
            image: newDom.querySelector(".CartImage-module--image__2poKf > img")
              .src,
            name: newDom
              .querySelector(".ProductName-module--productName__1AVFc")
              .innerText.trim(),
            quantity: parseInt(
              newDom.querySelector(".Select-module--select__5Uzpn").value
            ),
            price: price.substring(2),
            other_information: newDom.querySelector(
              ".CartItemDetails-module--value__2RODM"
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
