import { useEffect, useState } from "react";
import usePrev from "./hooks/usePrev";

export default function App() {
  const [count, setCount] = useState(0);
  const [another, setAnother] = useState(2);
  const prevous = usePrev(count);
  function increaseCount() {
    setCount(count + 1);
  }



  useEffect(() => {
    setInterval(() => {
      setAnother(Math.random())
      console.log("re-render happen");
      
    }, 5000);
  }, [another]);

  return(
    <div>
      <p>current count is : {count}</p>
      <button onClick={increaseCount}>click me</button>
      <p>previous count is : {prevous}</p>
    </div>
  )
}