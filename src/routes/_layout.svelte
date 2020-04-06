<script>
  import firebase from "firebase/app";
  import { onMount } from "svelte";

  onMount(() => {
    const db = firebase.firestore();
    console.log(db);
  });
</script>

<svelte:head>
  <style src="../sass/config.scss">

  </style>
</svelte:head>

<slot />
