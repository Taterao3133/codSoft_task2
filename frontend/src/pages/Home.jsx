
import Header from "../components/Header/Header"
import img from "./home.jpg"
import { LiaRupeeSignSolid } from "react-icons/lia";
import { LiaHandPointRight } from "react-icons/lia";
import { CiBookmark } from "react-icons/ci";
import { FaBookReader } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import Footer from "../components/Footer/Footer";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";


function Home() {
  return (
    <>
    <Header/>
  <div className="body bg-[#f2f0f4]">
    <div className="container relative group ">
        <img src={img} alt="" className="object-cover w-full h-full opacity-90 shadow-xl" />
        <div className="hero absolute inset-0 bg-[#4abdac] opacity-60"></div>
        <div className="hero_section ml-[230px] mt-[210px] absolute inset-0 flex flex-col ">
          <div className="job_numbers text-[#f2eded] font-medium text-[30px]">
            <p>4500+ Job Listed</p>
          </div>
          <div className="header_title font-semibold text-[#f2eded] text-[60px]">
            <span>Find your Dream Job</span>
          </div>
          <div className="slogan text-[24px] text-[#f2eded]">
            <span>we Providing Best job list from all over India</span>
          </div>
          <div className="resume_uploder font-medium text-[20px] bg-[#f7b733] w-[290px] h-auto text-center p-2 mt-3 rounded-md">
            <button className="upload_resume hover:text-[white]">Upload Your Resume</button>
          </div>
        </div>
      </div>
    <div className="content_section  ">
      <div className="job_search_section border-b-[1px] border-[#c2c0c4] mt-11 ">
        <div className="job_container flex ml-[300px] space-x-10 mb-8 ">
          <div className="Key_search border-2 hover:border-[#4abdac]">
            <input type="text" placeholder="Job_title, Keyword, Company" className="gg text-center  h-[44px] w-[350px] rounded-md" />   
          </div>
          <div className="location_search border-[2px] hover:border-[#4abdac]">
            <input type="text" placeholder="Location, City, State" className="id text-center h-[44px] w-[300px] rounded-md "/>   
          </div>
          <div className="search_button bg-[#f7b733]  text-[#282929] hover:bg-[#4abdac] hover:text-[white] text-[25px] font-semibold text-center pt-[5px] w-[150px] h-auto rounded-md">
            <button  className="bt ">Search</button>
          </div>
        </div>
      </div>
      <div className="jobs_boxes flex space-x-3 ml-[190px] mt-7 ">
        <div className="box1 w-[40%] cursor-pointer  ">
          <div className="inner_job_headline p-5 h-[auto] border-[1px] shadow-xl pb-5 rounded-[10px] bg-[#f6f3f3] border-[#c2c0c4] mb-2">
            <div className="job_title font-semibold text-[20px]"><span>Web Developer</span></div>
            <div className="job_company text-[18px]"><p>Infosys</p></div>
            <div className="Job_location text-[18px]"><span>Hyderabad</span></div>
            <div className="Job_salary   mt-2 text-[white] flex gap-2">
              <p className="border-[1px] flex border-[#c2c0c4] bg-[#4abdac] w-[auto] pl-[5px] pr-[7px] rounded-md"><LiaRupeeSignSolid className="mt-[4px] " />45000 -60000 a month</p>
              <p className="fl  border-[#c2c0c4] bg-[#4abdac] pl-[5px] pr-[7px] rounded-md">Full time</p>
              <p className="border-[#c2c0c4] bg-[#4abdac] pl-[5px] pr-[7px] rounded-md">Fresher</p>
            </div>
            <div className="job_points mt-[50px]">
              <p className="desc flex gap-3">
              <LiaHandPointRight  className="mt-[5px] "/>this is frontend job
               </p>
              <p className="desc flex gap-3">
              <LiaHandPointRight  className="mt-[5px]"/>this is frontend job
               </p>
              <p className="desc flex gap-3">
              <LiaHandPointRight  className="mt-[5px]"/>this is frontend job
               </p>
              <p className="desc flex gap-3">
              <LiaHandPointRight  className="mt-[5px]"/>this is frontend job
               </p>
            </div>
        
          </div>
          <div className="inner_job_headline p-5 h-[auto] border-[1px] rounded-[10px] bg-[#f6f3f3] border-[#c2c0c4] mb-4">
            <div className="job_title font-semibold text-[20px]"><span>Web Developer</span></div>
            <div className="job_company text-[18px]"><p>Infosys</p></div>
            <div className="Job_location text-[18px]"><span>Hyderabad</span></div>
            <div className="Job_salary border-[1px] mt-2 text-[white] flex gap-2">
              <p className="border-[1px] flex border-[#c2c0c4] bg-[#4abdac] w-[auto] p-[3px] rounded-md"><LiaRupeeSignSolid />45000 -60000 a month</p>
              <p className="fl  border-[#c2c0c4] bg-[#4abdac] p-[3px] rounded-md">Full time</p>
              <p className="border-[#c2c0c4] bg-[#4abdac] p-[3px] rounded-md">Fresher</p>
            </div>
            <div className="job_points mt-[50px]">
              <p className="desc flex gap-3">
              <LiaHandPointRight  className="mt-[5px]"/>this is frontend job
               </p>
              <p className="desc flex gap-3">
              <LiaHandPointRight  className="mt-[5px]"/>this is frontend job
               </p>
              <p className="desc flex gap-3">
              <LiaHandPointRight  className="mt-[5px]"/>this is frontend job
               </p>
              <p className="desc flex gap-3">
              <LiaHandPointRight  className="mt-[5px]"/>this is frontend job
               </p>
            </div>
        
          </div>
          <div className="inner_job_headline p-5 h-[auto] border-[1px] rounded-[10px] bg-[#f6f3f3] border-[#c2c0c4] mb-4">
            <div className="job_title font-semibold text-[20px]"><span>Web Developer</span></div>
            <div className="job_company text-[18px]"><p>Infosys</p></div>
            <div className="Job_location text-[18px]"><span>Hyderabad</span></div>
            <div className="Job_salary border-[1px] mt-2 text-[white] flex gap-2">
              <p className="border-[1px] flex border-[#c2c0c4] bg-[#4abdac] w-[auto] p-[3px] rounded-md"><LiaRupeeSignSolid />45000 -60000 a month</p>
              <p className="fl  border-[#c2c0c4] bg-[#4abdac] p-[3px] rounded-md">Full time</p>
              <p className="border-[#c2c0c4] bg-[#4abdac] p-[3px] rounded-md">Fresher</p>
            </div>
            <div className="job_points mt-[50px]">
              <p className="desc flex gap-3">
              <LiaHandPointRight  className="mt-[5px]"/>this is frontend job
               </p>
              <p className="desc flex gap-3">
              <LiaHandPointRight  className="mt-[5px]"/>this is frontend job
               </p>
              <p className="desc flex gap-3">
              <LiaHandPointRight  className="mt-[5px]"/>this is frontend job
               </p>
              <p className="desc flex gap-3">
              <LiaHandPointRight  className="mt-[5px]"/>this is frontend job
               </p>
            </div>
        
          </div>
          <div className="inner_job_headline p-5 h-[auto] border-[1px] rounded-[10px] bg-[#f6f3f3] border-[#c2c0c4] mb-4">
            <div className="job_title font-semibold text-[20px]"><span>Web Developer</span></div>
            <div className="job_company text-[18px]"><p>Infosys</p></div>
            <div className="Job_location text-[18px]"><span>Hyderabad</span></div>
            <div className="Job_salary border-[1px] mt-2 text-[white] flex gap-2">
              <p className="border-[1px] flex border-[#c2c0c4] bg-[#4abdac] w-[auto] p-[3px] rounded-md"><LiaRupeeSignSolid />45000 -60000 a month</p>
              <p className="fl  border-[#c2c0c4] bg-[#4abdac] p-[3px] rounded-md">Full time</p>
              <p className="border-[#c2c0c4] bg-[#4abdac] p-[3px] rounded-md">Fresher</p>
            </div>
            <div className="job_points mt-[50px]">
              <p className="desc flex gap-3">
              <LiaHandPointRight  className="mt-[5px]"/>this is frontend job
               </p>
              <p className="desc flex gap-3">
              <LiaHandPointRight  className="mt-[5px]"/>this is frontend job
               </p>
              <p className="desc flex gap-3">
              <LiaHandPointRight  className="mt-[5px]"/>this is frontend job
               </p>
              <p className="desc flex gap-3">
              <LiaHandPointRight  className="mt-[5px]"/>this is frontend job
               </p>
            </div>
        
          </div>
          <div className="inner_job_headline p-5 h-[auto] border-[1px] rounded-[10px] bg-[#f6f3f3] border-[#c2c0c4] mb-4">
            <div className="job_title font-semibold text-[20px]"><span>Web Developer</span></div>
            <div className="job_company text-[18px]"><p>Infosys</p></div>
            <div className="Job_location text-[18px]"><span>Hyderabad</span></div>
            <div className="Job_salary border-[1px] mt-2 text-[white] flex gap-2">
              <p className="border-[1px] flex border-[#c2c0c4] bg-[#4abdac] w-[auto] p-[3px] rounded-md"><LiaRupeeSignSolid />45000 -60000 a month</p>
              <p className="fl  border-[#c2c0c4] bg-[#4abdac] p-[3px] rounded-md">Full time</p>
              <p className="border-[#c2c0c4] bg-[#4abdac] p-[3px] rounded-md">Fresher</p>
            </div>
            <div className="job_points mt-[50px]">
              <p className="desc flex gap-3">
              <LiaHandPointRight  className="mt-[5px]"/>this is frontend job
               </p>
              <p className="desc flex gap-3">
              <LiaHandPointRight  className="mt-[5px]"/>this is frontend job
               </p>
              <p className="desc flex gap-3">
              <LiaHandPointRight  className="mt-[5px]"/>this is frontend job
               </p>
              <p className="desc flex gap-3">
              <LiaHandPointRight  className="mt-[5px]"/>this is frontend job
               </p>
            </div>
        
          </div>
          {/* <div className="inner_job_headline h-[300px] border-[1px] border-[#c2c0c4] mb-4">
            dkfnkfn
          </div>
          <div className="inner_job_headline h-[200px] border-[1px] border-[#c2c0c4] mb-4">
            dkfnkfn
          </div>
          <div className="inner_job_headline h-[200px] border-[1px] border-[#c2c0c4] mb-4">
            dkfnkfn
          </div> */}
        </div>
        <div className="box2 box2 w-[40%]">
        <div className=" border-[1px] rounded-[10px] p-5 bg-[#f6f3f3] border-[#c2c0c4] shadow-xl pb-5 ">
          <div className="job_title font-semibold text-[26px]  text-center">
            <span>Web Developer</span>
          </div>
          <div className="job_company_name text-center text-[18px]"><span>Infosys</span></div>
          <div className="job_location text-center text-[18px]"><p>Hyderabad</p></div>
          <div className="apply_button gap-4 mt-[20px] ml-[30px] flex ">
            <div className="stars flex mt-5 gap-[3px] underline-offset-auto cursor-pointer">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke />
            </div>
            <CiBookmark className="w-[40px] h-[40px] ml-[180px] bg-[#4abdac] text-[white] p-[5px] rounded-md "/>
            <button className="bg-[#f7b733] text-[18px] p-2  hover:bg-[#4abdac] hover:text-[white] rounded-lg font-bold">Apply Now</button>
          </div>
          <div className=" w-[529px] ml-[-19px]   border-[#9f9d9d]  shadow-xl pb-5 "></div> {/* border */}

          <div className="job_details mt-3">  {/* Job detail box */}
            <p className="font-semibold text-[21px]">Profile Details</p>
            <div className="skills_section">
              <div className="skills flex gap-3 mt-3">
                <HiLightBulb className="mt-[0px] text-[#535151] h-[24px] w-[24px]" />
                <span className="f font-medium text-[18px] text-[#535151]">Skills :</span>
              </div>
              <div className="skill_details flex ml-[30px] gap-3 mt-3">
                <p className="bg-[#4abdac] text-[#f2e7e7] pl-[5px] pr-[7px] rounded-md font-semibold text-[17px]"> Java</p>
                <p className="bg-[#4abdac] text-[#f2e7e7] pl-[5px] pr-[7px] rounded-md font-semibold text-[17px]"> Java</p>
                <p className="bg-[#4abdac] text-[#f2e7e7] pl-[5px] pr-[7px] rounded-md font-semibold text-[17px]"> Java</p>
                <p className="bg-[#4abdac] text-[#f2e7e7] pl-[5px] pr-[7px] rounded-md font-semibold text-[17px]"> Java - python</p>
              </div>
              <div className="education_section">
                <div className="education flex gap-3 mt-3">
                <FaBookReader className="mt-[0px] text-[#535151] h-[24px] w-[24px]"/>
                <span className="Ed font-medium text-[18px] text-[#535151]">Education :</span>
                </div>
                <div className="education_details flex ml-[30px] gap-3 mt-3">
                <p className="bg-[#4abdac] text-[#f2e7e7] pl-[5px] pr-[7px] rounded-md font-semibold text-[17px]"> Bachelor's Degree</p>
                </div>
              </div>
            </div>
            
          </div>
          
          <div className="job_type flex gap-3 mt-3">
            <PiSuitcaseSimpleFill className="mt-[0px] text-[#535151] h-[24px] w-[24px]" />
            <span className="Jt font-medium text-[18px] text-[#535151]">Job Type :</span>
              
          </div>
            <div className="job_type_details flex ml-[30px] gap-3 mt-3">
              <p className="bg-[#4abdac] text-[#f2e7e7] pl-[5px] pr-[7px] rounded-md font-semibold text-[17px]"> Permanent</p>
            </div>
          
          <div className=" w-[529px] ml-[-19px] mt-4  border-[#9f9d9d] border-b-[1px]"></div> {/* Border */}

          <div className="job_description mt-3 h-[auto]">
            <p className="Jd font-medium text-[18px]">Job Description :</p>
            <div className="job_para">
              <p>Our Summer internships will start in May 2024 and will be 10-12 weeks in duration.

                  Please complete your application before Jan. 19, 2024.


                  Note: By applying to this position you will have an opportunity to share your preferred working location from the following: Bangalore, Karnataka, India; Hyderabad, Telangana, India; Pune, Maharashtra, India.
                  Minimum qualifications:
                  Currently enrolled in a Bachelor's program, majoring or intending to major in Computer Science or related technical field.
                  Experience in one or more general purpose programming languages.
                  Ability to communicate in English fluently.
                  Please complete your application before Jan. 19, 2024.


                  Note: By applying to this position you will have an opportunity to share your preferred working location from the following: Bangalore, Karnataka, India; Hyderabad, Telangana, India; Pune, Maharashtra, India.
                  Minimum qualifications:
                  Currently enrolled in a Bachelor's program, majoring or intending to major in Computer Science or related technical field.
                  Experience in one or more general purpose programming languages.
                  Ability to communicate in English fluently.
                  Please complete your application before Jan. 19, 2024.


                  Note: By applying to this position you will have an opportunity to share your preferred working location from the following: Bangalore, Karnataka, India; Hyderabad, Telangana, India; Pune, Maharashtra, India.
                  Minimum qualifications:
                  Currently enrolled in a Bachelor's program, majoring or intending to major in Computer Science or related technical field.
                  Experience in one or more general purpose programming languages.
                  Ability to communicate in English fluently.

                  Preferred qualifications:
                  Currently enrolled in a full time degree program and returning to the program after the completion of the internship</p>
            </div>


          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
    </>
  )
}

export default Home