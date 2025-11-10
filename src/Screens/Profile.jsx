import React, { useState } from "react"
import { useGlobal } from "../Contexts/GlobalContext"

const Profile = () => {
  const { user, deleteUser, updateUser, logout } = useGlobal()
  const [update, setUpdate] = useState(false)

  const [updatedUser, setUpdatedUser] = useState({ ...user })

  const handleUpdate = () => {
    if (!update) return setUpdate(true)

    updateUser(updatedUser)

    setUpdate(false)
  }

  return (
    <div className="bg-gray-700 p-6 rounded-xl flex justify-center items-center flex-col gap-5 w-full md:w-[500px]">
      <h1 className="font-bold text-3xl uppercase">Profile</h1>
      <label className="flex flex-col w-full">
        <span className="font-bold">Name:</span>
        <input
          type="text"
          placeholder="Enter your name"
          className="border-2 px-3 py-1 rounded-lg disabled:border-0"
          value={updatedUser.name}
          onChange={(e) =>
            setUpdatedUser((prev) => ({ ...prev, name: e.target.value }))
          }
          required
          disabled={!update}
          readOnly={!update}
        />
      </label>
      <label className="flex flex-col w-full">
        <span className="font-bold">Email:</span>
        <input
          type="email"
          placeholder="Enter your email"
          className="border-2 px-3 py-1 rounded-lg disabled:border-0"
          value={updatedUser.email}
          onChange={(e) =>
            setUpdatedUser((prev) => ({ ...prev, email: e.target.value }))
          }
          required
          disabled={!update}
          readOnly={!update}
        />
      </label>
      <label className="flex flex-col w-full">
        <span className="font-bold">Password:</span>
        <input
          type="password"
          placeholder="Enter your password"
          className="border-2 px-3 py-1 rounded-lg disabled:border-0"
          value={updatedUser.password}
          onChange={(e) =>
            setUpdatedUser((prev) => ({ ...prev, password: e.target.value }))
          }
          required
          disabled={!update}
          readOnly={!update}
        />
      </label>
      <button
        onClick={handleUpdate}
        className="bg-blue-700 w-full px-4 py-2 rounded-lg font-bold"
      >
        Update
      </button>
      <button
        className="bg-blue-700 w-full px-4 py-2 rounded-lg font-bold"
        onClick={logout}
      >
        Logout
      </button>
      <button
        className="bg-blue-700 w-full px-4 py-2 rounded-lg font-bold"
        onClick={() => deleteUser(user.id)}
      >
        Delete
      </button>
    </div>
  )
}

export default Profile
