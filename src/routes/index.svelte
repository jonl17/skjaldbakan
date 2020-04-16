<script>
  import Applications from "../components/Applications/index.svelte";
  import { authenticated } from "../store";

  console.log($authenticated);
</script>

<style>
  .title {
    text-align: center;
  }
</style>

<h1 class="title">
  Velkomin/n {$authenticated ? $authenticated.u.email : null}
</h1>
<Applications />
