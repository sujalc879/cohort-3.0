import { useState } from "react"
import PostComponent from "./Post"

function App() {
  const [posts, setPosts] = useState([{
    name : "sujal",
    subtitle : "24 followers",
    time : "3m ago",
    image : "https://plus.unsplash.com/premium_photo-1673967831980-1d377baaded2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D",
    description : "want to know how to win big hackathons... really"
  }]);

console.log(posts);

  const postsArr = posts.map((post) => {
    return <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
    />
  })
  
  console.log(postsArr);
  

function addPost() {
  posts.push({
    name : "sunil",
    subtitle : "24 followers",
    time : "3m ago",
    image : "https://plus.unsplash.com/premium_photo-1673967831980-1d377baaded2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D",
    description : "want to know how to win big hackathons... really"
  })


  setPosts([...posts])

  
}

  return (
    <>
    <button onClick={addPost}>add Post</button>
    <div style={{gap : 10, display : "flex", flexDirection : "column", alignItems : "center", width : "100vw", height : "100vh", backgroundColor : "#cfcfcf"}}>
      {postsArr}
    </div>
    </>
  )
}



// function ToggleMessage() {
//   const [notification, setNotification] = useState(0);
//   function increase() {
//     setNotification(notification + 1);
//   }
//   return(
//     <div>
//       <button onClick={increase}> increase count </button>
//       {notification}
//     </div>
//   )
// }

export default App
