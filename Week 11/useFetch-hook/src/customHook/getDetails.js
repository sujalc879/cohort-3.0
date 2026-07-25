import useFetch from "./useFetch";

export default function getDetails(url) {
  const { todo, toggle } = useFetch(url)

    return {
      todo,
      toggle
    }
}