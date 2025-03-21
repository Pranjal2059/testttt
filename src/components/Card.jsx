import { Link } from "react-router-dom"

function Card(){
    return(
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 transition-transform">
        <h3 className="text-xl font-semibold mb-2">Task Management App</h3>
        <p className="mb-4">A React-based task management application with drag-and-drop functionality.</p>
        <Link to="/project" className="text-primary-light dark:text-primary-dark hover:underline transition-colors duration-300">View Project →</Link>
      </div>
    )
}

export default Card 