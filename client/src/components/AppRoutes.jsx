import { Route, Routes } from "react-router-dom";
import PostsList from "../features/posts/PostsList";
import PostsDetails from "../features/posts/PostsDetails";
import NewPostForm from "../features/posts/NewPostForm";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/posts/:id" element={<PostsDetails />} />
      <Route path="/posts/new" element={<NewPostForm />} />
      <Route path="*" element={<h1 className="text-center">404 Not Found</h1>} /> {/* Esta ruta manejará cualquier ruta no existente */}
    </Routes>
  );
}

export default AppRoutes;