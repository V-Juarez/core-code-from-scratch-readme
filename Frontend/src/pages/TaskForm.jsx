import { useState } from "react";

function TaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')


  const handleSubmite = async (e) => {
    e.preventDefault()

    const res = await fetch('http://localhost:4000/api/tasks', {
      method: 'POST',
      body: JSON.stringify({
        title,
        description
      })
    })
    console.log(res);
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
        <button>save</button>
      </form>
    </div>
  );
}

export default TaskForm;
