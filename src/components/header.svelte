<script>
  import Logout from "../components/Auth/signOut.svelte";
  import { COLORS } from "src/constants";
</script>

<style>
  .header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100px;
    background: var(--background);
  }
  img {
    height: 100%;
  }
  h1 {
    color: white;
    text-transform: uppercase;
    font-size: 1.5rem;
  }
</style>

<div style="--background:{COLORS.red}" class="header">
  <h1>
    <a href="/">Skaldbakan</a>
  </h1>
  <img
    src="https://res.cloudinary.com/dynkhs6v9/image/upload/v1586208195/5a0ad61a5a997e1c2cea10f5_kxxuw1.png"
    alt="skjaldbaka" />
  <Logout />
</div>
