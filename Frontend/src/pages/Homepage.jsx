import { useEffect, useState } from "react";
import { fetchTasks } from "../api/tasks";

import { ImClock, ImClock2 } from 'react-icons/im';
import TaskList from "../components/TaskList";

function Homepage() {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);

  useEffect(() => {
    fetchTasks()
      .then((res) => {
        setCompletedTasks(res.data.data.filter((task) => task.isdone));
        setPendingTasks(res.data.data.filter((task) => !task.isdone));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h3 className="text-xl font-bold text-gray-200 mb-7 flex"><ImClock className="mr-2"/> Pending Tasks</h3>
      <TaskList tasks={pendingTasks} />

      <h3 className="text-xl font-bold text-gray-200 mb-7 m-2 flex"><ImClock2 className="mr-2" />Completed Task</h3>
      <TaskList tasks={completedTasks} />
    </>
  )
}

export default Homepage;
