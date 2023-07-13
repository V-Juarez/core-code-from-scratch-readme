function TaskList({ tasks }) {
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {
        tasks.map(task => (
          <div 
            key={task.id}
            className="bg-zinc-950 hover:cursor-pointer hover:bg-gray-500"
            >
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>{task.isDone}</p>
            <span>{task.created_at}</span>
          </div>
        ))
      } 
    </div>
  )
}

export default TaskList