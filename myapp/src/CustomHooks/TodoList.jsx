import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from "../Hooks/UseFetch";

export default function TodosList() {

    const [todos, loading] = useFetch('https://jsonplaceholder.typicode.com/todos');

    if (loading) {
        return <div className="text-center mt-5 fs-4 text-primary">Loading todos...</div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4 text-primary fw-bold">✅ Project Tasks Tracker</h2>
            <div className="table-responsive">
                <table className="table table-hover table-borderless align-middle caption-top">
                    <caption>A list of all active and completed tasks.</caption>
                    <thead className="table-primary">
                        <tr>
                            <th scope="col" className="text-center">#ID</th>
                            <th scope="col">Task Title</th>
                            <th scope="col" className="text-center">Owner ID</th>
                            <th scope="col" className="text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => (
                            <tr key={todo.id} className={todo.completed ? 'table-light' : ''}>
                                <td className="text-center text-muted fw-semibold">{todo.id}</td>
                                <td className={todo.completed ? 'text-decoration-line-through text-secondary' : 'fw-medium text-dark'}>
                                    {todo.title}
                                </td>
                                <td className="text-center">{todo.userId}</td>
                                <td className="text-center">
                                    {todo.completed ? (
                                        <span className="badge rounded-pill bg-success-subtle text-success py-2 px-3 shadow-sm">
                                            <i className="bi bi-check-circle-fill me-1"></i> Done
                                        </span>
                                    ) : (
                                        <span className="badge rounded-pill bg-danger-subtle text-danger py-2 px-3 shadow-sm">
                                            <i className="bi bi-hourglass-split me-1"></i> Waiting
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
