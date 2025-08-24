<script>
  import { fade } from "svelte/transition";

    let {clicked} = $props();
</script>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="container" on:click={clicked} in:fade out:fade>
    <div class="attract">
        <h1>How far can historic Electric Vehicles go?</h1>
        <div class="subtitle">
        <p>Select a destination on the map and see if you can make it!</p>
        <button on:click={clicked}>Get Started</button>
        </div>
    </div>

</div>

<style>
    .container{
        width:100vw;
        height:100vh;
        position: absolute;
        top:0;
        left:0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        backdrop-filter: blur(3px);
        
        
    }
    .attract{
        background-color: black;
        width:60%;
        padding:1rem;
        padding-left:8rem;
        padding-right:8rem;
        padding-bottom:3rem;
        display: flex;
        flex-direction: column;
        gap:1rem;
        border-radius: 50px;
    }
    .subtitle{
        font-family: Inter;
        font-size: 20px;
        width:28%;
        gap:1rem;
        display: flex;
        flex-direction: column;
        align-self: center;
        place-items: center;
    }
    .subtitle > p{
        text-align: center;
    }
    h1{
        font-family: InterBold;
        font-size: 100px;
        text-wrap: pretty;
        line-height: 120px;
        margin-bottom:30px;
    }
    button{
        width: fit-content;
    }
</style>