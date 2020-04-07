<script>
  import { msToDate } from "../../methods";
  export let application;
</script>

<section class="hero is-info">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">{application.titill}</h1>
      <h2 class="subtitle">{application.leikstjori}</h2>
      <div class="content">
        <p>{application.stuttLysing}</p>
      </div>
      <p>Sent inn {msToDate(application.createdAt)}</p>
    </div>
  </div>
</section>
