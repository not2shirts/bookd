import { Sidebar } from "lucide-react"


function Header() {
  return (
    <div className="flex min-w-[100vw] h-24 p-6 justify-between  ">
        <div className="font-semibold text-4xl">
        ｂｏｏｋｄ
        </div>
        <div className="w-fit lg:hidden ">
            <Sidebar/>
        </div>
    </div>
  )
}

export default Header
