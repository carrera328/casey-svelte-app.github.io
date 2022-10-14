<script>
    export let text;
    export let emojis;
</script>

<section>
    <div class='line'>
        <h1>{text}</h1> {emojis}
    </div>
    
</section>

<style>
    .line {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: .5rem
    }
    section {
        background-color: #bcb88a;
        width: 95%;
        display: block;
        margin: 0 auto;
        border-radius: 25px;
        
        
    }
    
    h1 {
        font-family: inherit;
        font-weight: 700;
        font-size: 1.5rem;
        text-align: center;
        vertical-align: text-top;
    }

    
</style>