<script>
  import { msToDate } from "../../methods";
  import Applicant from "./applicant.svelte";
  import Image from "../image.svelte";
  export let application;
</script>

<style>
  figure {
    max-width: 20rem;
    box-sizing: border-box;
    padding: 0 1rem;
  }
</style>

<section class="media">
  <figure class="media-left">
    <Image imageLocation={application.imageOneLocation} />
  </figure>
  <div class="media-content">
    <div class="container">
      <em class="wip">{application.wip ? 'Verk í vinnslu' : 'Frumsýning'}</em>
      <h1 class="title">{application.titill}</h1>
      <h2 class="subtitle">{application.leikstjori}</h2>

      <div class="content">
        <p>{application.stuttLysing}</p>
      </div>
      <em class="level-left">Sent inn {msToDate(application.createdAt)}</em>
      <Applicant userId={application.userId} />

      <br />
      <a href={'/umsokn/' + application.id} class="button">Skoða</a>
    </div>

  </div>
</section>
