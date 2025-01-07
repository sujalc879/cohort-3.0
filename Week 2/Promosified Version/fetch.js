function fetchPromisefy(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then((response) => {
            resolve(response.status)
        } )
    })
}

fetchPromisefy(`https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch#examples`).then((res) => {
    console.log(res);
})