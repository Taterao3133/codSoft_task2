import { FaSearch } from "react-icons/fa";

// colors  => ##f2f0f4, #f7b733 , #fc4a1a ,#4abdac

function Header() {
  return (<>
    <div className="container bg-[#4abdac] ">   
        <div className="main_header flex pt-7">  
            <div className="header_log flex space-x-2 ml-16">
                <div className="logo">
                <FaSearch className="logo_icon w-16  h-16 bg-[#f7b733] text-[#f2f0f4]  border-4 rounded-full p-2"/>
                </div>
                <div className="name_header">
                    <span className="name font-bold text-3xl text-[#f7b733]">Job Board</span>
                    <p className="quote text-[#f2f0f4]">Find your dream job Her..</p>
                </div>

            </div>
            {/* middle -- content */}
            <div className="middle_header flex ml-[280px] space-x-5 text-[20px] text-[#f2f0f4]">
                <p>Home</p>
                <p>Browse Job </p>
                <p>Pages</p>
                <p>Blog</p>
                <p>Contact</p>

            </div>
            {/* end -- content  */}
            <div className="end_header flex text-[#f2f0f4] space-x-2 ml-[370px] ">
                <div className="login text-[19px]">Log in</div>
                <div className="job_post text-[20px] ">
                    <span className="txt"> Post A Job</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header