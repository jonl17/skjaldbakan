<script>
  import { onMount } from "svelte";
  import firebase from "firebase/app";
  import { authenticated } from "src/store";

  let auth;
  onMount(() => {
    auth = firebase.auth();
  });

  const handleSignOut = () => {
    auth.signOut();
    authenticated.set(false);
  };
</script>

{#if $authenticated}
  <button on:click={handleSignOut} class="button">Skrá út</button>
{/if}
