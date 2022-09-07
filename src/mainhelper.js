export const getdata = () => {
    return fetch(CASEY_URL, {
        method: 'GET'
    })
}