import App from './App.svelte';
import * as help from './mainhelper';

const app = new App({
	target: document.body,
	props: {
		name: 'Cboosaur'
	}
});

export default app;