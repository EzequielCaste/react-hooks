const getPost = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts/1';

  const resp = await fetch(url);
  const post = await resp.json();

  return post;
}
export default getPost;