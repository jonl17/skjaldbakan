<script>
  import Image from "../../components/image.svelte";
  import Role from "./_role.svelte";
  export let movie;
</script>

<style>
  .container {
    max-width: 55rem;
  }
  .info-wrap {
    display: grid;
    grid-gap: 2rem;
  }
  .top-bar {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
  }
  .top-bar > p {
    color: green;
    text-transform: uppercase;
  }
</style>

<div class="container">
  <em class={movie.wip ? 'red' : 'green'}>
    {movie.wip ? 'Verk í vinnslu' : 'Frumsýning'}
  </em>
  <div class="top-bar">
    <h1 class="title">{movie.titill}</h1>
    {#if movie.accepted}
      <p>Þessi mynd hefur verið valin á Skjaldborg 2020</p>
    {/if}
  </div>

  <figure>
    <Image imageLocation={movie.imageOneLocation} />
  </figure>
  <br />
  <div class="container info-wrap">
    <Role role={{ heading: 'Stutt lýsing', title: movie.stuttLysing }} />
    <Role role={{ heading: 'Framleiðandi', title: movie.framleidandi }} />
    <Role
      role={{ heading: 'Framleiðslufyrirtæki', title: movie.framleidslufyrirtaeki }} />
    <Role role={{ heading: 'Hljóðhönnun', title: movie.hljodhonnun }} />
    <Role role={{ heading: 'Klipping', title: movie.klipping }} />
    <Role role={{ heading: 'Kvikmyndataka', title: movie.kvikmyndataka }} />
    <Role role={{ heading: 'Tónskáld', title: movie.tonskald }} />
    <Role role={{ heading: 'Lengd í mín.', title: movie.lengd }} />
    <Role role={{ heading: 'Stikla', title: movie.hlekkurStikla }} />
    <Role role={{ heading: 'Kvikmynd', title: movie.hlekkurKvikmynd }} />
    <Role
      role={{ heading: 'Kvikmynd lykilorð', title: movie.kvikmyndLykilord }} />
    <Role role={{ heading: 'Athugasemd', title: movie.athugasemdir }} />
  </div>
</div>
