import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchTask, createTask, updateTask, deleteTask } from "../api/tasks";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isdone, setIsDone] = useState();
  const [created_at, setCreated_at] = useState("");
  const [updated_task, setUpdated_task] = useState("")

  const params = useParams();
  const navigate = useNavigate();

  // conect api
  const handleSubmite = async (e) => {
    e.preventDefault();

    try {
      if (!params.id) {
        const res = await createTask({
          title,
          description,
          created_at,
        });
        console.log(res);
      } else {
        const res = await updateTask(params.id, {
          title,
          description,
          isdone: false,
          created_at,
          updated_task
        });
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
      fetchTask(params.id)
        .then((res) => {
          console.log(res);
          setTitle(res.data.title);
          setDescription(res.data.description);
          setIsDone(res.data.isdone);
          setCreated_at(res.data.created_at);
          setUpdated_task(res.data.updated_task);
        })
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <div className="flex item-center justify-center h-[calc(100vh-10rem)]">
      <div>
        <form className="bg-zinc-950 p-10" onSubmit={handleSubmite}>
          <h1 className="text-3xl font-bold my-4">
            {params.id ? "Update Task" : "Create Task"}
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
            type="date"
            value={created_at}
            placeholder="date"
            className="block py-2 px-3 mb-4 w-full text-black"
            onChange={(e) => setCreated_at(e.target.value)}
          />
          <button className="bg-white hover:bg-slate-800 hover:text-white text-slate-800 py-2 px-4 rounded">
            {params.id ? "Update Task" : "Create Task"}
          </button>
        </form>
        {params.id && (
          <button
            className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded mt-5"
            onClick={async () => {
              try {
                const res = await deleteTask(params.id);
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
