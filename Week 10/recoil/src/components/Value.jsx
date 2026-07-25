import { useRecoilValue } from "recoil"
import { value } from "../context/context"

export default function Value() {
    const currentValue = useRecoilValue(value)
    return(
        <div>{currentValue}</div>
    )
}