<script>
  import { onMount } from 'svelte';
  import { goto } from "$app/navigation";
let icon = "\u003E"
/*onMount(() =>{
var collapsibles = document.getElementsByClassName("collapsible");
for(var i = 0; i < collapsibles.length; i++)
{
  collapsibles[i].addEventListener('click', function() {
    this.classList.toggle("active");
    var content2 = this.nextElementSibling;
    if(content2.style.maxWidth)
    {
      icon = "\u003E";
      content2.style.maxWidth = null;
      content2.style.maxHeight = null;
    }
    else
    {
      icon = "\u003C"
      content2.style.maxWidth = content2.scrollWidth + "px";
      content2.style.maxHeight = "100%";

    }
  });
}
});*/
</script>

<header>
  <nav>
  <h1>3d-Scribe</h1>
  <button>backgound color</button>
  <button>save</button>
  <button>load object</button>
  <button class="btn" on:click={() => {
    goto("/fromDB")
  }}>upload object</button>
  <input type="file" id="fileInput" accept=".obj">
  <label class="switch">
    <input type="checkbox">
    <span class="slider round"></span>
  </label>
  </nav>
</header>

<style>

header{
  display: grid;
  grid-template-rows: 10% 90%;
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
nav{
  grid-row: 1;
  padding: 1rem;
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
  background-color: #242424;

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
    color: #213547;
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