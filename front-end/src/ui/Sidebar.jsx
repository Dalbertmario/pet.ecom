import { IoLogoOctocat } from "react-icons/io";
import { LuDog } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { togglesandwichCat, togglesandwichDog } from "./uistore";

function Sidebar() {
const {sandwich,sandwichdog,sandwichcat} = useSelector(state=>state.uistore)
const dispatch = useDispatch()
    return (
      <div
        className={`bg-white fixed h-screen w-52 ease-in-out duration-300 z-10 ${
          !sandwich ? "w-[0%]" : "w-[50%]"
        } overflow-hidden transition-all duration-300`}
      >
        <nav className="flex flex-col gap-4 h-full text-black">
          {/* Dog Menu */}
          <div className="flex flex-col gap-1">
            <button
              className={`px-2 w-full flex flex-row items-center gap-3`}
              onClick={() => dispatch(togglesandwichDog(true))}
            >
             <div className="bg-blue-200 text-blue-600 p-2 rounded-full">
            <span ><LuDog size={20}/></span>
              </div>
             <h1 className={`${sandwichdog && 'text-blue-600 font-base'}`}>Dogs</h1>
            </button>
              <ul
                className={`${sandwichdog ? 'h-[120px] bg-slate-100 ' : 'h-[0px]'} w-full  ease-in-out duration-200 flex flex-col gap-3 items-center`}
                key="dog-list"
              >
             { sandwichdog && <div className="flex flex-col gap-1 p-2">
                <li>Food</li>
                <li>Treat</li>
                <li>Health</li>
                <li>Toys</li>
                </div>
             }
              </ul>
          </div>
          <div>
          <div className="flex flex-col gap-1">
            <button
              className={`px-2 w-full flex flex-row items-center gap-3`}
              onClick={() => dispatch(togglesandwichCat(true))}
            >
             <div className="bg-pink-200 text-pink-600 p-2 rounded-full">
            <span ><IoLogoOctocat size={20} /></span>
              </div>
              <h1 className={`${sandwichcat && 'text-pink-600 text-base'}`}>Cats</h1> 
            </button>
              <ul
                className={`${sandwichcat ? 'h-[120px] bg-slate-100' : 'h-[0px]'} w-full  ease-in-out duration-200 flex items-center flex-col gap-3`}
                key="dog-list"
              >
             { sandwichcat && <div className="flex flex-col gap-1 p-2">
                <li>Food</li>
                <li>Treat</li>
                <li>Health</li>
                <li>Toys</li>
                </div>
             }
              </ul>
          </div>
          </div>
        </nav>
      </div>
    );
  }

  export default Sidebar