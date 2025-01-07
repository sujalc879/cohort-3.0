function setTimeOutPromisified(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(45)
        }, ms);
    })
}
setTimeOutPromisified(2000).then(data => console.log(data));