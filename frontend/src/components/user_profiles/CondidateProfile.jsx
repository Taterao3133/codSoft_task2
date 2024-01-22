import { FaUserCircle } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { MdWifiCalling } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { RiEdit2Fill } from "react-icons/ri";
import React, { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function CondidateProfile() {
    const [issueYear, setIssueYear] = React.useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [details, setEducation] = useState({
      degree: '',
      year: '',
      college: '',
    });
  
    const generateYearOptions = () => {
      const currentYear = new Date().getFullYear();
      const years = [];
      for (let year = currentYear; year <= currentYear + 10; year++) {
        years.push(year.toString());
      }
      return years;
    };
    const handleIssueYearChange = (event) => {
      setIssueYear(event.target.value);
    };
    const handleInputChange = (field, value) => {
      setEducation((prevEducation) => ({
        ...prevEducation,
        [field]: value,
      }));
      console.log(value)
    };
     const [savedDetails, setSavedDetails] = useState({
    degree: '',
    year: '',
    college: '',
  });
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleSaveClick = () => {
    setIsEditing(false);

    setSavedDetails({ ...details });
    console.log('Saved Education:', details);
  };
  
  
  

  return (
    <div className="job_apply_container  h-[100%] w-[100%]  border-4 border-red ">
         <div className="user_register_container w-[600px] bg-slate-50 ml-[450px] mt-7 shadow-2xl border-[2px] rounded-[4px] mb-7 ">
       
        <div className="registration_form w-auto h-auto p-[52px] rounded-[12px] shadow-[(0 13px 24px 15px) ] relative bg-[#fff] shadow-[#bed5dd]">
            <div className="form_header_container text-[#000] flex">
               <div className="title"> 
                   <p className="header_titler text-[22px] font-[700] ">Taterao Jinkalwar</p>
                   
                </div>
                <div className="header"> <FaUserCircle className="icon w-[70px] h-[70px] ml-[230px]" /></div>
            </div>
            <div className="user_details flex space-x-3">
                   <TfiEmail className="mt-[5px]"/>
                   <p className="header_content text-[16px]  font-[nunito sans] "> luckymukeshtaterao@gmail.com </p>
            </div>
            <div className="user_details flex space-x-3">
                   <MdWifiCalling className="mt-[5px]"/>
            <p className="header_content text-[16px]  font-[nunito sans] "> +91 {savedDetails.number} </p>
             </div>
             <div className="user_details flex space-x-3">
                   <FaLocationDot className="mt-[5px]"/>
                   <p className="header_content text-[16px] font-[nunito sans]"> {savedDetails.clocation} </p>
             </div>
             <RiEdit2Fill className="ml-[430px] h-[30px] w-[30px] cursor-pointer  " onClick={handleEditClick}/>
             <p className="ml-[420px] font-medium text-[12px] cursor-pointer">Edit Details</p>



             <div className=" w-[529px] ml-[-19px] mt-4  border-[#9f9d9d] border-b-[1px]"></div> {/* Border */}

             


             {isEditing ? (
           <div className="education_section   mt-5" >
             <p>We use these details to show you jobs that match your unique skills and experience.</p>
             <div className="mobile_number mt-3">
                <label htmlFor='email' className='label min-h-[22px]  text-[14px] font-[700] opacity-80'>Mobile number</label>
                    <div className="input_box_wraper rounded-[4px]  border-[2px] border-[#e6e6e6] text-[#212529]  w-[100%]">
                        <input type="text" 
                        name="m_number" 
                        id="m_number" 
                        onChange={(event) => handleInputChange('number', event.target.value)}
                        placeholder='8331652078' 
                        className='t text-[100%] p-[10px] w-full box-border ' />
                   </div>
             </div>

             <div className="Qualification">
                <label htmlFor='email' className='label min-h-[22px]  text-[14px] font-[700] opacity-80'>Education</label>
                    <div className="input_box_wraper rounded-[4px]  border-[2px] border-[#e6e6e6] text-[#212529]  w-[100%]">
                        <input type="text" 
                        name="education"
                        onChange={(event) => handleInputChange('degree', event.target.value)}
                         id="education" 
                         placeholder='Recent degree or school' 
                         className='t text-[100%] p-[10px] w-full box-border ' />
                   </div>
             </div>
             <div className="Work_experience mt-3">
                 <label htmlFor='experience' className='label min-h-[22px]  text-[14px] font-[700] opacity-80'>Work Experience </label>
                    <div className="input_box_wraper rounded-[4px]  border-[2px] border-[#e6e6e6] text-[#212529]  w-[100%]">
                        <input type="text" 
                       onChange={(event) => handleInputChange('experience', event.target.value)}
                        name="experience" 
                        id="experience"
                         placeholder='company name' 
                         className='t text-[100%] p-[10px] w-full box-border ' />
                   </div>
                    <div className="input_box_wraper mt-2 rounded-[4px]  border-[2px] border-[#e6e6e6] text-[#212529]  w-[100%]">
                        <input type="number"
                        onChange={(event) => handleInputChange('yearExperience', event.target.value)}
                         name="year_experience" 
                         id="year_experience" 
                         placeholder='years of Experience'
                          className='t text-[100%] p-[10px] w-full box-border ' />
                   </div>
             </div>
             <div className="Skills_section mt-3">
                <span className="min-h-[22px]  text-[14px] font-[700] opacity-80">Skills</span>
                <div className="input_box_wraper rounded-[4px]  border-[2px] border-[#e6e6e6] text-[#212529]  w-[100%]">
                        <input type="text"
                         name="skills" 
                         id="skills" 
                         placeholder='Skills' 
                         className='t text-[100%] p-[10px] w-full box-border ' />
                </div>
             </div>
             <div className="certifications mt-3">
             <span className="min-h-[22px]  text-[14px] font-[700] opacity-80">Add Certificate</span>
                <div className="input_box_wraper rounded-[4px]  border-[2px] border-[#e6e6e6] text-[#212529]  w-[100%]">
                        <input type="text" 
                        name="certificates" 
                        id="certificates" 
                        placeholder='Certificate name' 
                        // value={education.degree}
                        // onChange={(event) => handleInputChange('degree', event)}
                        className='t text-[100%] p-[10px] w-full box-border ' />
                </div>
                <label className="label min-h-[22px] text-[14px] font-[700] opacity-80">Certificate Issue Year</label>
              <div className="input_box_wraper rounded-[4px] border-[2px] border-[#e6e6e6] text-[#212529] w-[100%]">
                <select
                  id="issue-year"
                  name="issue-year"
                  value={issueYear}
                  onChange={handleIssueYearChange}
                  className='t text-[100%] p-[10px] w-full box-border'
                >
                  <option value="" disabled>Select Issue Year</option>
                  {generateYearOptions().map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div className="c_location mt-3">
                <label htmlFor='email' className='label min-h-[22px]  text-[14px] font-[700] opacity-80'>Current location</label>
                    <div className="input_box_wraper rounded-[4px]  border-[2px] border-[#e6e6e6] text-[#212529]  w-[100%]">
                        <input type="text" 
                        name="c_location" 
                        id="c_location" 
                        onChange={(event) => handleInputChange('clocation', event.target.value)}
                        placeholder='8331652078' 
                        className='t text-[100%] p-[10px] w-full box-border ' />
                   </div>
             </div>
              <button type='submit' onClick={handleSaveClick} className='b ml-[390px] mt-3 p-[6px] bg-[#f7b733] text-[#000] text-[19px] w-[100px] h-[50px] font-medium  flex gap-3 rounded-md items-center '>
              <p className='t ml-[10px] hover:text-[white]'>Save</p>
              <BsFillArrowRightCircleFill className='hover:text-[#4abdac] text-[white]  w-[30px] h-[auto]' />
            </button>

             </div>
           </div>
            ) : (
            <div>
              <div className="user_details mt-3 space-x-3">
                    <h3 className="text-[18px] font-[500]">Education :</h3>
                   <p className="header_content text-[16px]  font-[nunito sans] "> {savedDetails.degree}</p> 
                   <p className="header_content text-[16px]  font-[nunito sans] "> 2021 </p>
            
    
                  <p className="header_content text-[16px]  font-[nunito sans] "> S.R.N.K govt degree college </p>
             </div>
            
             <div className="user_details mt-3 space-x-3">
                    <h3 className="text-[18px] font-[500]">Work Experience :</h3>
                   <p className="header_content text-[16px]  font-[nunito sans] "> {savedDetails.experience},</p>
                   <p className="header_content text-[16px]  font-[nunito sans] "> {savedDetails.yearExperience} Years</p>
             </div>
             
             <div className="user_details mt-3 space-x-3">
                    <h3 className="text-[18px] font-[500]">Skills :</h3>
                   <p className="header_content text-[16px]  font-[nunito sans] "> Python ,</p> 
                  
             </div>
            
             <div className="user_details mt-3 space-x-3">
                    <h3 className="text-[18px] font-[500]">Certificates :</h3>
                   <p className="header_content text-[16px]  font-[nunito sans] "> Python fullstack  ,</p> 
                   <p className="header_content text-[16px]  font-[nunito sans] ">2024</p>
             </div>
            </div>
               )}

        </div>
       </div>
    </div>
  )
}

export default CondidateProfile