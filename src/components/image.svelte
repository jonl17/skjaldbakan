<script>
  import { onMount } from "svelte";
  import { getImageSrc } from "../firebase/storage";
  export let imageLocation;

  let src;
  onMount(async () => {
    src = await getImageSrc(imageLocation);
  });
</script>

<style>
  img {
    width: 100%;
  }
</style>

{#if src}
  <img class="image" {src} alt={imageLocation} />
{/if}
