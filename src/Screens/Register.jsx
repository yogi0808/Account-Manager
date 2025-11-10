import React, { useState } from "react"
import { useGlobal } from "../Contexts/GlobalContext"
import { Link } from "react-router-dom"

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  })

  const { register } = useGlobal()

  const handleRegister = (e) => {
    e.preventDefault()

    register(user)
  }
  return (
    <form
      className="bg-gray-700 p-6 rounded-xl flex justify-center items-center flex-col gap-5 w-full md:w-[500px]"
      onSubmit={handleRegister}
    >
      <h1 className="font-bold text-3xl uppercase">Register</h1>
      <label className="flex flex-col w-full">
        <span className="font-bold">Name:</span>
        <input
          type="text"
          placeholder="Enter your name"
          className="border-2 px-3 py-1 rounded-lg"
          value={user.name}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }
          required
        />
      </label>
      <label className="flex flex-col w-full">
        <span className="font-bold">Email:</span>
        <input
          type="email"
          placeholder="Enter your email"
          className="border-2 px-3 py-1 rounded-lg"
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
          placeholder="Enter your password"
          className="border-2 px-3 py-1 rounded-lg"
          value={user.password}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, password: e.target.value }))
          }
          required
        />
      </label>
      <p>
        Alredy have Account{" "}
        <Link
          className="text-blue-500"
          to="/login"
        >
          Login.
        </Link>
      </p>
      <button className="bg-blue-700 w-full px-4 py-2 rounded-lg font-bold">
        Register
      </button>
    </form>
  )
}

export default Register
