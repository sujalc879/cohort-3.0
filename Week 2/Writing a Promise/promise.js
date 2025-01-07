async function main(url) {
    return new Promise( async (resolve, reject) => {
        let a = await fetch(url);
        resolve(a);

    })
}

main(`https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch`).then((data) => {
    console.log(data.status);
})