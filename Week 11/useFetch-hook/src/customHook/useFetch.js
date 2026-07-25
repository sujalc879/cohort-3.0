import { useState } from "react";

export default function useFetch(url) {
    const [todo, setTodo] = useState(null);

    function toggle() {
      if (todo === null) {
        setTodo(fetch(url)
    .then((res) => {
      res.json().then((val) => {
        setTodo(JSON.stringify(val));
      })
    }))
      } else {
        setTodo(null)
      }
    }

    return {
        todo,
        toggle
    }
}