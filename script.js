// slider
// document.addEventListener("DOMContentLoaded", function() {
//   var elems = document.querySelectorAll(".slider");
//   var instances = M.Slider.init(elems);
// });

function init() {
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },

    // for autoplay
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },

  });

  let productsContainer = document.querySelector('.product-container');

  for(let i = 0; i < products.length; i++){
      productsContainer.innerHTML += ` <div class="card">
                        <img class="card-img-top" src="images/${products[i].imgURL}" alt="Card image cap">
                        <div class="card-body">
                            <h6 class="card-title">${products[i].productName}</h6>
                            <p class="card-text">
                                <ul class="product-details">
                                    ${products[i].productDetail}
                                </ul>
                            </p>
                            <p class="card-text product-price">Price: <span class="price">${products[i].price}</span></p>
                        </div>
                    </div>`;
  }
}
