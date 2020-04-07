<script context="module">
  export const preload = async (page, session) => {
    const { id } = page.params;
    return { id };
  };
</script>

<script>
  import { onMount } from "svelte";
  import { getSingleMovie } from "../../firebase/firestore";
  import Movie from "./_movie.svelte";
  export let id;
  let movie;

  onMount(async () => {
    movie = await getSingleMovie(id);
  });
</script>

{#if movie}
  <Movie {movie} />
{/if}
