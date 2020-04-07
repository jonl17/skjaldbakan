<script>
  import Login from "src/components/Auth/login.svelte";
  import { onMount } from "svelte";
  import firebase from "firebase/app";
  import { user } from "rxfire/auth";
  import { authenticated } from "src/store";
  import Header from "src/components/header.svelte";
  import PageWrap from "src/components/pageWrap.svelte";

  let loaded = false;
  let auth;
  onMount(() => {
    auth = firebase.auth();
    user(auth).subscribe(u => {
      if (u) {
        if (u.uid === process.env.fbMasterAccount) {
          authenticated.set({
            auth: true,
            type: "master",
            u
          });
        } else if (u.uid === process.env.fbMinionAccount) {
          authenticated.set({
            auth: true,
            type: "minion",
            u
          });
        } else {
          authenticated.set(false);
        }
      }
      loaded = true;
    });
  });
</script>

<svelte:head>
  <style src="../sass/config.scss">

  </style>
</svelte:head>

<Header />
{#if $authenticated}
  <PageWrap>
    <slot />
  </PageWrap>
{:else if loaded}
  <Login />
{:else}
  <p>Hleður...</p>
{/if}
