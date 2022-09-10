<script>
	import { onMount } from 'svelte';
	import * as help from './mainhelper';
	import Quote from './components/Quote.svelte'
	import Landing from './components/Landing.svelte';

	
	let quotes = [];
	let quote = 'Hai Cboosaur';

	let loading = true;
	let container;

	let processedData;

	console.log('asdafs', URL);

	onMount(async () => {
		quotes = await help.getdata().then(data => data.json());
		loading = false;
		processedData = groupBy([...quotes], 'Type');
		console.log('processed', processedData);
		addEventListeners();
	})

	const handleUpdateQuote = (event) => {

		// get all 

		let list;

		console.log('evt', event.detail)

		if (event.detail == 'random') {
			list = quotes;
		} else {
			list = processedData[event.detail];
		}

		
		quote = getRandomQuote(list, list.length).content;

		
		console.log(quote);
	}

	const getRandomQuote = (list, randomMax) => {
		return list[Math.floor(Math.random() * randomMax)];
	}

	

	

	export const groupBy = (arr, enumProperty) => {
		return arr.reduce(function (item, prop) {
			if (!item[prop[enumProperty]]) {
				item[prop[enumProperty]] = [];
			}
			item[prop[enumProperty]].push(prop);
			return item;
		}, {});
}

	const addEventListeners = () => {
		container.addEventListener('quoteclick', event => {
			handleUpdateQuote(event);
		})
	}
	

	
	
	function handleEvent(event) {
		console.log(event);
	}
	// todo
</script>

<main bind:this={container}>
	
	{#if loading}
		
		<h1>Fuck loading</h1>

		{:else}
		<div class='wrapper'>
			<Quote text={quote}/>
		    <Landing on:quoteclick={handleEvent}></Landing>
		</div>
		
	
	{/if}
	
</main>

<style>
	/* body, html {
		padding: 0;
		width: 100vw;
		height: 100%;
	} */

	body, html {
		box-sizing: border-box;
		
	}


	main {
		height: 100%;
		width: 100%;
		box-sizing: border-box; 
		
		
	}

	.wrapper {
		height: 100%;
	}


	h1 {
		width: 100%;
		text-align: center;
	}
</style>