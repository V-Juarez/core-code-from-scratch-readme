import { useEffect, useState } from "react"
import axios from "axios"

import TaskList from "../components/TaskList"

function Homepage() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function fetchTasks() {
      const res = await axios.get("http://localhost:4000/api/task")
      setTasks(res.data.data)
    }
    fetchTasks()
  }, [])

  return <TaskList tasks={tasks} />
}

export default Homepage