<script>
    // TODO: Do INIT here
    import Button from "./Button.svelte";
    
</script>


<main>
   <Button label='Funny' name='funny'></Button>
   <Button label='Love' name='love'></Button>
   <Button label='Surprise Cboo' name='random'></Button>
   <Button label='Fun Facts' name='fun_facts'></Button>
    
</main>

<style>
    main {
        font-family: inherit;
        font-size: 1em;
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        position: absolute;
        bottom: 30%;
        row-gap: 0;
        column-gap: 0;
    }
</style>
