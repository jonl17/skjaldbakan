<script>
  import { getWholeCollection } from "../../firebase/firestore";
  import { onMount } from "svelte";
  import Application from "./application.svelte";

  let applications;
  onMount(async () => {
    applications = await getWholeCollection("movies");
    console.log(applications);
  });
</script>

<style>
  .wrap {
    display: grid;
    grid-gap: 25px;
  }
</style>

<div class="wrap">
  {#if applications}
    <h2 class="subtitle">{applications.length} innsendar umsóknir</h2>
    {#each applications as application}
      <Application {application} />
    {/each}
  {/if}
</div>
