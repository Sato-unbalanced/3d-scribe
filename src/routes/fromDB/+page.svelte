
<script>
    import { PUBLIC_BACKEND_WEBSITE_URL } from "$env/static/public";

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
    <h1 style="float:right;">this is where the content of dat base should be presented</h1>

<a style="float:right;"  href="/">home</a>
<div class="scroll">
 
<div class="search-container">
    <form on:submit={func}>
        <input type="text" placeholder="Search." name="search">
        <button type="submit"><i class="fa fa-search"></i></button>
    </form>
</div> 

   
<table id = "search_table">
    
</table>
</div>
</div>

<!-- for here to a table and hit the over flow in the x or maby y direction
 ps try to find out how to over lay element swith keeps the conectivity//interactivity of the bottom element-->

 <style>
    .scroll
    {
        max-height: 90vh;
        width: 20%;
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
    h1
    {
        font-size: 20px;
    }
 </style>