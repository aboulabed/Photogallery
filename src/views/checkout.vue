<template>
  <div class="checkout flex justify-center">
    <div
      class="overlay w-full h-full top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-[2] hidden"
      style="transition: 0.3s"
      ref="overlay"
    ></div>
    <div
      style="transition: 0.3s"
      class="paysuccesful text-center absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-white w-[350px] h-[210px] shadow-[21px_21px_15px_-22px_rgba(110,99,110,0.7)] rounded-md hidden"
      ref="paysuccesful"
    >
      <h2 class="block mt-8 text-xl font-bold">
        Your purchase was completed successfully
      </h2>
      <i
        class="fa-solid fa-check block my-3 rounded-[50%] text-[#58ef88] text-xl font-black"
      ></i
      ><router-link class="block" to="../"
        ><button
          class="py-3 pl-4 pr-4 bg-[#09ac6d] text-[#fff] rounded-md font-bold"
        >
          Continue Shopping
        </button></router-link
      >
    </div>
    <div
      class="container max-sm:flex-col-reverse max-lg:flex-col-reverse flex justify-between"
    >
      <div class="left mt-8 w-[600px] max-lg:w-full max-sm:mt-20 max-lg:mt-20">
        <div class="delivery">
          <div class="head text-2xl font-bold max-sm:text-center">
            <h2>Delivery</h2>
          </div>
          <div class="select mt-4">
            <div class="selector cursor-pointer flex px-3 py-4 bg-white">
              <div class="input flex items-center">
                <input
                  type="radio"
                  class="cursor-pointer"
                  checked
                  name="delivery"
                  id="ship"
                />
              </div>
              <div class="label w-full ml-2 text-lg" style="font-weight: 600">
                <label class="cursor-pointer" for="ship"><p>Ship</p></label>
              </div>
            </div>
            <div class="selector cursor-pointer flex px-3 py-4 bg-white">
              <div class="input flex items-center">
                <input
                  type="radio"
                  class="cursor-pointer"
                  name="delivery"
                  id="pick-up"
                />
              </div>
              <div class="label w-full ml-2 text-lg" style="font-weight: 600">
                <label class="cursor-pointer" for="pick-up"
                  ><p>Pick Up</p></label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="name mt-4">
          <input
            type="text"
            class="f-name w-[295px] mr-[5px] py-3 px-2 focus:outline-none rounded-md"
            placeholder="First Name"
          />
          <input
            type="text"
            class="l-name w-[295px] max-lg:w-[calc(100% / 2 - 5px)] ml-[5px] py-3 px-2 focus:outline-none rounded-md"
            placeholder="Last Name"
          />
        </div>
        <div class="address w-full mt-4">
          <input
            placeholder="Address"
            type="text"
            class="w-full py-3 px-2 focus:outline-none rounded-md"
          />
        </div>
        <div class="city mt-4">
          <input
            type="text"
            class="f-name w-[295px] mr-[5px] py-3 px-2 focus:outline-none rounded-md"
            placeholder="City"
          />
          <input
            type="number"
            class="l-name w-[295px] ml-[5px] py-3 px-2 focus:outline-none rounded-md"
            placeholder="Postal Code"
          />
        </div>
        <div class="Payment mt-8">
          <h2 class="text-2xl font-bold max-sm:text-center">Payment</h2>
          <div class="card-number mt-4">
            <h4 class="text-lg mb-2 max-sm:text-center">Card Number</h4>
            <input
              type="number"
              class="w-full py-3 px-2 focus:outline-none rounded-md"
              placeholder="xxxx xxxx xxxx xxxx"
            />
          </div>
          <div class="card-details flex mt-4">
            <div class="expiration">
              <h4 class="text-lg mb-2 max-sm:text-center">Expiration</h4>
              <input
                type="text"
                class="exp w-[295px] mr-[5px] py-3 px-2 focus:outline-none rounded-md"
                placeholder="MM / YY"
              />
            </div>
            <div class="security-num">
              <h4 class="text-lg mb-2 max-sm:text-center">
                Card Security Number
              </h4>
              <input
                type="text"
                class="csn w-[295px] ml-[5px] py-3 px-2 focus:outline-none rounded-md"
                placeholder="CSC"
              />
            </div>
          </div>
        </div>
        <div class="pay-now">
          <button
            class="py-3 mt-8 w-[100%] pl-4 pr-4 mx-1 bg-[#fff] text-[#000] hover:bg-[#09ac6d] hover:text-[#fff]"
            @click="payNow()"
          >
            Pay Now
          </button>
        </div>
      </div>
      <div class="rigit mt-8 w-1/3 max-sm:w-full max-lg:w-full">
        <div
          class="product-details max-sm:justify-center max-lg:justify-center flex items-center"
        >
          <img
            class="w-[64px] rounded-md"
            :src="images[imageId - 1].url"
            alt=""
          />
          <h2 class="ml-4 text-xl">
            {{ images[imageId - 1].title.slice(0, 40) }}
          </h2>
          <h2 class="ml-8 text-xl price" ref="price">
            {{ images[imageId - 1].id * 5 }}$
          </h2>
        </div>
        <div class="disscount mt-6">
          <input
            class="w-[81%] py-4 px-2 rounded-lg"
            type="text"
            placeholder="Add Disscount Code"
            v-model="inputDisscount"
          />
          <button
            class="w-[15%] ml-4 bg-[#bbb] py-4 px-2 rounded-lg text-white"
            style="font-weight: bold"
            @click="disscount(images[imageId - 1].id)"
          >
            Apply
          </button>
        </div>
        <div class="price flex justify-between mt-8">
          <h2 style="font-weight: lighter">Subtotal</h2>
          <h2 style="font-weight: bold">{{ images[imageId - 1].id * 5 }}$</h2>
        </div>
        <div class="shipping flex justify-between mt-2">
          <h2 style="font-weight: lighter">Shipping</h2>
          <h2 style="font-weight: bold">5$</h2>
        </div>
        <div class="total flex justify-between mt-3">
          <h2 class="text-xl" style="font-weight: bold">Total</h2>
          <h2 class="text-2xl" style="font-weight: bold">
            {{ 5 + images[imageId - 1].id * 5 }}$
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { imageId } from "@/store";
import { ref } from "vue";
let price = ref(null);
let overlay = ref(null);
let paysuccesful = ref(null);
let inputDisscount = ref();
let images = ref<
  [
    object: {
      albumId: number;
      id: number;
      thumbnailUrl: string;
      title: string;
      url: string;
    }
  ]
>([{ albumId: 0, id: 0, thumbnailUrl: "", title: "", url: "" }]);
fetch(`https://jsonplaceholder.typicode.com/photos`)
  .then((response) => response.json())
  .then((json) => {
    images.value = json;
  });
function disscount(imagePrice: number) {
  if (
    inputDisscount.value !== undefined ||
    typeof inputDisscount.value === typeof Number
  ) {
    price.value.innerHTML = `${(imagePrice * 5) / 2}$`;
    inputDisscount.value = "";
  } else {
    inputDisscount.value = "Invalid Code";
  }
}
function payNow() {
  overlay.value.classList.remove("hidden");
  overlay.value.classList.add("fixed");
  paysuccesful.value.classList.remove("hidden");
  paysuccesful.value.classList.add("block");
}
</script>

<style scoped>
.selector:nth-child(1) {
  border-radius: 6px 6px 0 0;
  border: 1px solid #ccc;
}
.selector:nth-child(2) {
  border-style: solid;
  border-color: #ccc;
  border-width: 0 1px 1px 1px;
  border-radius: 0 0 6px 6px;
}
.left {
  .name {
    input {
      border: 1px solid #ccc;
    }
  }
  .address {
    input {
      border: 1px solid #ccc;
    }
  }
}
.pay-now button {
  transition: 0.3s;
}
.paySuccseful {
  background-color: white;
  width: 250px;
  height: 250px;
  justify-self: center;
  align-self: center;
}
@media not all and (min-width: 1024px) {
  .f-name,
  .l-name {
    width: calc(50% - 5px);
  }
  /* .exp, .csn {
    width:379px
  } */
}
</style>
