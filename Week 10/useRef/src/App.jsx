  import { useRef } from "react"

function App() {
  const inputRef = useRef(null);

  function handleSubmit () {
    inputRef.current.focus()
  }
  return (
    <>
    <input ref={inputRef} type="text" />
    <input type="text" />
    <button onClick={handleSubmit}>submit</button>
    </>
  )
}


export default App
