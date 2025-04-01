<script>
  import { signInAnonymously, signInWithPopup } from "firebase/auth";
  import { goto } from "$app/navigation";
  import { SignedIn, SignedOut } from "sveltefire";
  import { GoogleAuthProvider} from "firebase/auth";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  const Gprovider = new GoogleAuthProvider();

  let signedinuser = {};
  let token = "";

  const do_popup = async (auth, provider, type) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = type.credentialFromResult(result);
                token = credential.accessToken;
                signedinuser = result.user;
                console.log("user has loged in", signedinuser)
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = type.credentialFromError(error);
                console.error("Auth error", {
                    errorCode,
                    errorMessage,
                    email,
                    credential,
                });
            });
    };

   

  onMount(()=>{
    var root = document.documentElement;
    var checkBox = document.getElementById('colorSwitch');
    const buttons = document.querySelectorAll('button');
    checkBox.addEventListener('input', function(){
      console.log(this.checked);
      if(this.checked)
      {
        root.style.setProperty('background-color',"#080808");
        root.style.setProperty('color','#ffffff');
        buttons.forEach(button => {
          button.style.backgroundColor = '#080808';
        });
        console.log("checked");
      }
      else
      {
        root.style.setProperty('background-color',"#fefefe");
        root.style.setProperty('color', '#080808');
        buttons.forEach(button => {
          button.style.backgroundColor = '#bababa';
        });
      }
    });
   });

   function uploadFile()
   {

   }
</script>

<header>
  <nav>
  <h1 id="name">3d-Scribe</h1>

  <label class="switch">
    <input type="checkbox" id="colorSwitch">
    <span class="slider round"></span>
  </label>

  <a href="https://docs.google.com/forms/d/e/1FAIpQLScMRPpGrcudvx_BNKVxZFS-PK12TwyHUjve99LPM3brMg26PA/viewform?usp=dialog" target="_blank">Feedback</a>


  <button class="btn" on:click={() =>{
    console.log("simulate saved changes")
  }}>Save</button>

  <button on:click={ uploadFile}>Upload model</button>

  <button class="btn" on:click={() => {
    goto("/fromDB")
  }}>Import object</button>

  <SignedIn let:user let:signOut>
    <form id="upload_form">
      <label for="fileInput">Select file:</label>
      <input type="file" id="fileInput" name="fileInput" accept='.obj'>
    </form>

    <div id = "color_select">
      <label for="selectColor">Scene color:</label>
      <input type="color" id="selectColor" name="selectColor" value="#080808">
    </div>
    
    <div class="current_user">
      <p> {user.displayName ?user.displayName: "not supplied"}</p>
      <button on:click={signOut}>Sign Out</button>
    </div> 
  </SignedIn>
  
  <SignedOut let:auth>
    <div class="siButton">
      <p class="type">Google POPUP:</p>
      <button 
          on:click={() => 
              do_popup(auth, Gprovider, GoogleAuthProvider)}
          >Sign In</button>
    </div>
  </SignedOut>
  </nav>
</header>

<style>
  #name
  {
    font-family: "Tan peral";
    font-size: 4vh;
    margin: 0em 0.5em;
    text-align: center;
    width: fit-content;
  }
  p{
    font-size: 1em;
    font-family: "Tan peral";
  }
  #color_select
  {
    margin: 0em 0.5em;
    display: grid;
    grid-template-columns: auto auto;
    place-items: center;
  }
  header
  {
    display: grid;
    grid-template-rows: auto;
    /*grid-template-rows: 10%;*/
    position: relative;
    height: 10vh;
  }
  input
  {
    margin: 0em 0.5em;
  }
  #fileInput
  {
    width: fit-content;
  }
  label
  {
    font-family: "Tan peral";
    font-size: 1em;
  }
  .current_user
  {
    margin: 0em 0.5em;
    display: grid;
    grid-template-columns: auto auto;
    place-items: center;
  }
  #selectColor
  {
    place-content: center;
  }
  #upload_form{
    margin: 0em 0.5em;
    display: grid;
    grid-template-columns: auto auto;
    place-items: center;
  }
  .siButton{
    display: grid;
    grid-template-columns: auto auto;
    place-items: center;
  }
  nav
  {
    display: grid;
    /*grid-row: 0;*/
    grid-template-columns: auto auto auto auto auto auto auto auto auto;
    height: 100%;
    position: relative;
    width: 100%;
    z-index: 0;
    place-items: center;
  }
/*moved css here form app.css since does not work there*/

  :root 
  {
    font-family: "Tan peral", Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #080808;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a 
  {
    color: #646cff;
    font-family: "Tan peral";
    font-size: 1em;
    margin: 0em 0.5em;
    max-width: fit-content;
    place-content: center;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  button 
  {
    background-color: #1a1a1a;
    border: 1px solid transparent;
    border-radius: 12px;
    cursor: pointer;
    float:right;
    font-family: "Tan peral";
    font-size: 1em;
    margin: 0em 0.5em;
    max-height: fit-content;
    max-width: fit-content;
    padding: 0.6em 1em;
    transition: border-color 0.25s;
  }
  button:hover 
  {
    border-color: #646cff;
  }
  button:focus,button:focus-visible 
  {
    outline: 4px auto -webkit-focus-ring-color;
  }

/*stuff to styl the togle button*/
  .switch 
  {
    display: inline-block;
    height: 34px;
    position: relative;
    margin: 0em 0.5em;
    width: 60px;
  }

  .switch input 
  {
    opacity: 0;
    height: 0;
    width: 0;
  }

  .slider
  {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
  }

  .slider:before
  {
    background-color: white;
    bottom: 4px;
    content: "";
    height: 26px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 26px;
  }

  input:checked + .slider 
  {
    background-color: #080808;
  }

  input:focus + .slider
  {
    box-shadow: 0 0 1px #080808;
  }

  input:checked + .slider:before
  {
    transform: translateX(26px);
  }


  .slider.round
  {
    border-radius: 34px;
  }

  .slider.round:before
  {
    border-radius: 50%;
  }

  @media (prefers-color-scheme: light) 
  {
    :root 
    {
      color: #080808;
      background-color: #ffffff;
    }
    a:hover 
    {
    color: #747bff;
    }
    button 
    {
      background-color: #f9f9f9;
    }
  }
</style>