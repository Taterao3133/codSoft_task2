
import Header from "../components/Header/Header"
import img from "./home.jpg"


function Home() {
  return (
    <>
    <Header/>

    <div className="container relative group">
        <img src={img} alt="" className="object-cover w-full h-full opacity-90" />
        <div className="hero absolute inset-0 bg-[#4abdac] opacity-60"></div>
        <div className="hero_section ml-[230px] mt-[210px] absolute inset-0 flex flex-col ">
          <div className="job_numbers text-[#f2eded] font-medium text-[30px]">
            <p>4500+ Job Listings.</p>
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
    </>
  )
}

export default Home