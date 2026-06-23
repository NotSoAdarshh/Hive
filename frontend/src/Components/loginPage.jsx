import Login from '../assets/Site Assets/login_img.png'
import Logo from "../assets/Site Assets/Logo.png"
import { User, Lock } from "lucide-react";


function LoginPage() {
  return (
    <>
      <div className=" min-h-screen flex w-full font-mono">
        <div className="relative flex flex-col w-[51.5%] min-h-screen overflow-hidden min-w-150">
          <img
            src={Login}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />


        </div>


        <div className='relative bg-bg flex justify-center items-center w-full min-h-screen px-10 '>
          <div className='flex flex-col gap-6 my-14'>
            <div className='flex items-center flex-col gap-2.5'>
              <img src={Logo} alt="" srcset="" className='w-17' />
              <h1 className='font-orbitron font-bold text-3xl text-heading '>ERS Hive</h1>
              <p className='text-[16px] font-mono text-fg'>Inventory Mangement Service</p>
            </div>

            {/* Form section */}
            <div className='font-rajdhani bg-surface border border-border rounded-xl  w-115 p-9 shadow-[0_0_50px_5px] shadow-circuit'>
              <form action="" className='m-auto'>

                <label htmlFor="" className='text-gold block mb-2'>Roll Number</label>
                <div className='bg-circuit rounded-sm flex px-5 py-2 items-center gap-2.5 mb-5'>
                  <User size={16} style={{ color: 'gold', flexShrink: 0 }} />
                  <input type="text" placeholder='Enter your roll number' className='text-fg w-full outline-none' />
                </div>

                <label htmlFor="" className='text-gold block mb-2'>Password</label>
                <div className='bg-circuit rounded-sm flex px-5 py-1.5 items-center gap-2.5 mb-6'>
                  <Lock size={16} style={{ color: 'gold', flexShrink: 0 }} />
                  <input type="password" placeholder='Enter your password' className='text-fg w-full outline-none' />
                </div>


                <button type='submit' className='bg-gold font-orbitron w-full py-2 rounded-md font-bold mb-7'>
                  Login
                </button>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className='font-mono text-fg '
                  >
                    Forgot Password?
                  </button>
                </div>


              </form>
            </div>
            <p className='text-mono mt-5  text-gold text-center' >
              Electronics &amp; Robotics Society • IIITDM Jabalpur
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default LoginPage;