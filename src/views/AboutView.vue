<script setup>
import { onMounted, ref } from "vue";

let images = ref([]);

  fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then((response) => response.json())
    .then((json) => {
      images.value = json;

    });
    
</script>
<template>
  <div class="about m-8">
    <img :src="images[$route.params.id].url" style="width: 200px; border-radius: 6px;"/>
    <h1 class="text-xl mt-4">Image Name:{{ images[$route.params.id].title }}</h1>
</div>
</template>

<style>

</style>
