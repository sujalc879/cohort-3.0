import { useSetRecoilState } from "recoil"
import { value } from "../context/context"

export default function Decrease() {
    const setDecrease = useSetRecoilState(value);
    return(
        <button onClick={() => {setDecrease(prev => prev - 1)}}> Decrease </button>
    )
}