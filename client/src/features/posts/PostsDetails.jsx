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
    <div className="h-screen mt-28 mx-28">
      <div className="mx-32 mb-8">
        <h1 className="text-center mb-4 text-5xl font-semibold">{post.title}</h1>
        <p className="text-justify">{post.content}</p>
      </div>
      <p><Link to="/">Back to posts</Link></p>
    </div>
  );
}

export default PostsDetails;