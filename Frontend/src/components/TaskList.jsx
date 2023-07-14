import React, { useState, useEffect } from 'react';
import TaskCard from "./TaskCard"

function TaskList({ tasks }) {
  const [completedTask, setCompletedTask] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('')
        const data = await res.json()

        const taskDefaultStatus = data.map(task => ({
          ...task,
          isDone: false,
        }))

        setCompletedTask(taskDefaultStatus)
      } catch (error) {
        console.log(error);
      }
    }

    fetchData()
  }, [])

  return (
    <div className="grid grid-cols-3 gap-4">
      {
        tasks.map(task => (
          <TaskCard task={task} key={task.id} />
        ))
      } 
    </div>
  )
}

export default TaskList