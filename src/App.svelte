
<script>
	import { onMount } from 'svelte';
	import * as help from './mainhelper';
	import Quote from './components/Quote.svelte'
	import Landing from './components/Landing.svelte';

	
	// let quotes = [];
	let quote = `Happy 3 Years! `;
	let emojis = ` \u2600\uFE0F \uD83C\uDF63`;
	
	let container;
	

	
	onMount(async () => {
		
		addEventListeners();
	})

	const handleUpdateQuote =  async (event) => {

		// get all 

		let list;
		emojis = '';

		if (event.detail == 'random') {
			const types = ['love', 'funny', 'fun_facts'];
			const randomNum = Math.floor(Math.random() * types.length);
			list = await help.getdata({type: types[randomNum]}).then(data => data.json());
		} else {

			list = await help.getdata({type: event.detail}).then(data => data.json());
			
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
	<div class='wrapper'>
		<div></div>
		<Quote class='quote' text={quote} emojis={emojis}/>
		<div class='landing'>
			<Landing  on:quoteclick={handleEvent}></Landing>
		</div>
		
	</div>	
</main>

<style>
	
	body, html {
		box-sizing: border-box;		
	}

	main {
		height: 100%;
		width: 100%;
		box-sizing: border-box; 	
		font-family: inherit;
	}

	.wrapper {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.quote {
		max-height: 20px !important;
	}

	

	h1 {
		width: 100%;
		text-align: center;
	}
</style>