import { Route, Routes } from "react-router-dom";
import PostsList from "../features/posts/PostsList";
import PostsDetails from "../features/posts/PostsDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/posts/:id" element={<PostsDetails />} />
      <Route path="/posts/new" element={<h1>New Post</h1>} />
    </Routes>
  );
}

export default AppRoutes;