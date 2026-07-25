import { useEffect, useRef } from "react";

export default function usePrev(value, initial) {
  const ref = useRef({ target: value, previous: initial });
  if (ref.current.target !== value) {
    ref.current.previous = ref.current.target;
    ref.current.target = value;
  }
  return ref.current.previous;
}