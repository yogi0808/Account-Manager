import React, { useState } from "react"
import { useGlobal } from "../Contexts/GlobalContext"
import { Link } from "react-router-dom"

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const { login } = useGlobal()

  const handleLogin = (e) => {
    e.preventDefault()

    login(user)
  }
  return (
    <form
      className="bg-gray-700 p-6 rounded-xl flex justify-center items-center flex-col gap-5 w-full md:w-[500px]"
      onSubmit={handleLogin}
    >
      <h1 className="font-bold text-3xl uppercase">Login</h1>
      <label className="flex flex-col w-full">
        <span className="font-bold">Email:</span>
        <input
          type="email"
          className="border-2 px-3 py-1 rounded-lg"
          placeholder="Enter your email"
          value={user.email}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, email: e.target.value }))
          }
          required
        />
      </label>
      <label className="flex flex-col w-full">
        <span className="font-bold">Password:</span>
        <input
          type="password"
          className="border-2 px-3 py-1 rounded-lg"
          placeholder="Enter your password"
          value={user.password}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, password: e.target.value }))
          }
          required
        />
      </label>
      <p>
        Don't have Account{" "}
        <Link
          className="text-blue-500"
          to="/register"
        >
          Register.
        </Link>
      </p>
      <button className="bg-blue-700 w-full px-4 py-2 rounded-lg font-bold">
        Login
      </button>
    </form>
  )
}

export default Login
