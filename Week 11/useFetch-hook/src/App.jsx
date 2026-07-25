import getDetails from "./customHook/getDetails";

export default function App() {
  const { todo, toggle } = getDetails("https://jsonplaceholder.typicode.com/todos/1");

  return(
    <div>
      {todo === null ? "loading" : todo }
      <button onClick={toggle}>toggle</button>
    </div>
  )
}