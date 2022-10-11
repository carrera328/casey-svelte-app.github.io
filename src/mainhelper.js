export const getdata = (requestInfo) => {
    console.log('req', requestInfo);
    return fetch(CASEY_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(requestInfo)
    })
}
