import { RiHome6Line, RiPieChartFill, RiApps2Line, RiMailOpenFill, RiNotification2Fill, RiSettings5Fill, RiLogoutBoxRFill } from "react-icons/ri";

const SideBar = (props) => {
  const {showMenu} = props
  return (
    <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between 
    rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"}`}>
      {/* Menu */}
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">Logo</h1>
          </li>
          {/* Primer link */}
          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
            <a href="#" className="bg-[#EC7C6A] p-4 flex justify-center rounded-xl text-white">
              <RiHome6Line className="text-2xl " />
            </a>
          </li>
          {/* Segundo Link */}
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a href="#" className="group-hover:bg-[#EC7C6A] p-4 flex justify-center rounded-xl text-[#EC7C6A] group-hover:text-white transition-colors">
              <RiApps2Line className="text-2xl " />
            </a>
          </li>
          {/* Tercer Link */}
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a href="#" className="group-hover:bg-[#EC7C6A] p-4 flex justify-center rounded-xl text-[#EC7C6A] group-hover:text-white transition-colors">
              <RiPieChartFill className="text-2xl " />
            </a>
          </li>
          {/* Cuarto Link */}
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a href="#" className="group-hover:bg-[#EC7C6A] p-4 flex justify-center rounded-xl text-[#EC7C6A] group-hover:text-white transition-colors">
              <RiMailOpenFill className="text-2xl " />
            </a>
          </li>
          {/* Quinto Link */}
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a href="#" className="group-hover:bg-[#EC7C6A] p-4 flex justify-center rounded-xl text-[#EC7C6A] group-hover:text-white transition-colors">
              <RiNotification2Fill className="text-2xl " />
            </a>
          </li>
          {/* Sexto Link */}
          <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a href="#" className="group-hover:bg-[#EC7C6A] p-4 flex justify-center rounded-xl text-[#EC7C6A] group-hover:text-white transition-colors">
              <RiSettings5Fill className="text-2xl " />
            </a>
          </li>
        </ul>
      </div>
      {/* Exit */}
      <div>
        <ul className="pl-4">
        <li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a href="#" className="group-hover:bg-[#EC7C6A] p-4 flex justify-center rounded-xl text-[#EC7C6A] group-hover:text-white transition-colors">
              <RiLogoutBoxRFill className="text-2xl " />
            </a>
          </li>
        </ul>
      </div>


    </div>
  )
}

export default SideBar