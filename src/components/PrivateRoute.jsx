import { Navigate, Outlet } from "react-router-dom"
import { useGlobal } from "../Contexts/GlobalContext"

const PrivateRoute = () => {
  const { user } = useGlobal()

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
      />
    )
  } else {
    return (
      <main className="w-full min-h-screen flex items-center justify-center px-10">
        <Outlet />
      </main>
    )
  }
}

export default PrivateRoute
