import React, {useState, useEffect, useRef} from 'react'

const RenderApp = () => {
  const [text, setText] = useState("");
  const rendersRef = useRef(1);

  useEffect(() => {
    rendersRef.current++;    
  });

  return (
    <div>
      <h1>RenderApp</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <h2>Renders: {rendersRef.current}</h2>
    </div>
  )
}

export default RenderApp
