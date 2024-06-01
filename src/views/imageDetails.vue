<script setup>
import { ref } from "vue";
import { imageId } from "@/store";
let images = ref([]);

fetch(`https://jsonplaceholder.typicode.com/photos`)
  .then((response) => response.json())
  .then((json) => {
    images.value = json;
  });

function addToCart(imgId) {
  imageId.value = imgId;
}
</script>
<template>
  <div class="about mt-6 flex justify-center">
    <div class="container flex">
      <div class="image w-1/2">
        <img
          :src="images[$route.params.id - 1].url"
          class="w-11/12 rounded-lg"
        />
      </div>
      <div class="description content-between flex flex-wrap max-w-[50%]">
        <div class="top">
          <h1 class="text-3xl">
            {{ images[$route.params.id - 1].title }}
          </h1>
          <p class="mt-5 text-xl max-w-[90%] leading-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            eaque incidunt aliquid fugiat sit illo dicta voluptas tempora,
            voluptates, eveniet consequatur, quibusdam iste vel libero eius?
            Laudantium impedit rerum, veritatis culpa maxime ipsam ducimus
            corporis eveniet fugiat et assumenda vero atque iusto illo. Ratione
            consectetur sapiente quibusdam nostrum eum reprehenderit!
          </p>
        </div>
        <div class="bottom w-full">
          <router-link :to="`../cart`"
            ><button
              class="pt-1 w-[95%] pb-1 pl-4 pr-4 rounded-2xl mx-1 bg-[#fff] text-[#000] hover:bg-[#09ac6d] hover:text-[#fff]"
              @click="addToCart(images[$route.params.id - 1].id)"
            >
              Add To Cart
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.description {
  .top {
    h1 {
      font-weight: bold;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }
    p {
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }
  }

  .bottom {
    button {
      border: 1px solid #09ac6d;
      font-weight: bold;
      transition: 0.3s;
    }
  }
}
</style>
