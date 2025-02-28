import { Plus } from "lucide-react"
import { Login, AddBook } from "../components/index";



function Home({Loggedin}) {

    const handleClick = () => (
        Loggedin ? (
            <div> <AddBook/></div>
        ) : (   <div className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center lg:hidden transition-transform">
            <div className="bg-white p-6 rounded-lg max-w-2xl w-full  transition">
               <Login/>
            </div>
          </div> )
    )

  return (
    <div className="flex w-full h-full">

        <div > <button className="place-self-end self-end border-2 rounded-full w-fit p-5 bg-green-100 " onClick={handleClick} ><Plus/></button>  </div>

        {/* <div></div> add multiple item wih loop  */}

    </div>
  )
}

export default Home
