import { useState } from "react";

export default function useCounter() {
    const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return {
    count,
    increaseCount
  }
}