export const getdata = (requestInfo) => {
    
    return fetch(CASEY_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(requestInfo)
    })
}
