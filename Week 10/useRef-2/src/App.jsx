import { useRef } from "react"
import Chat from "./Chat"

export default function App() {
    // const inputEl = useRef(null);
    // function onClickHandler() {
    //     inputEl.current.focus();
    // }
    return(
        <div>
            {/* <input ref={inputEl} type="text" />
            <button onClick={onClickHandler}>click here</button> */}
            <Chat />
        </div>
    )
}