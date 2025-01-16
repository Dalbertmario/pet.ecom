import { IoLogoOctocat } from "react-icons/io";
import { LuDog } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { togglesandwichCat, togglesandwichDog, togglesandWitch } from "./uistore";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
// import UsefetchCartItems from "../features/Carting/fetchcartitems";

function Sidebar() {
const role = JSON.parse(localStorage.getItem('role'))
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
                className={`${sandwichdog ? 'h-[300px] bg-slate-100 ' : 'h-[0px]'} w-full  ease-in-out duration-200 flex flex-col gap-3 items-center`}
                key="dog-list"
              >
             { sandwichdog && <div className="flex flex-col gap-1 p-2">
              <div className={`flex flex-col items-center gap-2`}>
                <h1 className="font-semibold text-base">Food</h1>
                  <NavLink onClick={()=>dispatch(togglesandWitch())} to='/headerpro/dog-dry'> <button className="headerBtn">Dry food</button></NavLink>
                 <NavLink onClick={()=>dispatch(togglesandWitch())}  to='/headerpro/dog-wet'> <button className="headerBtn">Wet food</button></NavLink> 
                  </div>
                  <div className="flex flex-col items-center gap-2">
                     <h1 className="font-semibold text-base">Treats</h1>
                     <NavLink onClick={()=>dispatch(togglesandWitch())}  to='/headerpro/dog-treat'> <button className="headerBtn" >Treats</button></NavLink> 
                      <NavLink onClick={()=>dispatch(togglesandWitch())}  to='/headerpro/dental'> <button className="headerBtn">Dental</button></NavLink> 
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1  className="font-semibold text-base">Supplies</h1>
              <NavLink onClick={()=>dispatch(togglesandWitch())}  to='/headerpro/dog-toy'> <button className="headerBtn">Toys</button></NavLink> 
              <NavLink onClick={()=>dispatch(togglesandWitch())}  to='/headerpro/dog-grooming'> <button className="headerBtn">Grooming</button></NavLink> 
              </div>
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
                className={`${sandwichcat ? 'h-[310px] bg-slate-100' : 'h-[0px]'} w-full  ease-in-out duration-200 flex items-center flex-col gap-3`}
                key="dog-list"
              >
             { sandwichcat && <div className="flex flex-col gap-4 p-2">
              <div className="flex items-center flex-col">
                <h1 className="font-semibold">Food</h1>
                    <NavLink onClick={()=>dispatch(togglesandWitch())}  to={`/headerpro/${'cat-dry'}`}><button className='hover:text-red-600 hover:bg-slate-300 transition-all rounded-lg'>Dry Food</button></NavLink> 
                    <NavLink onClick={()=>dispatch(togglesandWitch())}  to={`/headerpro/${'cat-wet'}`}> <button className='headerBtn'>Wet Food</button>  </NavLink>
                    <NavLink onClick={()=>dispatch(togglesandWitch())}  to={`/headerpro/${'cat-treat'}`}><button  className='headerBtn'>Treats</button></NavLink> 
                  </div> 
                  <div className="flex flex-col items-center ">
                     <h1 className='font-semibold'>Cat Litters</h1>
                  <NavLink onClick={()=>dispatch(togglesandWitch())}  to={`/headerpro/litter`}> <button className='headerBtn'>Cat Litter</button></NavLink>  
                   <NavLink onClick={()=>dispatch(togglesandWitch())}  to={`/headerpro/litter`}></NavLink>   <button className='headerBtn'>Cat Litter trays</button>
                   </div>
                   <div className="flex flex-col items-center  gap-2">
                     <h1 className='font-semibold'>Essentials</h1>
                    <NavLink onClick={()=>dispatch(togglesandWitch())}  to='/headerpro/cat-toy'><button className='headerBtn'>Toys</button></NavLink> 
                   <NavLink onClick={()=>dispatch(togglesandWitch())}  to='/headerpro/cat-grooming'> <button className='headerBtn'>Grooming</button></NavLink> 
                   </div>
                </div>

}
              </ul>
           { role?.user ?  <div className="flex mt-4 flex-col gap-1">
          <NavLink to='/profile'> <button
          onClick={()=>dispatch(togglesandWitch())} 
              className={`px-2 w-full flex flex-row items-center gap-3`}
            >
             <div className="bg-red-200 text-red-600 p-2 rounded-full">
            <span ><MdOutlineAccountCircle  size={20} /></span>
              </div>
              <h1>Profile</h1> 
            </button></NavLink>  
          </div> :  <div className="flex mt-4 flex-col gap-1">
          <NavLink to='/signUp'> <button
          onClick={()=>dispatch(togglesandWitch())} 
              className={`px-2 w-full flex flex-row items-center gap-3`}
            >
             <div className="bg-red-200 text-red-600 p-2 rounded-full">
            <span ><MdOutlineAccountCircle  size={20} /></span>
              </div>
              <h1>Login/Sign up</h1> 
            </button></NavLink>  
          </div> }
          <div className="flex mt-4 flex-col gap-1">
          <NavLink to='/customer'> <button
          onClick={()=>dispatch(togglesandWitch())} 
              className={`px-2 w-full flex flex-row items-center gap-3`}
            >
             <div className="bg-violet-200 text-violet-600 p-2 rounded-full">
            <span ><RiCustomerService2Line size={20} /></span>
              </div>
              <h1>Customer care</h1> 
            </button></NavLink>  
          </div>
          <div className="flex mt-4 flex-col gap-1">
          <NavLink to='/'> <button
          onClick={()=>dispatch(togglesandWitch())} 
              className={`px-2 w-full flex flex-row items-center gap-3`}
            >
             <div className="bg-orange-200 text-orange-600 p-2 rounded-full">
            <span ><CiLogout size={20} /></span>
              </div>
              <h1>Log Out</h1> 
            </button></NavLink>  
          </div>
          </div>
          </div>
        </nav>
      </div>
    );
  }

  export default Sidebar