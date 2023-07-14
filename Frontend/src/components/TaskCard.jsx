import { useNavigate } from "react-router-dom";
import { updateTask } from "../api/tasks";

function TaskCard({ task }) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-zinc-950 hover:cursor-pointer hover:bg-gray-500"
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
              completed: !task.completed,
            });
            if (res.status === 200) {
              window.location.reload()
            }
          }}
        >
          <svg
            className={`w-6 h-6 ${task.completed ? "text-green-900" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <p className="text-slate-400">{task.description}</p>
      <p>{task.isDone ? 'Completada' : 'Pendiente'}</p>
      <span className="text-slate-200">{task.created_at}</span>
    </div>
  );
}

export default TaskCard;
