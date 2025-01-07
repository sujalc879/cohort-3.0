function counter() {
   for (let i = 0; i < 100;) {
      setTimeout(() => {
         
         console.log(i++);
      }, 1000);
      
   }
}

counter()