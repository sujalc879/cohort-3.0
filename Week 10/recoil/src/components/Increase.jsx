import { useSetRecoilState } from "recoil"
import { value } from "../context/context"

export default function Increase() {
    const setIncrease = useSetRecoilState(value);
    return(
        <button onClick={() => {setIncrease(prev => prev + 1)}}> Increase </button>
    )
}