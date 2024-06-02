<script setup lang="ts">
import { ref } from "vue";
import { imageId } from "@/store";
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

function addToCart(imgId: number) {
  imageId.value = imgId;
}
</script>
<template>
  <div class="about mt-6 flex justify-center">
    <div
      class="flex max-sm:flex-col max-sm:items-center max-sm:text-center max-lg:flex-col max-lg:items-center max-lg:text-center"
    >
      <div
        class="image w-[45%] max-sm:w-[50%] ml-6 max-lg:w-[50%] max-sm:mb-4 max-lg:mb-6"
      >
        <img
          :src="images[+$route.params.id - 1].url"
          class="w-11/12 max-sm:w-full max-lg:w-full rounded-lg"
        />
      </div>
      <div
        class="description content-between flex flex-wrap max-w-[50%] max-sm:max-w-[85%] max-lg:max-w-[85%]"
      >
        <div class="top max-sm:mb-8 max-lg:mb-8">
          <h1 class="text-3xl">
            {{ images[+$route.params.id - 1].title }}
          </h1>
          <p
            class="mt-5 text-xl max-w-[90%] max-sm:max-w-full max-lg:max-w-full leading-[30px]"
          >
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
              @click="addToCart(images[+$route.params.id - 1].id)"
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
