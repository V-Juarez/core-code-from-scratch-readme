import { useNavigate} from "react-router-dom";

function TaskCard({task}) {
  const navigate = useNavigate()
  return (
    <div
      className="bg-zinc-950 hover:cursor-pointer hover:bg-gray-500"
      onClick={() => {
        navigate(`/tasks/${task.id}`)
      }}
    >
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.isDone}</p>
      <span>{task.created_at}</span>
    </div>
  );
}

export default TaskCard;
