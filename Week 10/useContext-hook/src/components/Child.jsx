import Decrease from "./Decrease";
import Increase from "./Increase";
import Value from "./Value";

export default function Child() {
    return(
        <>
          <Value />
          <br />
          <Increase />
          <Decrease />
        </>
    )
}