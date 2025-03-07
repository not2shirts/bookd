import { Plus } from "lucide-react"
import { Login, AddBook } from "../components/index";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";


function Home() {
    const [Loggedin] = useOutletContext();

const [showComponent, setShowComponent] = useState(false);

    const handleClick = () => (
        setShowComponent(true)
    )
    console.log("Loggedin status:", Loggedin);
  return (
    <div className="flex w-full h-full">
<div className="fixed  bottom-6 right-6">
      <button className="border-2 rounded-full w-fit p-5 bg-green-100 hover:bg-green-600 hover:transition-colors" onClick={handleClick}>
        <Plus />
      </button>
    </div>

        {/* <div></div> add multiple item wih loop  */}

        {showComponent && (   Loggedin ? (
           <div className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center  transition-transform">
           <div className="bg-white p-6 rounded-lg max-w-2xl w-full  transition">
              <AddBook setShowComponent={setShowComponent} />
           </div>
         </div>
        ) : (   <div className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center  transition-transform">
            <div className="bg-white p-6 rounded-lg max-w-2xl w-full  transition">
               <Login setShowComponent={setShowComponent} />
            </div>
          </div> ))}
    </div>
  )
}

export default Home
