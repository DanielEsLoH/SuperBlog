import { useState, useEffect } from "react";
import { API_URL } from "../../constants";
import { Link } from "react-router-dom";

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
    <div className="flex flex-col items-center justify-center mt-20">
      <h2 className="font-semibold text-xl">Lista de posts: </h2>
      {posts.map((post) => (
        <div key={post.id} className="post-container my-4 border-2 border-black p-4 rounded-lg max-w-screen-md mx-auto w-full text-center">
          <Link to={`/posts/${post.id}`}>
            <h2 className="text-slate-900">{post.title}</h2>
          </Link>
          <p>
            {post.content.substring(0, 250)}
            {post.content.length > 250 && <span>...</span>}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PostsList;
