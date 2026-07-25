import { useState } from "react";

export default function App() {
  const lists = [{
    title : "hii",
    done : false
  },{
    title : "go to gym",
    done : false
  },{
    title : "eat food",
    done : true
  }]

  return(
   <div>
    <Todo lists={lists} />
   </div>
  )

  
}

function Todo({ lists }) {
  
  return(
    <ol>
      {lists.map((val, index) => {
        return <li key={index}>{val.title} & this <b>{val.done ? "task is done" : "task is not done"}</b></li>
      })}
    </ol>
  )
}