<script>
export let status;
export let description;
</script>

<div class="card">
<h1>{status}</h1>
<p>{description}</p>
<button on:click>Next</button>
</div>

<style>
    .card{
        background-color: white;
        display: flex;
        flex-direction: column;
        place-content: center;
        padding:1rem;
        border-radius: 1rem;
    }
    h1{
        text-align: center;
    }
</style>