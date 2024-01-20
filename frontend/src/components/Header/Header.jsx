import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "../../pages/Login";
import { useState } from "react";

// colors  => ##f2f0f4, #f7b733 , #fc4a1a ,#4abdac




function Header() {

    const [isOpenLogin, setLoginOpen] = useState(false);

    const openLogin = () => {
        console.log('Opening chat...');
        setLoginOpen(true);
      };
      
      const closeLogin = () => {
        console.log('Closing chat...');
        setLoginOpen(false);
      };
  return (<>
    <div className="container bg-[#4abdac] border-b-4 ">   
        <div className="main_header flex pt-7">  <Link to='/'>
            <div className="header_log flex space-x-2 -mt-2 ml-16">
                <div className="logo ">
                <FaSearch className="logo_icon w-16 cursor-pointer h-16 bg-[#f7b733] text-[#f2f0f4]  border-4 rounded-full p-2"/>
                </div>
                <div className="name_header">
                    <span className="name font-bold text-3xl text-[#f7b733] cursor-pointer">Job Board</span>
                    <p className="quote text-[#f2f0f4] cursor-pointer">Find your dream job Her..</p>
                </div>
            </div></Link>
            {/* middle -- content */}
            <div className="middle_header flex ml-[280px] space-x-5 text-[20px] font-semibold cursor-pointer text-[#f2f0f4] ">
                <p className="hover:text-[#f7b733]">Home</p>
                <p className="hover:text-[#f7b733]">Browse Job </p>
                <p className="hover:text-[#f7b733]">Pages</p>
                <p className="hover:text-[#f7b733]">Blog</p>
                <p className="hover:text-[#f7b733]">Contact</p>

            </div>
            {/* end -- content  */}
            <div className="end_header flex text-[#ffffff] space-x-2 ml-[330px] cursor-pointer font-semibold">
                <div onClick={openLogin} className="login text-[19px] hover:text-[#f7b733]">Log in</div>
                {isOpenLogin && <Login onClose={closeLogin}/>}

                <div className="job_post text-[20px] bg-[#f7b733] hover:bg-[#4abdac] h-[35px] w-[110px] pl-2 rounded-md">
                    <span className="txt hover:text-[#f7b733]  text-[white]"> Post A Job</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header