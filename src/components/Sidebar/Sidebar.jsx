import { Link, useLocation, useNavigate } from "react-router";
import { Sidepanel } from "../index";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";

function Sidebar({ sidebarOpen, Loggedin, setLoggedin }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Logged out successfully");
      navigate("/");
      setLoggedin(false)
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <div>
      <div className="px-4 z-50 hidden lg:block relative">
        <ul className=" font-light flex flex-col gap-1">
          <li>
            <Link
              className={`${location.pathname === "/" ? "text-xl" : ""}`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${location.pathname === "/library" ? "text-xl" : ""}`}
              to="/library"
            >
              Library
            </Link>
          </li>
        </ul>
      </div>

      <div className={`${!Loggedin? 'hidden' : '' } text-black bottom-10`}>
        <button onClick={handleLogout}> LogOut</button>
      </div>

      {sidebarOpen && (
        <div className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end lg:hidden transition-transform">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full min-h-screen transition-transform">
            <Sidepanel Loggedin={Loggedin}  handleLogout={handleLogout}/>

          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
