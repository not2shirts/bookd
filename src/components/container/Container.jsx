import { Outlet } from "react-router";
import { Header, Sidebar } from "../index";
import { useState } from "react";

function Container() {

    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [Loggedin, setLoggedin] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="min-h-screen ">
    <Header sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    <div className="">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className="">
        <Outlet context={[Loggedin]}  />
      </div>
    </div>
  </div>
  )
}

export default Container
