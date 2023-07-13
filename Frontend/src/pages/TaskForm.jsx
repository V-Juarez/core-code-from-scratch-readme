import { useState } from "react";
import axios from 'axios'

function TaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isdone, setIsdone] = useState(false)
  const [created_at, setCreated_at] = useState('')

  const handleSubmite = async (e) => {
    e.preventDefault()
    console.log(title, description);

    // const res = await fetch('http://localhost:4000/api/tasks', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     title,
    //     description
    //   }),
    //   headers: {
    //     'Content-type': 'application/json'
    //   }
    // })

    // conect api
    const res = await axios.post('http://localhost:4000/api/task', {
      title,
      description,
      isdone,
      created_at
    })
    console.log(res);
    e.target.reset()
  }

  return (
    <div className="flex item-center justify-center h-[calc(100vh-10rem)]">
      <form className="bg-zinc-950 p-10" onSubmit={handleSubmite}>
        <input 
          type="text" 
          placeholder="title" 
          className="block py-2 px-3 mb-4 w-full text-black"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea 
          placeholder="description" 
          rows={5}
          className="block py-2 px-3 mb-4 w-full text-black"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="false"
          className="block py-2 px-3 mb-4 w-full text-black"
          onChange={(e) => setCreated_at(e.target.value)} 
        />
        <input
          type="date"
          placeholder="date"
          className="block py-2 px-3 mb-4 w-full text-black"
          onChange={(e) => setCreated_at(e.target.value)} 
        />
        <button>save</button>
      </form>
    </div>
  );
}

export default TaskForm;
