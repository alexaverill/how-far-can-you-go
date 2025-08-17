<script>
  import { fade } from "svelte/transition";

    let {clicked} = $props();
</script>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="container" on:click={clicked} in:fade out:fade>
    <div class="attract">
    <h1>How far can historic Electric Vehicles take you?</h1>
    <div class="subtitle">
    <p>Guess on the map to see where these vehicles can take you!</p>
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
        width:80%;
        padding:1rem;
        display: flex;
        flex-direction: column;
        gap:1rem;
        border-radius: 50px;
    }
    .subtitle{
        font-family: Inter;
        font-size: 20px;
        width:25%;
        gap:1rem;
        display: flex;
        flex-direction: column;
        align-self: flex-end;
    }
    h1{
        font-family: InterBold;
        font-size: 100px;
    }
    button{
        width: fit-content;
    }
</style>