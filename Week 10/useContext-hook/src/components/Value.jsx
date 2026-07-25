import { useContext } from "react"
import { CurrentValueContext } from "../context/currentValueContext"

export default function Value() {
    const { currentValue } = useContext(CurrentValueContext)
return(
    <div>{currentValue}</div>
)
}