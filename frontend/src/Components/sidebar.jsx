import Logo from "../assets/Site Assets/Logo.png"
import { ChevronRight, ChevronLeft, LayoutDashboard, Bell, ChartColumn, History, Wrench, Package, LogOut } from "lucide-react"
import { useState } from "react"

function SideBar({ session, onSignOut }) {

  const [isCollapsed, setisCollapsed] = useState(true)
  const user = session?.user;
  const displayName = user?.name || user?.email?.split("@")[0] || "ERS Member";
  const displayEmail = user?.email || "Google account";
  const avatarSrc = user?.image;
  const avatarFallback = displayName
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

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
              <div className="h-10 w-10 overflow-hidden rounded-full border border-border/30 bg-gold/10 flex items-center justify-center text-xs font-bold text-gold">
                {avatarSrc ? (
                  <img src={avatarSrc} alt={displayName} className="h-full w-full rounded-full object-cover" />
                ) : (
                  <span>{avatarFallback}</span>
                )}
              </div>
              <div className="flex flex-col pl-2">
                <div className="text-heading text-[18px] font-medium leading-tight">{displayName}</div>

                <div className="text-gray-400 text-[12px] font-mono mt-0.5">{displayEmail}</div>
              </div>
            </div>
          </div>
        }
        <div className={`text-heading text-[16px] pl-4 pr-4 pt-4 border-t border-gray-800 font-mono flex flex-col space-y-2 `}>

          <a href="/" className="gap-2 flex items-center h-10 px-3 rounded-lg outline-none focus:border focus:border-border focus:text-gold hover:bg-gray-800/50 transition-colors justify-center">
            <LayoutDashboard size={16} />
            {!isCollapsed && <div> Dashboard</div>}
          </a>
          <a href="/components" className="gap-2 flex items-center h-10 px-3 rounded-lg outline-none focus:border focus:border-border focus:text-gold hover:bg-gray-800/50 transition-colors justify-center">
            <Package size={16} />
            {!isCollapsed && <div> Components</div>}
          </a>
          <a href="/tools" className="gap-2 flex items-center h-10 px-3 rounded-lg outline-none focus:border focus:border-border focus:text-gold hover:bg-gray-800/50 transition-colors justify-center">
            <Wrench size={16} />
            {!isCollapsed && <div> Tools</div>}
          </a>
          <a href="/history" className="gap-2 flex items-center h-10 px-3 rounded-lg outline-none focus:border focus:border-border focus:text-gold hover:bg-gray-800/50 transition-colors justify-center ">
            <History size={16} />
            {!isCollapsed && <div> History</div>}
          </a>
          <a href="/reports" className="gap-2 flex items-center h-10 px-3 rounded-lg outline-none focus:border focus:border-border focus:text-gold hover:bg-gray-800/50 transition-colors justify-center">
            <ChartColumn size={16} />
            {!isCollapsed && <div> Reports</div>}
          </a>
          <a href="/notifications" className="gap-2 flex items-center h-10 px-3 rounded-lg outline-none focus:border focus:border-border focus:text-gold hover:bg-gray-800/50 transition-colors justify-center">
            <Bell size={16} />
            {!isCollapsed && <div> Notifications</div>}
          </a>

        </div>

        <button
          type="button"
          onClick={onSignOut}
          className={`px-4 h-18 w-full flex items-center text-heading border-t border-gray-800 mt-auto hover:text-red-600 transition-colors cursor-pointer ${isCollapsed && "justify-center"}`}
        >
          <LogOut size={18} />
          {
            !isCollapsed &&
            <div className="text-[16px] font-medium px-3">Log Out</div>
          }
        </button>

       </div>  
       </>
  );
};
export default SideBar;
