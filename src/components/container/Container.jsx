import { Outlet } from "react-router";
import { Header, Sidebar } from "../index";

function Container() {
  return (
    <div className="min-h-screen flex flex-col ">
    <Header />
    <div className="flex flex-1">
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  </div>
  )
}

export default Container
