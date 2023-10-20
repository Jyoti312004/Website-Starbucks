
const productsELement = document.querySelector(".products");

const cardElements = document.querySelector(".cart-items");

const subtotalEl = document.querySelector(".subtotal");

const totalEleCart = document.querySelector(".total-items-in-cart");

const products = [
    {
      id: 0,
      name: "Caffè Mocha",
      price: 300,
      instock: 100,
      description:
        "Caffè Mocha with chocolate instead of coffee - a variation of a hot chocolate",
      imgSrc: "/newimage/t1.jpg",
    },
    {
      id: 1,
      name: "Choco Latte",
      price: 375,
      instock: 43,
      description:
      "Caffè latte is an espresso,steamed milk and layer of foam on top",
      imgSrc: "/newimage/t2.jpg",
    },
    {
      id: 2,
      name: "Hazelnut Cortado",
      price: 470,
      instock: 10,
      description:
      "A delicious combination of fresh milk, ice cream and roasted hazelnut",
      imgSrc: "/newimage/t3.jpg",
    },
    {
      id: 3,
      name: "Pumpkin Latte",
      price: 420,
      instock: 5,
      description:
        "Our signature espresso and steamed milk with the celebrated flavor combination of pumpkine",
      imgSrc: "/newimage/t4.jpg",
    },
    {
      id: 4,
      name: "Matcha Latte",
      price: 450,
      instock: 4,
      description:
        "A matcha latte contains finely grounded green Japanese tea leaves and milk.",
      imgSrc: "/newimage/t5.jpg",
    },
    {
      id: 5,
      name: "Caramel Latte",
      price: 350,
      instock: 40,
      description:
        "Mixture of espresso and caramel syrup with steamed milk on top",
      imgSrc: "/newimage/t6.jpg",
    },
  ];
  



function displayProducts() {

  products.forEach((product) => {
    productsELement.innerHTML += `
            <div class="item">
                <div class="item-container">
                    <div class="item-img">
                        <img src="${product.imgSrc}" alt="${product.name}">
                    </div>
                    <div class="desc">
                        <h2>${product.name}</h2>
                        <h2><small>Rs. </small>${product.price}</h2>
                        <p>
                            ${product.description}
                        </p>
                    </div>

                    <div class="add-to-cart" onclick="addToCart(${product.id})">
                        <img class="cartEle" src="/icons/pluss1.png" alt="add to cart">
                    </div>
                </div>
            </div>
        `;
  });
}

displayProducts();


let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateMyCart();

let size = cart.length;


function addToCart(id) {

  if (cart.some((item) => item.id === id)) {
    changeUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateMyCart();
}


function displaySubtotal() {
  let total = 0,
    ItemsTotal = 0;

  cart.forEach((item) => {
    total += item.price * item.numberOfUnits;
    ItemsTotal += item.numberOfUnits;
  });

  subtotalEl.innerHTML = `Subtotal (${ItemsTotal} items): Rs.${total.toFixed(2)}`;
  totalEleCart.innerHTML = ItemsTotal;
}


function displayCart() {
  cardElements.innerHTML = ""; 
  cart.forEach((item) => {
    cardElements.innerHTML += `
        <div class="cart-item">
            <div class="item-info" onclick="removeFromCarts(${item.id})">
                <img src="${item.imgSrc}" alt="${item.name}">
                <h4>${item.name}</h4>
            </div>
            <div class="unit-price">
                <small>Rs.</small>${+ item.price}
            </div>
            <div class="units">
                <div class="btn minus" onclick="changeUnits('minus', ${item.id})">-</div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn plus" onclick="changeUnits('plus', ${item.id})">+</div>           
            </div>
        </div>
      `;
  });
}



function updateMyCart() {
  displayCart();
  displaySubtotal();


  localStorage.setItem("CART", JSON.stringify(cart));
}




function removeFromCarts(id) {
  cart = cart.filter((item) => item.id !== id);

  updateMyCart();
}


function changeUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } 
      else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateMyCart();
}

let checkCart = document.querySelector(".checkout");
console.log(checkCart);

checkCart.addEventListener("click", () => {
  console.log(cart.length);
    if (cart.length >= 1) {
        window.open("/pages/checkout.html", "_self"); 
    } else {
        alert("Please add some items to the cart");
    }
});


