import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

function TaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isDone, setIsDone] = useState(null)
  const [created_at, setCreated_at] = useState('')

  const params = useParams()  

  const handleSubmite = async (e) => {
    e.preventDefault()
    console.log(title, description);
    // conect api
    const res = await axios.post('http://localhost:4000/api/task', {
      title,
      description,
      isDone,
      created_at
    })
    console.log(res);
    e.target.reset()
  }

  const handleCheckboxChange = (event) => {
    setIsDone(event.target.checked || null)
  }

  useEffect(() => {
    if (isDone === null) {
      setIsDone(false)
    }

    if (params.id) {
      fetchTask()
    }

    async function fetchTask() {
      const res = await axios.get(`http://localhost:4000/api/task/${params.id}`)
      console.log(res.data.data);
      setTitle(res.data.title)
      setDescription(res.data.description)
      setIsDone(res.data.isDone)
      setCreated_at(res.data.created_at)
    }
  }, [])

  return (
    <div className="flex item-center justify-center h-[calc(100vh-10rem)]">
      <form className="bg-zinc-950 p-10" onSubmit={handleSubmite}>
        <input 
          type="text" 
          placeholder="title" 
          className="block py-2 px-3 mb-4 w-full text-black"
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea 
          placeholder="description" 
          rows={5}
          className="block py-2 px-3 mb-4 w-full text-black"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="checkbox"
          id="isDone"
          name="isDone"
          checked={isDone}
          onChange={handleCheckboxChange}
        />
        <input
          type="date"
          placeholder="date"
          className="block py-2 px-3 mb-4 w-full text-black"
          onChange={(e) => setCreated_at(e.target.value)} 
        />
        <button>
          {params.id ? "Update Task" : "Create Task"}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
