<script lang="ts">
  import { quadInOut } from "svelte/easing";
  import { fly, slide } from "svelte/transition";

    let {image,name, description,year,manufacturer} = $props();
</script>
<div class="card" in:fly={{duration:500,delay:500,x:"100%",easing:quadInOut}} out:fly={{duration:500,x:"100%",easing:quadInOut}}>
    <div class="image">
        <img src={image}/>
    </div>
        <p class="title">{name}</p>
    <div class="info">
        <div class="row">
            <div class="column">
                <p class="year">Year</p>
                <p class="highlighted">{year}</p>
            </div>
            <div class="column end">
                <p class="year">Manufacturer</p>
                <p class="highlighted">{manufacturer}</p>
            </div>
        </div>
    <p class="description">{description}</p>
        </div>
</div>

<style>
    .info{
        margin:1rem;
    }
    .card{
        width:var(--card-width);
        height:75vh;
        background-color: white;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 1rem;
        top:1rem;
        box-shadow: 0px 10px 10px rgba(0,0,0,.5);
    }
    .title{
        font-family: InterBold;
        font-size: 28px;
        font-weight: bold;
        background-color: black;
        color:white;
        padding:1rem;
        border-bottom: 6px solid #FFC227;
        margin: 0;
        margin-top:-1%;

    
    }
    .row{
        display:flex;
        gap:3rem;

    }
    .column{
        display: flex;
        flex-direction: column;
        gap:12px;
    }
    .year{
        font-size: 12px;
        font-family: InterBold;
        font-weight: bold;
    }
    .highlighted{
        color:white;
        background-color: black;
        padding:4px 8px 4px 8px;
    }

    img{
        width:100%;
        border-radius: .5rem .5rem 0 0;
        max-height: 300px;
        object-fit: contain;
        background-color: black;
    }
    .description{
        width: 90%;
        overflow: auto;
        margin-top: 2rem;
        max-height: 200px;
        padding-right:1rem;
         mask-image: linear-gradient(0deg,rgba(42, 123, 155, 0) 0%, rgba(0, 0, 0, 1) 15%),
         linear-gradient(90deg,rgba(42, 123, 155, 0) 95%, rgba(0, 0, 0, 1) 30%);
    }
</style>