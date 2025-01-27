<script>
  import { SignedIn, SignedOut } from "sveltefire";
  import ThreeScence from '$lib/ThreeScence.svelte'
</script>

<SignedOut>
  <div id="content">
    <h1>Welcome to 3d-scribe</h1>
    <p><br>You need to sign in to load models and modify them, you may explore the community models.</p>
  </div>
</SignedOut>

<SignedIn>
  <ThreeScence/>
</SignedIn>

<style>
  #content{
    display: grid;
    place-items: center;
    font-family: "Tan peral";
  }
  h1{
    font-family: inherit;
    font-size: 40px;
  }
  p{
    font-family: inherit;
    font-size: 20px;
  }

</style>