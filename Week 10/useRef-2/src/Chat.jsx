import React, { useEffect, useRef, useState } from 'react'

export default function Chat() {
  const [ messages, setMessages ] = useState(["hello", "go to gym"]);
  const ChatBoxRef = useRef(null);

  function addmessage() {
    setMessages((prev) => [...prev, `new message ${Math.random()}`]);
  }

  useEffect(() => {
    ChatBoxRef.current.scrollTop = ChatBoxRef.current.scrollHeight;
  }, [messages])

  return (
<div>

    <div
    ref={ChatBoxRef}
    style={{height : "200px", width : "400px", border : "1px solid black", overflowY : "scroll"}}>
    {messages.map((value, index) => {
        return <div key={index}>{value}</div>
    })}
    </div>
    <button onClick={addmessage}>add message</button>
</div>
  )
}
