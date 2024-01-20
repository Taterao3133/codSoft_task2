import React from 'react'
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Login() {
  return (
   <div className="landing_page_Register left-0 top-0 fixed h-[100%] w-[100%]  border-4 border-red  bg-[rgb(0,0,0,0.3)]">
    
        <div className="user_register_container w-[600px] bg-slate-50 ml-[450px] mt-7 border-[2px] rounded-[4px] ">
        
            <Link to='/'><FaXmark className='x w-10 h-11 ml-[550px] bg-[#fff] cursor-pointer'/></Link>
            <div className="registration_form w-auto h-auto p-[52px] rounded-[12px] shadow-[(0 13px 24px 15px) ] relative bg-[#fff] shadow-[#bed5dd]">
                <div className="form_header_container">
                    <p className="header_titler text-[22px] font-[700] text-[#000]">Welcome to Job Board</p>
                    <p className="header_content text-[18px] font-[300] font-[nunito sans] mb-[20px]"> Register her to access latest jobs</p>
                </div>
                <form action="">
                    <div className="input_box_container mb-[16px]">
                        <label For='email' className='label min-h-[22px] text-[14px] font-[700] opacity-80'>Email Address</label>
                        <div className="input_box_wraper rounded-[4px]  border-[2px] border-[#e6e6e6] text-[#212529]  w-[100%]">
                            <input type="text" name="email" id="email" placeholder='You@gmail.com' className='t text-[100%] p-[10px] w-full box-border ' />
                       </div>
                    </div>
                    
                    <div className="input_box_container mb-[16px]">
                        <label For='password' className='label min-h-[22px] text-[14px] font-[700] opacity-80'>Password</label>
                        <div className="input_box_wraper rounded-[4px]  border-[2px] border-[#e6e6e6] text-[#212529]  w-[100%]">
                           <input type="text" name="password" id="password" placeholder='Enter 8 characters or more' className='t text-[100%] p-[10px] w-full box-border' />
                       </div>
                    </div>
                    
                    <div className="input_box_container mb-[16px]">
                        <label For='cpassword' className='label min-h-[22px] text-[14px] font-[700] opacity-80'>Confirm Password</label>
                        <div className="input_box_wraper rounded-[4px]  border-[2px] border-[#e6e6e6] text-[#212529]  w-[100%]">
                           <input type="password" name="cpassword" id="cpassword" placeholder='Same as above password' className='t text-[100%]  p-[10px] w-full box-border ' />
                       </div>
                    </div>
                    <button type='submit' className='b p-[13px] bg-[#f7b733] text-[19px] w-[100%] h-[60px] font-medium  flex gap-3 rounded-md items-center '>
                    <p className='t ml-[190px]'>Register </p>
                        <BsFillArrowRightCircleFill className='text-[#4abdac]  w-[30px] h-[auto]' />
                    </button>
                    

                </form>
            </div>

        </div>
   
   </div>
  )
}

export default Login




//

// position: fixed;
// display: flex;
// justify-content: center;
// align-items: center;
// top: 0;
// z-index: 6;
// left: 0;
// width: 100%;
// height: 100%;
// background: rgba(0