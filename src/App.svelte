<script>
	import { onMount } from 'svelte';
	import * as help from './mainhelper';
	import Quote from './components/Quote.svelte'
	
	export let name;

	let loading = true;
	let response;

	onMount(async () => {
		response = await help.getdata().then(data => data.json());
		name = response[1].content; 
		loading = false;
		console.log('name', name);
	})
	// todo
</script>

<main>
	{#if loading}
		<h1>Fuck loading</h1>
	{:else}
		<h1>Hello {name}!</h1>
		<Quote></Quote>
	{/if}
</main>

<style>
	body, html {
		padding: 0;
		width: 100vw;
		height: 100%;
	}
	main {
		text-align: center;
		max-width: 240px;
		margin: 0;
		box-sizing: border-box;
		/* background-color:red; */
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>