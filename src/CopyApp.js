import React, {useRef, useState} from 'react'

const CopyApp = () => {
  const [text, setText] = useState("");
  
  const inputRef = useRef();

  const handleCopy = () => {
    navigator.clipboard.writeText(inputRef.current.value)
  }
  return (
    <div>
      <h1>CopyApp</h1>
      <input ref={inputRef} type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleCopy}>Copy</button>
    </div>
  )
}

export default CopyApp;