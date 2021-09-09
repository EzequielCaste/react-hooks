import React, {useState, useRef} from 'react'

const MediaPlayer = () => {
  const mediaRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = mediaRef.current;

    isPlaying ? video.pause() : video.play();
    setIsPlaying(!isPlaying)
    
  }
  return (
    <div>
      <h1>MediaPlayer</h1>
      <video ref={mediaRef} width="400" src="https://vod-progressive.akamaized.net/exp=1631065631~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2120%2F23%2F585600454%2F2763984000.mp4~hmac=9074779c30a7db36abbd01a76709749ce86f0954af31bb7e7459717ca4b13519/vimeo-prod-skyfire-std-us/01/2120/23/585600454/2763984000.mp4?filename=Sunrise+-+83880.mp4" type="video/mp4"></video>
      <button onClick={handlePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  )
}

export default MediaPlayer
