function fetchPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("Lion");
        }, 1000);
    })
    
}

module.exports = fetchPromise;