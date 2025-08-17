<script>
export let status;
export let description;
</script>

<div class="answer">
<h1>{status}</h1>
<p>{description}</p>
<button on:click>Next</button>
</div>

<style>
    .answer{
        background-color: black;
        color:white;
        display: flex;
        flex-direction: column;
        place-content: center;
        padding:1rem;
        border-radius: 1rem;
        position:absolute;
        top:50%;
        left:40%;

    }
    h1{
        text-align: center;
    }
</style>