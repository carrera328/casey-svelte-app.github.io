<script>
  import { createEventDispatcher } from "svelte";
  export let label;
  export let name;

  const dispatch = createEventDispatcher();
  let element;
  const handleClick = (event) => {
    console.log('el', element.dataset.id);
    

    element.dispatchEvent(new CustomEvent('quoteclick', {
      detail: element.dataset.id,
      bubbles: true,
      composed: true
    }));
    
  };
  


</script>

<button bind:this={element} on:click={handleClick} data-id={name}>{label}</button>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    
    height: 100%;
    background-color: #535E4B;
    color: white;
    padding: 0;
    border: none;
    outline: none;
    /* background: none; */
  }

  button:focus { outline: none; }
</style>
