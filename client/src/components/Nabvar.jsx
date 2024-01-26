import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-expand-lg navbar-dark bg-cyan-300 w-screen fixed top-0 p-4 items-center flex-1">
      <div className="text-slate-900 flex justify-between P-4">
        <ul className="ml-10">
          <Link to="/">
            <li className="text-slate-900">SuperBlog</li>
          </Link>
        </ul>
        <ul className="flex mr-10">
          <Link to="/">
            <li className="mr-2 text-slate-900">
              Home
            </li>
          </Link>
          {" | "}
          <Link to="/posts/new">
            <li className="ml-2 text-slate-900">
              New Post
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar;
