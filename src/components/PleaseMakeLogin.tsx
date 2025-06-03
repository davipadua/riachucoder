import { Link } from "react-router-dom";

export default function PleaseMakeLogin() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Please make the login</h1>
      <p className="mb-4">You need to log in to access this page.</p>
      <Link
        to="/"
        className="inline-block px-4 py-2"
      >
        Back to Login
      </Link>
    </div>
  );
}