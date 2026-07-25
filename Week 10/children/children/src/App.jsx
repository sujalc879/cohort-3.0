import { useState } from "react"

export default function App() {
  return(
    <div>
      <Collaps title={"section 1"}>
      <p><b>this is section 1</b></p>
      </Collaps>
      <Collaps title={"section 2"}>
      <p><b>this is section 2</b></p>
      </Collaps>
    </div>
  )
}


function Collaps({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);


  return(
    <div>
      <button onClick={() => {setIsOpen(!isOpen)}}>
        {title} {isOpen ? "-" : "+"} 
      </button>
      <div>
        {isOpen && children}
        </div>  
    </div>
  )


  
}