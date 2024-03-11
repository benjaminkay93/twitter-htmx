import Html from "@kitajs/html"

export const Login = () => {
  return (
    <form hx-post="/user/login">
      <label for="username"><b>Username</b></label>
      <input type="text" name="username" required />
      <label for="password"><b>Password</b></label>
      <input type="password" name="password" required />

      <button type="submit">Login</button>
    </form>
  )
}