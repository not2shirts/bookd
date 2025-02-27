
import { Sidebar, X } from "lucide-react"



function Header({sidebarOpen, toggleSidebar}) {



  return (
    <div className="flex min-w-[100vw] h-24 p-6 justify-between  ">
        <div className="font-semibold text-4xl">
        ｂｏｏｋｄ
        </div>
        <button className="w-fit lg:hidden z-10 transition-transform" onClick={toggleSidebar}>
            {sidebarOpen ? <X/>: <Sidebar/>}
        </button>

    </div>

  )
}

export default Header
