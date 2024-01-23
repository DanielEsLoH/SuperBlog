import { useState, useEffect } from "react";
import { API_URL } from "../../constants";

function PostsList () {

  const [posts, setPosts] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);
  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const json = await response.json();
          setPosts(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError("Error loading posts");
        console.log("Error loading posts", e);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);
  
  return (
    <div className="flex flex-col justify-center text-center">
      <h1 className="text-red-600 my-6">SuperBLog</h1>
      <p>Lista de posts: </p>
      {posts.map((post) => (
        <div key={post.id} className="post-container my-4 border-2 border-black p-4 rounded-lg max-w-screen-md mx-auto w-full">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsList;
