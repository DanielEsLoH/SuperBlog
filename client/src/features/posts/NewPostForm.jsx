import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constants";

function NewPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = { title, content };
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ post }),
      });

      if (response.ok) {
        const { id } = await response.json();
        navigate(`/posts/${id}`);
      } else {
        console.log("Error creating the post:", response.statusText);
      }
    } catch (error) {
      console.log("An error occurred while creating the post:", error);
    }
  };

  return (
    <div className="border-gray-300 rounded-lg p-6 w-1/3 mx-auto bg-cyan-300">
      <h1 className="text-center mb-6">Crear nuevo post</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="titleInput" className="text-center font-semibold italic mb-3">Titulo: </label>
          <input
            id="titleInput"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-2/3 rounded-lg mx-auto p-1 mb-3"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="contentInput" className="text-center font-semibold italic mb-3">Contenido: </label>
          <textarea
            id="contentInput"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-2/3 rounded-lg mx-auto p-1 mb-3 h-32"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}
export default NewPostForm; 