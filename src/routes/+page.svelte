<script>
  import { SignedIn, SignedOut } from "sveltefire";
  import ThreeScence from '$lib/ThreeScence.svelte'
</script>

<SignedOut>
  <h1>Welcome to 3d-scribe</h1>
  <h3>You need to sign in to modify models, you may explore community models</h3>
</SignedOut>

<SignedIn>
  <ThreeScence/>
</SignedIn>


<style>

</style>
