import React, {useState, useEffect, useRef} from 'react'
import getPost from './helpers/getPost';

const Card = () => {
  const [post, setPost] = useState({title: 'post1'});
  const [loading, setLoading] = useState(true);

  const isMountedRef = useRef(true);

  const updatePost = () => {
    getPost()
      .then((newPost) => {
        if(isMountedRef.current) {
          setPost(newPost);
          setLoading(false);
        }
      })
  }

  useEffect(() => {
    updatePost();
    return () => {
      isMountedRef.current = false;
    }
  }, []);

  if(loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h2>{post.title}</h2>
    </div>
  )
}

export default Card
