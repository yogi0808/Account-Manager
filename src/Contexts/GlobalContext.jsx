import { createContext, useContext, useState } from "react"

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
  // getting loggedIn user from local storage
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || null
  )

  //   getting all registerd users form local storage
  const [allUsers, setAllUsers] = useState(
    JSON.parse(localStorage.getItem("allUsers")) || []
  )

  const login = (user) => {
    const existingUser = allUsers.find((u) => u.email === user.email)

    if (!existingUser) {
      return alert("User not found(404)")
    }

    if (user.password !== existingUser.password) {
      return alert("Incorrect password")
    }

    setUser(existingUser)
    localStorage.setItem("loggedInUser", JSON.stringify(existingUser))
  }

  const logout = () => {
    localStorage.removeItem("loggedInUser")
    setUser(null)
  }

  const updateUser = (user) => {
    if (user.name.length < 3) {
      return alert("Name must be at least 3 characters")
    } else if (user.password < 4) {
      return alert("Password must be at least 3 characters")
    }

    const updatedUsers = allUsers.map((u) => {
      if (u.id === user.id) {
        u.name = user.name
        u.email = user.email
        u.password = user.password
      }

      return u
    })

    setAllUsers(updatedUsers)
    setUser(user)
    localStorage.setItem("allUsers", JSON.stringify(updatedUsers))
    localStorage.setItem("loggedInUser", JSON.stringify(user))
  }

  const deleteUser = (id) => {
    if (!confirm("Are you sure you want to delete Account.")) return
    const updatedUsers = allUsers.filter((u) => u.id !== id)

    setAllUsers(updatedUsers)
    localStorage.setItem("allUsers", JSON.stringify(updatedUsers))

    logout()
  }

  const register = (user) => {
    const isAlredyUser = allUsers.find((u) => u.email === user.email)

    if (isAlredyUser) return alert("User Alredy exist with same email")

    if (user.name.length < 3) {
      return alert("Name must be at least 3 characters")
    } else if (user.password < 4) {
      return alert("Password must be at least 3 characters")
    }

    const id = allUsers.length + 1

    setAllUsers((prev) => [...prev, user])
    localStorage.setItem(
      "allUsers",
      JSON.stringify([...allUsers, { ...user, id }])
    )

    setUser({ ...user, id })
    localStorage.setItem("loggedInUser", JSON.stringify({ ...user, id }))
  }

  return (
    <GlobalContext.Provider
      value={{ user, login, logout, updateUser, deleteUser, register }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider

// Easy to use everyver else no neet to import 2 things
export const useGlobal = () => useContext(GlobalContext)
