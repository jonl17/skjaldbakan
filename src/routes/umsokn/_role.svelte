<script>
  export let role;
</script>

<style>
  .subtitle {
    text-transform: none;
  }
</style>

{#if role.title !== '' && role.title}
  <div>

    <div>
      <p class="heading">{role.heading}</p>
      <p class="subtitle">{role.title}</p>
    </div>

  </div>
{/if}
