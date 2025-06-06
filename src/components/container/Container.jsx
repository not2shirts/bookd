import { Outlet } from "react-router";
import { Header, Sidebar } from "../index";
import { useState } from "react";

function Container() {

    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [Loggedin, setLoggedin] = useState(false)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="min-h-screen ">
    <Header sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar}  />``
    <div className="">
      <Sidebar sidebarOpen={sidebarOpen} Loggedin={Loggedin} setLoggedin={setLoggedin} />
      <div className="">
        <Outlet context={[Loggedin,  setLoggedin] }  />
      </div>
    </div>
  </div>
  )
}

export default Container
