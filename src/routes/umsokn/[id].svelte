<script context="module">
  export const preload = async (page, session) => {
    const { id } = page.params;
    return { id };
  };
</script>

<script>
  import { onMount } from "svelte";
  import { getSingleMovie } from "../../firebase/firestore";
  export let id;
  let movie;

  onMount(async () => {
    movie = await getSingleMovie(id);
  });
</script>

{#if movie}
  <h1 class="title">{movie.titill}</h1>
{/if}
