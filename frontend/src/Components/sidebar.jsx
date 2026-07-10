import Logo from "../assets/Site Assets/Logo.png"
import DefaultPFP from "../assets/Site Assets/DefaultUserPhoto.png"
import { ChevronRight, ChevronLeft, LayoutDashboard, Bell, ChartColumn, History, Wrench, Package, LogOut } from "lucide-react"
import { useState } from "react"

function SideBar() {

  const [isCollapsed, setisCollapsed] = useState(true)
  return (
    <>

      <div className={`h-dvh bg-surface ${isCollapsed ? "w-20" : "w-64"}  flex flex-col font-sans border border-r-gray-800 transition-all`} >

        <div className={`h-25 px-4 flex items-center ${isCollapsed ? "justify-center":"justify-between" } `}>
          {!isCollapsed &&
            <div className="flex ">


              <div className="h-10 w-10"><img src={Logo} alt="Logo" className="object-contain rounded-lg" /></div>
              <div className="flex flex-col pl-2">
                <div className="text-heading text-[24px] font-bold leading-none">ERS Hive</div>
                <div className="text-gray-400 text-[12px] uppercase tracking-widest font-semibold mt-1">Inventory</div>
              </div>
            </div>
          }
          <button
            onClick={() => setisCollapsed(!isCollapsed)}
            className="p-1 transition-colors text-heading cursor-pointer"
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>

        </div>
        {!isCollapsed &&
          <div className="h-18 pl-4 pr-4 border-t border-gray-800 flex items-center">
            <div className="flex">
              <div className="h-10 w-10"><img src={DefaultPFP} alt="pfp" className="rounded-full object-cover" /></div>
              <div className="flex flex-col pl-2">
                <div className="text-heading text-[18px] font-medium leading-tight">John Doe</div>

                <div className="text-gray-400 text-[12px] font-mono mt-0.5">25BEC004</div>
              </div>
            </div>
          </div>
        }
        <div className={`text-heading text-[16px] pl-4 pr-4 pt-4 border-t border-gray-800 font-mono flex flex-col space-y-2 `}>

          <a href="/" className="gap-2 flex items-center h-10 px-3 rounded-lg outline-none focus:border focus:border-border focus:text-gold hover:bg-gray-800/50 transition-colors">
            <LayoutDashboard size={16} />
            {!isCollapsed && <div> Dashboard</div>}
          </a>
          <a href="/components" className="gap-2 flex items-center h-10 px-3 rounded-lg outline-none focus:border focus:border-border focus:text-gold hover:bg-gray-800/50 transition-colors">
            <Package size={16} />
            {!isCollapsed && <div> Components</div>}
          </a>
          <a href="/tools" className="gap-2 flex items-center h-10 px-3 rounded-lg outline-none focus:border focus:border-border focus:text-gold hover:bg-gray-800/50 transition-colors">
            <Wrench size={16} />
            {!isCollapsed && <div> Tools</div>}
          </a>
          <a href="/history" className="gap-2 flex items-center h-10 px-3 rounded-lg outline-none focus:border focus:border-border focus:text-gold hover:bg-gray-800/50 transition-colors">
            <History size={16} />
            {!isCollapsed && <div> History</div>}
          </a>
          <a href="/reports" className="gap-2 flex items-center h-10 px-3 rounded-lg outline-none focus:border focus:border-border focus:text-gold hover:bg-gray-800/50 transition-colors">
            <ChartColumn size={16} />
            {!isCollapsed && <div> Reports</div>}
          </a>
          <a href="/notifications" className="gap-2 flex items-center h-10 px-3 rounded-lg outline-none focus:border focus:border-border focus:text-gold hover:bg-gray-800/50 transition-colors">
            <Bell size={16} />
            {!isCollapsed && <div> Notifications</div>}
          </a>

        </div>

        <div className={`px-4 h-18 flex items-center  text-heading border-t border-gray-800 mt-auto hover:text-red-600 transition-colors cursor-pointer ${isCollapsed && "justify-center"}`} >
          <LogOut size={18} />
          {
            !isCollapsed &&
            <div className="text-[16px] font-medium px-3">Log Out</div>
          }
        </div>

       </div>  
       </>
  );
};
export default SideBar;
