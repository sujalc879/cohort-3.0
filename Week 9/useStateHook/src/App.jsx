import { use, useEffect, useState } from "react"

function App() {
const [counter, setCounter] = useState(0);
const [counter2, setCounter2] = useState(0);

function increase () {
  setCounter(counter + 1);
}
function decrease () {
  setCounter2(counter2 - 1);
}
  return (
    <>
    <Counter counter={counter} counter2={counter2}/>
    <button onClick={increase}>increase counter</button>
    <button onClick={decrease}>decrease counter</button>
    </>
  )
}

function Counter({counter, counter2}) {
  useEffect(() => {
    console.log("the counter has mounted");
    
    return () => {
      console.log("the counter has unmounted " + Math.random());
    }
    
  }, [counter, counter2])

  return <div>
    <h1>count : {counter}</h1>
    <h1>count2 : {counter2}</h1>
  </div>
}

export default App
