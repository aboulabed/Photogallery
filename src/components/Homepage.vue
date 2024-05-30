<script setup>
import { onMounted } from "vue";
import imageCard from "../components/imageCard.vue";
import heading from "../components/heading.vue";
import { filtredImg, images, imgNumber } from "../store";

onMounted(() =>
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((json) => {
      images.value = json;
    })
);
function addImgs() {
  imgNumber.value += 15;
}
</script>
<template>
  <heading />
  <div class="imgages justify-center flex mb-5">
    <div class="container justify-center flex gap-1.5 flex-wrap flex-row">
      <imageCard v-for="image in filtredImg" :image="image" />
    </div>
  </div>
  <button class="pt-1 pb-1 pl-4 pr-4 rounded-2xl mx-1 my-6" @click="addImgs()">
    View More
  </button>
</template>
<style scoped>
button {
  background-color: #fff;
  color: #000;
  border: 1px solid #09ac6d;
  font-weight: bold;
  transition: 0.3s;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
button:hover {
  background-color: #09ac6d;
  color: #fff;
}
</style>
./imageCard.vue
