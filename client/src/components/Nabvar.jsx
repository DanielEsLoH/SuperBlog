import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-expand-lg navbar-dark bg-cyan-300 w-screen sticky top-0 p-4 items-center flex-1">
      <div className="text-slate-900 flex justify-between">
        <ul className="ml-10">
          <li>SuperBlog</li>
        </ul>
        <ul className="flex mr-10">
          <li className="mr-2 text-slate-900">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts/new">New Post</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar;
