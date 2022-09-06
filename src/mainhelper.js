export const getdata = () => {
    return fetch('http://www.dashcatsoftware.com/casey', {
        method: 'GET'
    })
}