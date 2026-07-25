import { useState } from "react"
import Parent from "./components/Parent";
import { CurrentValueContext } from "./context/currentValueContext";

// use this for visuliation = Screenshot 2026-02-06 at 7.11.16 PM.png
// level 1 : prop driling (not maintainable)
// level 2 : use context api (unneccesary re-renders) { in this project }
// level 3 : use recoil library (optimise renders) { folder called recoil }

export default function App() {
const [currentValue, setCurrentValue] = useState(0);

  return(
    <CurrentValueContext.Provider value={{ currentValue, setCurrentValue }}>
      <Parent />
    </CurrentValueContext.Provider>
  )
}