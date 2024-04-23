import { Route, Routes } from "react-router-dom";
import PageNotFound from "../components/page_not_found/PageNotFound";
import Login from "../components/login/Login";
import Signup from "../components/signup/Signup";
import Dashboard from "../components/dashboard/Dashboard";
// import PrivateRoute from "./PrivateRoute";
function AllRoutes() {
  return (
    <>
     <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="*" element={<PageNotFound/>} />
          {/* <Route path="/products" element={<PrivateRoute><AllProducts /></PrivateRoute>} /> */}
      </Routes>
    </>
  )
}

export default AllRoutes
