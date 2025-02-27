
import { Link, useLocation } from "react-router";
function Sidepanel() {

    const location = useLocation();
  return (

        <div className= "w-[60vw]"   >
        <ul className=" font-light flex flex-col gap-1">
            <li><Link  className={`${location.pathname === '/'? "text-xl": '' }`} to='/' >Home</Link></li>
            <li><Link  className={`${location.pathname === '/library'? "text-xl": '' }`} to= '/library'  >Library</Link></li>
        </ul>
        </div>

  )
}

export default Sidepanel
