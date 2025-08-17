<script>
  import { fade } from "svelte/transition";

</script>
<div class="container" in:fade out:fade>
    <h1>How far can it take you?</h1>
    <p>Click a point on the map to guess how far from the musuem this car could take you in one charge.</p>
</div>
<style>
    .container{
        background-color: black;
        color:white;
        border-radius: 8px;
        width:417px;
        position: absolute;
        top:1%;
        left:1%;
        padding:16px;
    }
    h1{
        font-family: InterBold;
        font-weight: bold;
        font-size: 24px;

    }
    p{
        font-size: 16px;
    }
</style>