import { computed, ref } from "vue";
export const active = ref("All");
export const searchContent = ref("");
export let images = ref([]);
export let buttonsContent = ref([]);
export let categoryNumber = ref(2);
export let imgNumber = ref(15);
export let imageId = ref<number>(0);
export const filtredImg = computed(() => {
  return images.value
    .filter((img) => {
      return (
        img.title.includes(searchContent.value) &&
        (active.value == img.albumId || active.value == "All")
      );
    })
    .filter((img, index) => index <= imgNumber.value);
});
export const filtredAlbums = computed(() => {
  return buttonsContent.value.filter(
    (album, index) => index <= categoryNumber.value
  );
});
