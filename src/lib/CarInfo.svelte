<script lang="ts">
  import { quadInOut } from "svelte/easing";
  import { fly, slide } from "svelte/transition";

    let {image,name, description,year,manufacturer} = $props();
</script>
<div class="card" in:fly={{duration:800,delay:800,x:"100%",easing:quadInOut}} out:fly={{duration:800,x:"100%",easing:quadInOut}}>
    <h1 class="prompt">How Far Can We Go?</h1>
    <div class="image">
        <img src={image}/>
    </div>
    <h1>{name}</h1>
        <div class="row year">
        <span class="bold"> Year:</span><span> {year}</span>
    </div>
    <div class="row">
        <span class="bold"> Manufacturer:</span><span>{manufacturer}</span>
    </div>

    <p>{description}</p>
</div>

<style>
    .prompt{
        text-align: center;
        padding:0;
        margin-top:0;
    }
    .card{
        width:var(--card-width);
        height:80vh;
        background-color: white;
        border-radius: 1rem;
        padding:1rem;
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 1rem;
        top:1rem;
        box-shadow: 0px 10px 10px rgba(0,0,0,.5);
    }
    .row{
        display:flex;
        gap:1rem;
        justify-content: space-between;
        width:50%;
    }
    .year{
        font-size: 1.5rem;
    }
    .bold{
        font-weight: bold;
    }
    img{
        width:100%;
        border-radius: .5rem;
        max-height: 300px;
        object-fit: contain;
    }
    p{
        width: 90%;
        overflow: scroll;
    }
</style>