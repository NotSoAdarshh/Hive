import React from 'react';
import SideBar from './sidebar';
import SearchBar from './searchBar';


function DashBoard() {
    return(
  <>
  
  <div className="w-full min-h-screen bg-[#050505] text-white overflow-x-hidden">
      
      <div className="fixed top-0 left-0 h-full w-[240px] z-50 bg-[#0A0A0F] border-r border-[#ffffff05]">
        <SideBar />
      </div>

      <div className="ml-[240px] relative w-[calc(100%-240px)] min-h-screen">
        
        <div className="w-full p-4 border-b border-[#ffffff10]">
          <SearchBar />
        </div>

        <div className="absolute left-[16px] right-[16px] h-[170px] top-[112px] bg-[#0A0A0F] rounded-[12px] border-x-[1px] border-t-[3px] border-b-[1px] border-[#FFD700] md:left-[32px] md:right-[32px]">
          
          <div className="absolute w-[64px] h-[64px] top-[53px] left-[49px] rounded-full bg-[#FFD700]">
            <div className="absolute w-[32px] h-[32px] top-[16px] left-[16px]">
              <div className="absolute w-[10.67px] h-[10.67px] top-[4px] left-[10.67px] border-[2.67px] border-[#000000E5] rounded-full"></div>
              <div className="absolute w-[18.67px] h-[8px] top-[20px] left-[6.67px] border-t-[2.67px] border-[#000000E5] rounded-2xl"></div>
            </div>
          </div>

          <div className="absolute w-[200px] h-[28px] top-[49px] left-[129px]">
            <p className="text-[#F9FAFB] font-semibold text-[20px]">John Doe</p>
          </div>

          <div>
            <p className="absolute w-[159px] h-[20px] top-[77px] left-[129px] text-[#9CA3AF] text-[14px]">Roll No: 2023BCS001</p>
            <p className="absolute w-[151.8px] h-[20px] top-[101px] left-[129px] text-[#9CA3AF] text-[14px]">Position: Core Member</p>
          </div>

          <div className="hidden md:flex flex-row-reverse">
            <p className="text-[#9CA3AF] absolute top-[62px] whitespace-nowrap right-[32px]">2 items borrowed</p>
            <p className="text-[#9CA3AF] absolute top-[85px] whitespace-nowrap right-[32px]">1 pending requests</p>
          </div>
        </div>

        <div className="absolute w-[200px] h-[16px] top-[315px] left-[16px] md:left-[32px]">
          <p className="text-[#9CA3AF] whitespace-nowrap text-[12px] font-semibold tracking-wider">PENDING RETURNS</p>
        </div>
        <div className="absolute w-[200px] h-[20px] top-[335px] left-[16px] md:left-[32px]">
          <p className="text-[#9CA3AF] text-[14px]">Items awaiting return</p>
        </div>

        <div className="absolute top-[375px] left-[16px] right-[16px] md:left-[32px] md:right-[32px]">
          <div className="flex flex-col xl:flex-row gap-6">
            
            <div className="flex-1 min-h-[250px] rounded-[12px] border border-white bg-[#0A0A0F] p-8 relative">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-[80px] h-[80px] rounded-[8px] border border-white bg-zinc-900 overflow-hidden">
                    <img src="" alt="Arduino Uno R3" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h2 className="text-white text-[22px] font-semibold">Arduino Uno R3</h2>
                    <p className="text-[#9CA3AF] text-[14px] mt-1">Borrowed for robotics competition project</p>
                    <div className="flex items-center gap-4 mt-3 text-[#9CA3AF] text-[13px]">
                      <span>Qty : 2</span>
                      <span>📅 Due: 6/10/2026</span>
                    </div>
                    <p className="text-[#9CA3AF] text-[13px] mt-2">3 days remaining</p>
                  </div>
                </div>
                <div className="w-[60px] h-[35px] bg-[#064E3B] rounded-[4px] flex flex-col justify-center items-center text-[#10B981] text-[10px] font-bold">
                  <span>ON TIME</span>
                </div>
              </div>
              <button className="w-full mt-6 h-[40px] bg-[#FFD700] rounded-[6px] text-black font-medium cursor-pointer">Return Item</button>
            </div>

            <div className="flex-1 min-h-[250px] rounded-[12px] border border-white bg-[#0A0A0F] p-8 relative">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-[80px] h-[80px] rounded-[8px] border border-white bg-zinc-900 overflow-hidden">
                    <img src="" alt="Digital Multimeter" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h2 className="text-white text-[22px] font-semibold">Digital Multimeter</h2>
                    <p className="text-[#9CA3AF] text-[14px] mt-1">Testing circuit boards</p>
                    <div className="flex items-center gap-4 mt-3 text-[#9CA3AF] text-[13px]">
                      <span>Qty : 1</span>
                      <span>📅 Due: 6/10/2026</span>
                    </div>
                    <p className="text-[#9CA3AF] text-[13px] mt-2">3 days remaining</p>
                  </div>
                </div>
                <div className="w-[68px] h-[35px] bg-[#7F1D1D] rounded-[4px] flex justify-center items-center text-[#EF4444] text-[10px] font-bold">
                  <span>OVERDUE</span>
                </div>
              </div>
              <button className="w-full mt-6 h-[40px] bg-[#FFD700] rounded-[6px] text-black font-medium cursor-pointer">Return Item</button>
            </div>

          </div>
        </div>

        <div className="absolute left-[16px] right-[16px] top-[1000px] xl:top-[660px] md:left-[32px] md:right-[32px] pb-12">
          
          <div className="relative w-full h-[40px]">
            <p className="absolute text-[#9CA3AF] text-[12px] font-semibold tracking-wider uppercase top-0 left-0">
              BORROW REQUESTS
            </p>
            <p className="absolute text-[#9CA3AF] text-[14px] top-[18px] left-0 whitespace-nowrap">
              Your current requests
            </p>
          </div>

          <div className="relative w-full max-w-[358px] h-[305px] mt-4 rounded-[12px] border-[#FFFFFF20] border-[1px] bg-[#050506]">
            
            <div className="absolute w-[calc(100%-40px)] h-[128px] top-[20px] left-[20px] rounded-[8px] border-[#FFFFFF20] border-[1px] overflow-hidden bg-zinc-900">
              <img 
                src="" 
                alt="L298N Motor Driver" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute w-[calc(100%-40px)] h-[75px] top-[165px] left-[20px]">
              <h4 className="text-[#F9FAFB] font-semibold text-[18px] truncate">L298N Motor Driver</h4>
              <p className="text-[#9CA3AF] text-[14px] mt-0.5">DC motor control project</p>
              
              <div className="flex items-center gap-8 mt-4 text-[#9CA3AF] text-[13px] border-t border-[#ffffff10] pt-2">
                <p className="whitespace-nowrap">Qty : 1</p>
                <p className="whitespace-nowrap">📅 Due: 6/10/2026</p>
              </div>
            </div>
            
            <div className="absolute w-[72.31px] h-[24px] top-[167px] right-[20px] bg-[#78350F] rounded-[4px] flex justify-center items-center">
              <span className="text-[#F59E0B] text-[12px] font-bold leading-none">PENDING</span>
            </div>

          </div>
        </div>
      </div>
      </div>
    </>
    );
    }
  
            
        
export default DashBoard;