<script>
  import Image from "../../components/image.svelte";
  import Role from "./_role.svelte";
  export let movie;

  console.log(movie.lengd);
</script>

<style>
  .container {
    max-width: 55rem;
  }
  .info-wrap {
    display: grid;
    grid-gap: 2rem;
  }
</style>

<div class="container">
  <em>{movie.wip ? 'Verk í vinnslu' : 'Frumsýning'}</em>
  <h1 class="title">{movie.titill}</h1>
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

  </div>
</div>
