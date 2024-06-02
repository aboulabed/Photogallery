<script setup lang="ts">
import {
  active,
  filtredAlbums,
  buttonsContent,
  categoryNumber,
} from "../store";
import { onMounted } from "vue";
onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((json) => {
      buttonsContent.value = json;
    });
});

function switchFunc(content:string) {
  active.value = content;
}
function addCategory() {
  categoryNumber.value += 3;
}
</script>
<template>
  <div class="heading flex items-center mt-14 flex-col">
    <h1 class="text-4xl font-bold mb-2">Photo Gallery</h1>
    <p class="text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorum at
      reiciendis earum.
    </p>
  </div>
  <div class="choose items-center flex-wrap flex justify-center mt-10 mb-5">
    <button
      @click="switchFunc('All')"
      class="pt-1 pb-1 pl-4 pr-4 rounded-2xl mx-1"
      :class="{ active: active == 'All' }"
    >
      All
    </button>
    <button
      v-for="content in filtredAlbums"
      @click="switchFunc(content.id)"
      class="pt-1 pb-1 mt-2 pl-4 pr-4 rounded-2xl mx-1"
      :class="{ active: active === content.id }"
    >
      {{ content.title }}
    </button>
    <button class="pt-1 pb-1 pl-4 pr-4 rounded-2xl mx-1" @click="addCategory()">
      +
    </button>
  </div>
</template>
<style>
.heading p {
  color: #9c9da1;
}
.choose .active {
  background-color: #09ac6d;
  color: #fff;
}
.choose button {
  background-color: #fff;
  color: #000;
  border: 1px solid #09ac6d;
  font-weight: bold;
  transition: 0.3s;
}
.choose button:hover {
  background-color: #09ac6d;
  color: #fff;
}
</style>
