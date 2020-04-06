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

<h1>Welcome</h1>
<button on:click={handleSignOut} class="button is-primary">Skrá út</button>
