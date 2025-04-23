
import { Link, useLocation, useNavigate } from "react-router";




function Sidepanel({ Loggedin, handleLogout}) {

    const location = useLocation();

        const navigate = useNavigate();



  return (

        <div className= "w-[60vw] "   >
        <ul className=" font-light flex flex-col gap-1">
            <li><Link  className={`${location.pathname === '/'? "text-xl": '' }`} to='/' >Home</Link></li>
            <li><Link  className={`${location.pathname === '/library'? "text-xl": '' }`} to= '/library'  >Library</Link></li>
        </ul>
        <div className={`${!Loggedin? 'hidden' : '' } text-black bottom-10`}>
        <button onClick={handleLogout}> LogOut</button>
      </div>

        </div>

  )
}

export default Sidepanel
