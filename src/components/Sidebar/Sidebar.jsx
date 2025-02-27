
import { Link, useLocation } from "react-router";
import { Sidepanel } from "../index";
function Sidebar({sidebarOpen}) {

    const location = useLocation();

  return (
    <div><div className="px-4 hidden lg:block" >

    <ul className=" font-light flex flex-col gap-1">
        <li><Link  className={`${location.pathname === '/'? "text-xl": '' }`} to='/' >Home</Link></li>
        <li><Link  className={`${location.pathname === '/library'? "text-xl": '' }`} to= '/library'  >Library</Link></li>
    </ul></div>

        {sidebarOpen && (
            <div className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end lg:hidden transition-transform">
            <div className="bg-white p-6 rounded-lg max-w-2xl w-full min-h-screen transition-transform">
              <Sidepanel/>
            </div>
          </div>
        )}

    </div>
  )
}

export default Sidebar
