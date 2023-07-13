import { useEffect, useState } from "react"
import axios from "axios"

import TaskList from "../components/TaskList"

function Homepage() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function fetchTasks() {
      const res = await axios.get("http://localhost:4000/api/task")
      console.log(res);
      setTasks(res.data.data)
    }
    fetchTasks()
  }, [])

  return (
    <>
      <h1 className="text-3xl font-bold text-red-300">Homepage</h1>
      <TaskList tasks={tasks} />
    </>
  )
}

export default Homepage