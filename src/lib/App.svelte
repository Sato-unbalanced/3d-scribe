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
</script>

<header>
  <nav>
  <h1 id="name">3d-Scribe</h1>
  <button class="btn" on:click={() =>{
    console.log("simulate saved changes")
  }}>Save</button>
  <button onclick="uploadFile()">Upload model</button>
  <input type="file" id="fileInput1" accept=".obj">
  <button class="btn" on:click={() => {
    goto("/fromDB")
  }}>Import object</button>
  <input type="file" id="fileInput" accept=".obj">
  <label class="switch">
    <input type="checkbox" id="colorSwitch">
    <span class="slider round"></span>
  </label>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScMRPpGrcudvx_BNKVxZFS-PK12TwyHUjve99LPM3brMg26PA/viewform?usp=dialog" target="_blank">Feed back</a>

  <SignedIn let:user let:signOut>
    <div class="current_user">
      <p> {user.displayName ?user.displayName: "not supplied"}</p>
      <button on:click={signOut}>Sign Out</button>
    </div> 
  </SignedIn>

  <SignedOut let:auth>
    <div class="siButton">
      <p class="type">GOOGLE POPUP</p>
      <button 
          on:click={() => 
              do_popup(auth, Gprovider, GoogleAuthProvider)}
          >Sign In with popup</button>
    </div>
  </SignedOut>
  </nav>
</header>

<style>
  #name{
    font-family: "Tan peral";
    text-align: center;
    font-size: 40px;
    padding: 0Px 20px 0px;
    margin: auto; 
  }

header{
  display: grid;
  grid-template-rows: 10%;
  position: relative;
  margin:0;
  padding: 0;
}

h1{
  float: left;
  text-align: center;
  margin: 0px 20px 20px 10px;
}
button{
  float:left;
  margin: 10px 20px 0px 20px; 
 
}
input{
  float: left;
  margin: 10px 20px 0px 20px;
}
.switch{
  float: left;
  margin: 10px 20px 0px 20px;
}
.siButton{
  float: right;
}
.btn{
  float: left;
}
.type{
  float: left;
}
p{
  float:left;
}
.current_user{
  float: right;
  margin: 0;
  padding: 0;
}
nav{
  grid-row: 1;
  padding-bottom: 1rem;
  padding-top: 1rem;
  margin: 0;
  height: 10%;
  width: 100%;
  z-index: 0;
  position: relative;
}


/*moved css here form app.css since does not work there*/

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #080808;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}


button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

/*stuff to styl the togle button*/
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider{
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
}

.slider:before{
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
}

input:checked + .slider {
  background-color: #080808;
}

input:focus + .slider{
  box-shadow: 0 0 1px #080808;
}



input:checked + .slider:before{
  transform: translateX(26px);
}

.slider.round{
  border-radius: 34px;
}

.slider.round:before{
  border-radius: 50%;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #080808;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

</style>