import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isDone, setIsDone] = useState(null);
  const [created_at, setCreated_at] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  // conect api
  const handleSubmite = async (e) => {
    e.preventDefault();

    try {
      if (!params.id) {
        const res = await axios.post("http://localhost:4000/api/task", {
          title,
          description,
          isDone,
          created_at,
        });
        console.log(res);
      } else {
        const res = await axios.patch(
          `http://localhost:4000/api/task/${params.id}`,
          {
            title,
            description,
            isDone,
            created_at,
          }
        );
        console.log(res);
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
  };

  const handleCheckboxChange = (event) => {
    setIsDone(event.target.checked || null);
  };

  useEffect(() => {
    if (params.id) {
      fetchTask();
    }

    async function fetchTask() {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/task/${params.id}`
        );
        console.log(res);
        setTitle(res.data.title);
        setDescription(res.data.description);
        setIsDone(res.data.isDone);
        setCreated_at(res.data.created_at);
      } catch (error) {
        console.error(error);
      }
    }
  }, [params.id]);

  return (
    <div className="flex item-center justify-center h-[calc(100vh-10rem)]">
      <div>
        <form className="bg-zinc-950 p-10" onSubmit={handleSubmite}>
          <h1 className="text-3xl font-bold my-4">
            {
              params.id ? "Update Task" : "Create Task"
            }
          </h1>
          <input
            type="text"
            placeholder="title"
            className="block py-2 px-3 mb-4 w-full text-black"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            autoFocus
          />
          <textarea
            placeholder="description"
            value={description}
            rows={5}
            className="block py-2 px-3 mb-4 w-full text-black"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input
            type="checkbox"
            value={isDone}
            id="isDone"
            name="isDone"
            checked={isDone}
            onChange={handleCheckboxChange}
          />
          <input
            type="date"
            value={created_at}
            placeholder="date"
            className="block py-2 px-3 mb-4 w-full text-black"
            onChange={(e) => setCreated_at(e.target.value)}
          />
          <button className="bg-white hover:bg-slate-800 hover:text-white text-slate-800 py-2 px-4 rounded">{params.id ? "Update Task" : "Create Task"}</button>
        </form>
        {params.id && (
          <button
            className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded mt-5"
            onClick={async () => {
              try {
                const res = await axios.delete(
                  `http://localhost:4000/api/task/${params.id}`
                );
                console.log(res);
                navigate("/");
              } catch (error) {
                console.log(error);
              }
            }}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default TaskForm;
