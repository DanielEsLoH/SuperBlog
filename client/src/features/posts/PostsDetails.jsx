import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { API_URL } from "../../constants";

function PostsDetails() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCurrentPost = async () => {
      const response = await fetch(`${API_URL}/${id}`);
      try {
        if (response.ok) {
          const json = await response.json();
          setPost(json);
        } else {
          throw response;
        }
      } catch (e) {
        console.log("Error loading post", e);
      }
    };
    fetchCurrentPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/">Back to posts</Link>
      <h1>PostsDetails</h1>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default PostsDetails;