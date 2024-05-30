<script setup lang="ts">
import { searchContent } from "../store";
</script>

<template>
  <nav
    class="bg-white text-white flex items-center justify-between pt-2 pb-2 pr-5 pl-5"
  >
    <div
      class="search-container flex items-center rounded-xl relative mt-2 mb-2 mr-0 ml-0"
    >
      <input
        type="text"
        class="p-2 text-black border-transparent rounded-xl mr-2"
        v-model="searchContent"
        placeholder="Search..."
      />
      <i class="fa-solid fa-magnifying-glass mr-1 absolute text-xl"></i>
    </div>
    <div class="profile flex items-center">
      <img
        src="../assets/profile.png"
        alt="Profile Photo"
        style="max-width: 65px"
      />
      <i class="fa-regular fa-bell mr-1 text-xl"></i>
    </div>
  </nav>
</template>
<style></style>
