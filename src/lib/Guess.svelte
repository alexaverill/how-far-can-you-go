<script type="ts">
  import { fade } from "svelte/transition";
  import Conclusion from "./Conclusion.svelte";

let {distance,status,description,guess,next,buttonText="Next",isConclusion} = $props();
let hasGuessed = $state(false)
</script>
<div class="container" in:fade out:fade>
    {#if isConclusion}
            <div class="answer">
                <p class="title">Good Job!</p>
                <p class="description">Now take what you've learned and think about which car in the museum would be best for you.</p>
                <button on:click={()=>{next()}} class="next">I'm done.</button>
            </div>
    {:else if !hasGuessed}
        <div class="distance">
            Range:
        {distance} {distance==="1.00"?"mile":"miles"}
        </div>
        <button disabled={distance===0} on:click={()=>{
            hasGuessed = true;
            guess();
        }}>Guess!</button>
        {:else}
            <div class="answer">
                <p class="title">{status}</p>
                <p class="description">Your guess: <span class="highlight">{distance} {distance==="1.00"?"mile":"miles"}</span></p>
                <p class="description">{description}</p>
                <button on:click={()=> {hasGuessed = false; next();}} class="next">{buttonText}</button>
            </div>
        
        {/if}
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
        width:460px;
        transition: all 10s;

    }
    .answer{
        display:flex;
        flex-direction: column;
        gap:.5rem;

    }
    .title{
       font-family: InterBold;
        font-size: 28px;
        font-weight: bold;
    }
    .description{
        font-size: 16px;
    }
    button{
        width: fit-content;
    }
    .next{
        align-self: end;
    }
    .highlight{
        font-family: InterBold;
        font-weight: bold;
        color:#FFC227;
    }
</style>