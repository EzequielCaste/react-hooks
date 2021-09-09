import React, {useState, useEffect, useRef} from 'react'

const ScrollAnimation = () => {
  const [background, setBackground] = useState('pink');
  const divRef = useRef();

  const handleScroll = () => {
    const div = divRef.current;
    const { y } = div.getBoundingClientRect();
    
    const backgroundColor = y <= 0 ? 'tomato' : 'pink';

    setBackground(backgroundColor);
    
  }

  useEffect(() => {    
    window.addEventListener('scroll', handleScroll);
    return () => window.addEventListener('scroll', handleScroll);
  })


  return (
    <div ref={divRef} style={{height: "180vh", background }}>
      <h1>Scroll to change background color</h1>
    </div>
  )
}

export default ScrollAnimation;