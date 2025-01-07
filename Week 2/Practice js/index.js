function wait(n) {

  function main(resolve) {
      setTimeout(() => {
          resolve();
      }, n);
  }
  let p = new Promise(main)
  return p;
}

wait(2000).then(()=> {
  console.log("hii");
  
})