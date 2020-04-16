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
    max-width: 60rem;
    margin: 0 auto;
  }
  .subtitle {
    text-align: center;
    padding-bottom: 2rem;
  }
  .subtitle > span {
    color: green;
    font-weight: bold;
  }
</style>

<div class="wrap">
  {#if applications}
    <h2 class="subtitle">
      Það eru
      <span>{applications.length}</span>
      innsendar umsóknir
    </h2>
    {#each applications as application}
      <Application {application} />
    {/each}
  {/if}
</div>
