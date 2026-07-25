import { useContext } from "react"
import { CurrentValueContext } from "../context/currentValueContext"

export default function Increase() {
    const { setCurrentValue } = useContext(CurrentValueContext);
    return(
        <button onClick={() => {setCurrentValue(prev => prev + 1)}}>Increase</button>
    )
}