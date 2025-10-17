import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light text-center">
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <h2 className="mb-3">Page Not Found</h2>
            <p className="text-muted mb-4">
                Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>
            <Link to="/" className="btn btn-primary px-4">
                Go Back Home
            </Link>
        </div>
    );
}
 