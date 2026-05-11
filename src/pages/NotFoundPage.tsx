import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <h1 className="error-code">404</h1>

        <h2 className="title">Oops! Page Not Found</h2>

        <p className="description">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link to="/" className="home-btn">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}