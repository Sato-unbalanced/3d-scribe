
<script>
    import { PUBLIC_BACKEND_WEBSITE_URL } from "$env/static/public";    
    import ThreeScence from '$lib/ThreeScence.svelte';
    let object;
    async function func(event)
    {
        event.preventDefault();
        const requestOptions = {
                method: "GET",
                redirect: "follow"
        };
        try{
            const response = await fetch(PUBLIC_BACKEND_WEBSITE_URL+"/project/names", requestOptions);
            const result = await response.text();
            //console.log(result);
            object = JSON.parse(result);
            //console.log(object);
        }
        catch (error){
            console.error(error)
        }

        //count = 0;
        let table = document.getElementById("search_table");
        let length = object.length;
        for(let i = 0; i < length; ++i) //(key in object)
        {
            let row = table.insertRow(i);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.innerHTML = object[i]["project_id"];
            cell2.innerHTML = object[i]["project_name"];
        }    
    }
</script>
<div class="page-content">
    <a style="float:right;"  href="/">home</a>
    <div class="scroll" >
        <div class="search-container">
            <form on:submit={func}>
                <input type="text" placeholder="Search." name="search">
                <button type="submit"><i class="fa fa-search"></i></button>
                <div class="tag-filters">
                    <div class="tag" data-tag="health">Health</div>
                    <div class="tag" data-tag="sports">Sports</div>
                    <div class="tag" data-tag="game">Game</div>
                    <div class="tag" data-tag="enginnering">Engineering</div>
                    <div class="tag" data-tag="space">Space</div>
                </div>
            </form>
        </div> 
        <table id = "search_table">
        </table>
    </div>
</div>
<!-- <ThreeScence width={0.8} height={0.9}/> -->
<!-- <div bind:this={container}></div> -->


<!-- for here to a table and hit the over flow in the x or maby y direction
 ps try to find out how to over lay element swith keeps the conectivity//interactivity of the bottom element-->

 <style>
    .scroll
    {
        float:left;
        max-height: 90vh;
        width: 25vh;
        overflow-y: auto;
        background-color: #080808;
    }
    table
    {
        width:inherit;
        border-collapse: collapse;
    }
    .page-content
    {
        margin: 0;
        padding: 0;
        height: inherit;
    }

    input[type=text]
    {
        font-size: 17px;
    }
    .search-container button
    {
        padding: 6px 10px;
        margin-top: 8px;
        margin-right: 16px;
        font-size: 17px;
        background: #ddd;
        border: none;
        cursor: pointer;
    }
    .tag{
        display: inline-block;
        color: black;
        background-color: aliceblue;
        border-radius: 20px;
        padding: 0.3em 0.5em;
        margin: 5px;
        cursor: pointer;
        width: fit-content;
        transition: background-color 0.3s;
    }
    .tag-filters
    {
        max-width: 100%;
    }
 </style>