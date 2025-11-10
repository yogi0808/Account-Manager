import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Login from "./Screens/Login"
import Register from "./Screens/Register"
import Profile from "./Screens/Profile"
import PrivateRoute from "./components/PrivateRoute"
import NotForAuthUser from "./components/NotForAuthUser"
import GlobalContextProvider from "./Contexts/GlobalContext"

function App() {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route
              path="/"
              element={<Profile />}
            />
          </Route>
          <Route element={<NotForAuthUser />}>
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/register"
              element={<Register />}
            />
          </Route>
          {/* if the route not found(404) then redirect to home(/) */}
          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  )
}

export default App
