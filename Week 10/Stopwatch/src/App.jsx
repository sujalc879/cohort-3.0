import { useRef, useState } from "react"

export default function App() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  function timerStart() {
    if (intervalRef.current !== null) {
      return;
    }  

    console.log("inside timerStart");
    
  
    intervalRef.current = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
  }

  function timerStop() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
  return(
    <div>
      Timer : {timer}
      <br />
      <br />
      <button onClick={timerStart}>start</button>
      <br />
      <br />
      <button onClick={timerStop}>stop</button>
    </div>
  )
}