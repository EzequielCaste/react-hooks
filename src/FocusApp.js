import React, {useRef, useState} from 'react'

const FocusApp = () => {
  const [input, setInput] = useState("");
  
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  }
  
  return (
    <div>
      <h1>FocusApp</h1>
      <input 
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Focus</button>
    </div>
  )
}

export default FocusApp;