<script>
  import { user } from "src/store";
  import firebase from "firebase/app";
  import { onMount } from "svelte";

  let auth;
  onMount(() => {
    auth = firebase.auth();
  });

  const handleSubmit = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword($user.email, $user.password).catch(err => {
      console.log(err.code);
    });
  };
</script>

<style>
  .form {
    max-width: 25rem;
    margin: 0 auto;
    height: auto;
    border: 1px solid;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 2rem;
    margin-top: 10rem;
  }
</style>

<form on:submit={handleSubmit} class="form">
  <div class="field">
    <div class="control">
      <input
        bind:value={$user.email}
        class="input"
        type="text"
        placeholder="Netfang"
        name="email" />
    </div>
  </div>
  <div class="field">
    <div class="control">
      <input
        bind:value={$user.password}
        class="input"
        type="password"
        placeholder="Lykilorð"
        name="password" />
    </div>
  </div>
  <div class="field">
    <div class="control">
      <button class="button is-primary" type="submit">Skrá inn</button>
    </div>
  </div>
</form>
