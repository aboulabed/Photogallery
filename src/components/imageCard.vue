<script>
export default {
  props: ["image"],
};
</script>
<template>
  <div class="img-sec relative">
    <img :src="image.url" alt="img" class="img rounded-md h-full" />
    <router-link :to="'image/' + image.id">
      <button
        class="content transt rounded-lg absolute left-1/2 z-10 flex text-white top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 justify-center items-center"
      >
        Buy Now
      </button>
    </router-link>
  </div>
</template>
<style>
.img-sec {
  width: calc(100% / 4 - 5px);
  transition: 0.3s;
}

.img-sec .content {
  background-color: rgb(0 0 255 / 30%);
  font-weight: bold;
  transition: 0.3s;

  font-size: 0px;
}
.img-sec:hover .content {
  font-size: 24px;
  width: 100%;
  height: 100%;
}
.img-sec:hover {
  scale: 1.2;
  z-index: 20;
}
</style>
