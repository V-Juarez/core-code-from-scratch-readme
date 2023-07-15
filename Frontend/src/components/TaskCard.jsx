import { useNavigate } from "react-router-dom";
import { updateTask } from "../api/tasks";
import { ImCalendar, ImPencil, ImAlarm, ImClock, ImClock2 } from 'react-icons/im';
// import React from "react";

function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-950 p-4 m-100 hover:cursor-pointer hover:bg-gray-500"
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
    >
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">{task.title}</h2>
        <button
          onClick={async (e) => {
            e.stopPropagation();
            const res = await updateTask(task.id, {
              completed: !task.isDone,
            });
            if (res.status === 200) {
              window.location.reload()
            }
          }}
          className="flex m-2"
        >
          <svg
            className={`w-6 h-6 ${task.isdone ? "text-green-600" : "text-yellow-300"}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" />
          </svg>
          {/* <ReactSwitch
            checked={checked}
            onChange={}
          /> */}
        </button>
      </div>
      <p className="text-slate-400">{task.description}</p>
      <p className="text-slate-300">{task.isDone ? 'Completada' : 'Pendiente'}</p>
      <span className="text-slate-200 flex"><ImCalendar className="mr-2"/>{task.created_at}</span>
      <p className="text-slate-500 flex"><ImClock className="mr-2" /> {task.created_task}</p>
    </div>
  );
}

export default TaskCard;
