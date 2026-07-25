import useCounter from "../customHook/counterHook";

export default function Counter() {

const { count, increaseCount } = useCounter();
  return(
    <>
      <button onClick={increaseCount}> increase : {count}</button>
    </>
  )
}