<script type="ts">
export let distance;
</script>
<div class="container">
<div class="distance">
    Range:
{distance} {distance==="1.00"?"mile":"miles"}
</div>

<button on:click>Guess!</button>
</div>
<style>
    .container{
        position: absolute;
        bottom:1.5rem;
        right:1.5rem;
        background-color: black;
        display: flex;
       align-items: center;
       justify-content: space-between;
        
        padding:1rem;
        border-radius: 1rem;
        box-shadow: 5px 5px 5px rgba(0,0,0,.5);
        font-size: 1.75rem;
        color:white;
        width:var(--card-width)

    }
    button{
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top:.75rem;
        padding-bottom:.75rem;
        font-size: 1.5rem;
        background-color: white;
        border:none;
    }
    button:active{
        background-color: aliceblue;
    }
</style>