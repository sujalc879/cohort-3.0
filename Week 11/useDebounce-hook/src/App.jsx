import { useRef, useState } from "react";

export default function App() {
  const clock = useRef(undefined);

  function handleChange() {
    console.log(Math.random());
    
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((res) => {
  //       res.json().then((data) => {
  //         console.log(data.title + Math.random());
          
  //       })
  //     });
  }



  async function useDebounce() {
    clearInterval(clock.current);
    setTimeout(() => {
      handleChange();
    }, 500);
  }

  return(
    <>
     <input onChange={useDebounce} type="text" placeholder="type here"/>
    </>
  )
}