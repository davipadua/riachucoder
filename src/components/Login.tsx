import { useUsers } from "../hooks/users/useUsers";

export default function Login() {


const {users} = useUsers();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = (form.email as HTMLInputElement).value;
    const password = (form.password as HTMLInputElement).value;

    console.log("Email:", email);
    console.log("Password:", password);

    // Simulate a user login check
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      console.log("Login successful for user:", user);
      // Redirect to home or dashboard
      window.location.href = `/${user.id}/products`; // Adjust the path as needed
    } else {
      console.error("Login failed: Invalid email or password");
      alert("Invalid email or password. Please try again.");
    }
  }

  return (
    <>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <label className="flex flex-col">
          <span className="text-gray-700 mb-2">Email</span>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="border border-gray-300 p-2 rounded"
            placeholder="Enter your email"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-gray-700 mb-2">Password</span>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="border border-gray-300 p-2 rounded"
            placeholder="Enter your password"
          /> 
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
      </form>
    </>
  )
}