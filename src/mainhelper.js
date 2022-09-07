export const getdata = () => {
    console.log('url', CASEY_URL);
    return fetch(CASEY_URL, {
        method: 'GET'
    })
}