import Logo from "../assets/Site Assets/Logo.png"
import DefaultPFP from "../assets/Site Assets/DefaultUserPhoto.png"

function SideBar()
{
  return (
    <>
      <div className="h-dvh bg-[#0A0A0F] w-64 flex flex-col">

        <div  className="h-25 pl-4 ">
          <div className="flex">
            <div className="h-10 w-10 pt-7.5"><img src={Logo} alt="Logo" /></div>
            <div className="flex flex-col pt-6 pl-2">
              <div className="text-[#ffffff] text-[24px] font-bold ">ERS Hive</div>
              <div className="text-white text-[12px]">Inventory</div>
            </div>
          </div>
        </div>

        <div className="h-18 pl-4 border-t border-gray-700 flex">
          <div className="flex pt-4">
            <div className="h-10 w-10"><img src={DefaultPFP} alt="pfp" /></div>
          </div>
          <div className="flex flex-col pl-2 pt-4">
            <div className="text-[#ffffff] text-[18px]">John Doe</div>
            <div className="text-[#ffffff] text-[12px]">25BEC004</div>
          </div>
        </div>
        <hr></hr>

        <div className="text-[#FFFFFF] text-[16px] pl-4 border-t border-gray-700">
          <a href="#Dashboard" className="flex h-10 pt-4 ">
            <div>Dashboard</div>
          </a>
          <a href="#components" className="flex h-10 pt-4">
            <div>Components</div>
          </a>
          <a href="#tools" className="flex h-10 pt-4">
            <div>Tools</div>
          </a>
          <a href="#History" className="flex h-10 pt-4">
            <div>History</div>
          </a>
          <a href="#reports" className="flex h-10 pt-4">
            <div>Reports</div>
          </a>
          <a href="#notifications" className="flex h-10 pt-4">
            <div>Notifications</div>
          </a>
        </div>

        <div className=" pl-4 h-18 flex items-center text-red-600 border-t border-gray-700 mt-auto">
          <div>Log Out</div>
        </div>

      </div>
    </>
  )
}
export default SideBar