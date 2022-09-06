var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/carrera328/casey-svelte-app', // Update to point to your repository  
        user: {
            name: 'Sal Carrera', // update to use your name
            email: 'carrera.328@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)