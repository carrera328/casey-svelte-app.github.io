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
    height: 100%;
    background-color: #535E4B;
    color: white;
  }
</style>
