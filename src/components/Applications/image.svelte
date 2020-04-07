<script>
  import { onMount } from "svelte";
  import { getImageSrc } from "../../firebase/storage";
  export let imageLocation;

  let src;
  onMount(async () => {
    src = await getImageSrc(imageLocation);
  });
</script>

<style>
  img {
    max-width: 20rem;
  }
</style>

{#if src}
  <img class="image" {src} alt={imageLocation} />
{/if}
