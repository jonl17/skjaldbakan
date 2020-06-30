<script>
  import { onMount } from "svelte";
  import { getSingleApplicant } from "../../firebase/firestore";
  export let userId;
  let applicant;
  onMount(async () => {
    applicant = await getSingleApplicant(userId);
  });
</script>

{#if applicant}
  <div>
    <p>Tengiliður: {applicant.fulltnafn}</p>
    <p>Netfang: {applicant.netfang}</p>
  </div>
{/if}
