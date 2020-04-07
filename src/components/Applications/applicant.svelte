<script>
  import { onMount } from "svelte";
  import { getSingleDocument } from "../../firebase/firestore";
  export let userId;
  let applicant;
  onMount(async () => {
    applicant = await getSingleDocument("applicants", userId);
  });
</script>

{#if applicant}
  <div>
    <p>Tengiliður: {applicant.fulltnafn}</p>
  </div>
{/if}
