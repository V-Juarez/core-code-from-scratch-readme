import { ImPencil } from "react-icons/im";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex justify-between items-center my-7">
      <Link to="/">
        <h1 className="text-3xl font-bold text-red-300">Task App</h1>
      </Link>

      <Link 
        to="/tasks/new"
        className="bg-zinc-999 hover:bg-gray-934 text-white font-bold py-2 px-4 rounded flex">
        <ImPencil className="mr-2"/>Create Task</Link>
    </header>
  );
}

export default Navbar;
