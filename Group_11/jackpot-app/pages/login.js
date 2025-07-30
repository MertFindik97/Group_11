export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form method="POST" action="/api/login"> {/* POST handling later */}
        <label>Username: <input type="text" name="username" required /></label><br />
        <label>Password: <input type="password" name="password" required /></label><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
