import { useEffect, useState } from "react"

function App() {
const [isVisible, setIsVisible] = useState(true);

useEffect(() => {
  setInterval(() => {
    setIsVisible(prev => !prev);
  }, 5000);
}, [])
  return (
    <>
    {isVisible && <Timer/>}
    </>
  )
}

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
   const clockId = setInterval(() => {
      console.log("log from inside");
      setSeconds(seconds => seconds + 1)
    }, 1000);

    return () => {
      clearInterval(clockId);
    }
  }, []);
  return <div>{seconds} Has Elapsed</div>
}

export default App