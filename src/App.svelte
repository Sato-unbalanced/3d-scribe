<script>
    import { onMount } from 'svelte';
  import ThreeScence from './ThreeScence.svelte'

  let icon = "\u003E"
  onMount(() =>{
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
});
</script>

<main>
    <nav>
    <h1>3d-Scribe</h1>
    <button>backgound color</button>
    <button>save</button>
    <button>load object</button>
    <button>upload object</button>
    <input type="file" id="fileInput" accept=".obj">
    </nav>


   <!--<div id="view-area">-->       
      <div id="three-scence">
        <ThreeScence/>
      </div>

      <!--  "rhis was failed version to add controls for loading to float over three scence"
      <div id = "controls">
        <button type="button" class="collapsible" id= files>k <span>{icon}</span></button>
        <div id="content">
          <p>this is ment to simulate content being here</p>
        </div>

        <button type="button" class="collapsible" id="change">k <span>{icon}</span></button>
        <div id="change-content">
          <p>this is ment to simulate content being here</p>
        </div>
      </div>
      
    </div>
  --->
</main>

<style>
  main{
    display: grid;
    grid-template-rows: 10% 90%;
    position: relative;
  }
  #view-area{
    margin: 0;
    padding: 0;
    grid-row: 2;
    display: grid;
    height: 100%;
    position: relative;
  }

  #three-scence{
    grid-row: 2;
    padding: 0;
    margin: 0;  
    position: relative;
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
    z-index: 0;
    position: relative;
  }
/*
  
  .collapsible {
    
    position: relative;
    z-index: 2;
    background-color: #4b4b4b4b;
    color: white;
    cursor: pointer;
    width: 20px;
    height: 100%;
    padding: 0;
    margin: 0;
    border: none;
    text-align: left;
    outline: none;
    font-size: 20px;
  }

.active, .collapsible:hover {
  background-color: #555;
}

.collapsible:after {
  
  color: white;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

#controls{
  display: table;
  z-index: 1;
  clear: both;
  position: absolute;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

#content {
  padding: 0 18px;
  z-index: 2;
  position: relative;
  max-height: 0;
  max-width: 0;
  float: left;
  overflow: hidden;
  transition: max-width 0.2s ease-out;
  background-color: #4b4b4b4b;
}

#change-content{
  padding: 0 18px;
  position: relative;
  z-index: 3;
  float: right;
  max-height: 0;
  max-width: 0;
  overflow: hidden;
  transition: max-width 0.2s ease-out;
  background-color: #4b4b4b4b;
}
#change{
  position: relative;
  float: right;
  z-index: 3;
  height: 100%;
}

*/
</style>