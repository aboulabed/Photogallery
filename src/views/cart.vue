<template>
  <div class="cart flex justify-center mt-20 ml-10">
    <div class="container">
      <div class="heading mb-3 justify-between items-end flex">
        <h1 class="text-4xl">Your Cart</h1>

        <router-link clas="text-2xl" to="../">Continue shopping</router-link>
      </div>
      <div class="head flex pt-3 pb-2">
        <h2 class="w-[70%]">PRODUCT</h2>
        <h2 class="w-[20%]">QUANTITY</h2>
        <h2 class="w-[10%] text-right">TOTAL</h2>
      </div>
      <div class="product-details pb-20 flex mt-5">
        <div class="product w-[70%] flex">
          <div class="image w-24 rounded-sm overflow-hidden">
            <img class="product-img" :src="images[imageId - 1].url" alt="" />
          </div>
          <div class="product-title ml-6 text-xl">
            <h2>{{ images[imageId - 1].title }}</h2>
          </div>
        </div>
        <div class="product-quantity w-[20%] h-[50px]">
          <div class="input w-[140px] h-[100%] flex bg-white">
            <button
              class="w-[45px]"
              @click="
                subtract($event.target.nextSibling, images[imageId - 1].id)
              "
            >
              -
            </button>
            <input
              type="text"
              class="cursor-text bg-white text-center w-[50px]"
              disabled
              value="1"
            />
            <button
              class="w-[45px]"
              @click="
                add($event.target.previousSibling, images[imageId - 1].id)
              "
            >
              +
            </button>
          </div>
        </div>
        <div class="total-price w-[10%] text-end text-xl">
          {{ images[imageId - 1].id * 5 }}
        </div>
      </div>
      <div class="checkout mt-32 w-[450px]">
        <router-link to="../checkout">

          <button
            class="pt-1 pb-1 pl-4 pr-4 rounded-sm mx-1 bg-[#fff] text-[#000] hover:bg-[#09ac6d] hover:text-[#fff]"
          >
            Proceed to Checkout
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { imageId } from "@/store";
import { ref } from "vue";
let images = ref([]);
fetch(`https://jsonplaceholder.typicode.com/photos`)
  .then((response) => response.json())
  .then((json) => {
    images.value = json;
  });
function subtract(element, id) {
  let quantity = document.querySelector(".total-price");

  if (element.value == 1) {
  } else {
    element.value--;
    quantity.innerHTML = `${id * 5 * element.value}$ `;
  }
}
function add(element, id) {
  let quantity = document.querySelector(".total-price");
  element.value++;
  quantity.innerHTML = `${id * 5 * element.value}$ `;
}
</script>

<style scoped>
.head {
  border-bottom: 1px solid #c9c9c9;
  h2 {
    color: #676767;
  }
}
.product-details {
  border-bottom: 1px solid #c9c9c9;
  .product-quantity {
    .input {
      border: 1px solid black;
    }
  }
}
.checkout button {
transition: 0.3s;
}
</style>
