<div>
    <p class="title">Good Job!</p>
    <p class="prompt">Now take what you've learned and think about which car in the museum would be best for you.</p>
    <button on:click>I'm done.</button>
</div>

<style>
div{
    background-color: black;
    display:flex;
    flex-direction: column;
    padding:3rem;
    border-radius: 1rem;
    color:white;
    gap:1rem;
    align-items: center;
}
p{
    font-family: Inter;
    font-size: 16px;

}
.title{
    font-family: InterBold;
     font-size: 24px;
     align-self: center;
}
.prompt{
    width:60%;
    text-align: center;
}
button{
    width: fit-content;
}
</style>