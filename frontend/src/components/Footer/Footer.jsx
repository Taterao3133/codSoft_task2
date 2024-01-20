
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";


function Footer() {
  return (
    <div className="footer p-11 bg-[#54b8a9]">
        <div className="content ml-[150px] grid grid-cols-4 gap-2">
         <div className="c1  ">
            <p className="c2  text-[#ffffff] font-semibold text-[26px] hover:text-[#f7b733] cursor-pointer">Job Board</p>
            <p className="text-[18px] mt-3">Connect with Us</p>
            <div className="social_links text-white mt-3  flex gap-3">

              <FaInstagramSquare className="h-[30px] w-[30px] hover:text-[#f7b733] cursor-pointer"/>
              <FaLinkedin  className="h-[30px] w-[30px] hover:text-[#f7b733] cursor-pointer"/>
              <FaSquareTwitter className="h-[30px] w-[30px] hover:text-[#f7b733] cursor-pointer" />
              <ImFacebook2 className="h-[30px] w-[26px] hover:text-[#f7b733] cursor-pointer"/>

            </div>
            
         </div>
         <div className="c2 text-white mt-[10px] text-[19px] font-serif">
            <p className='hover:text-[#f7b733] hover:text-[21px] cursor-pointer'>About Us</p>
            <p className='hover:text-[#f7b733] hover:text-[21px] cursor-pointer'>Careers</p>
         </div>
         <div className="c3 text-white mt-[10px] text-[19px] font-serif">
            <p className='hover:text-[#f7b733] hover:text-[21px] cursor-pointer'>Helf center</p>
            <p className='hover:text-[#f7b733] hover:text-[21px] cursor-pointer'>Report Issue</p>
         </div>
         <div className="c4 text-white mt-[10px] text-[19px] font-serif">
           <p className='hover:text-[#f7b733] hover:text-[21px] cursor-pointer'>Privacy policy</p>
           <p className='hover:text-[#f7b733] hover:text-[21px] cursor-pointer'>Fraud alert</p>
           <p className='hover:text-[#f7b733] hover:text-[21px] cursor-pointer'>Terms & Conditions</p>
         </div>

        </div>
    </div>
  )
}

export default Footer