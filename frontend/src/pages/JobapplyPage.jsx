
import React from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from 'react-router-dom';

function JobapplyPage({ onClose }) {
  return (
    <div className="job_apply_container left-0 top-0 fixed h-[100%] w-[100%] z-50 border-4 border-red bg-[rgb(0,0,0,0.3)]">
      <div className="job_apply_form w-[600px] bg-slate-50 ml-[450px] mt-7 border-[2px] rounded-[4px] ">
        <Link to='/'>
          <HiMiniXMark onClick={onClose} className='x w-10 h-11 text-[#000] ml-[550px] bg-[#fff] cursor-pointer' />
        </Link>
        <div className="application_form w-auto h-[500px] p-[52px] rounded-[12px] shadow-[(0 13px 24px 15px) ] relative bg-[#fff] shadow-[#bed5dd] overflow-scroll overscroll-y-auto">
          <div className="form_header_container text-[#000]">
            <p className="header_title text-[22px] font-[700] ">Apply for Job</p>
            <p className="header_content text-[18px] font-[300] font-[nunito sans] mb-[20px]">Submit your application below</p>
          </div>
          <form action="">
            {/* Add form fields for job application, e.g., resume upload, personal details, etc. */}
            <div className="input_box_container mb-[16px] text-[#000]">
              <label htmlFor='resume' className='label min-h-[22px] text-[14px] font-[700] opacity-80'>Experience level</label>
              <div className="input_box_wraper rounded-[4px] border-[2px] border-[#e6e6e6] text-[#212529] w-[100%]">
                <input type="number" name="resume" id="d" required className='t text-[100%] p-[10px] w-full box-border' />
              </div>
            </div>
            <div className="input_box_container mb-[16px] text-[#000]">
              <label htmlFor='resume' className='label min-h-[22px] text-[14px] font-[700] opacity-80'>Job Title (optional) </label>
              <div className="input_box_wraper rounded-[4px] border-[2px] border-[#e6e6e6] text-[#212529] w-[100%]">
                <input type="text" name="resume" id="first-name"  className='t text-[100%] p-[10px] w-full box-border' />
              </div>
            </div> 
            <div className="input_box_container mb-[16px] text-[#000]">
              <label htmlFor='resume' className='label min-h-[22px] text-[14px] font-[700] opacity-80'>Company Name (optional)</label>
              <div className="input_box_wraper rounded-[4px] border-[2px] border-[#e6e6e6] text-[#212529] w-[100%]">
                <input type="text" name="last-name" id="last-name"  className='t text-[100%] p-[10px] w-full box-border' />
              </div>
            </div> 
            <div className="input_box_container mb-[16px] text-[#000]">
              <label htmlFor='resume' className='label min-h-[22px] text-[14px] font-[700] opacity-80'>Will you be able to reliably commute to {} for this job?</label>
              <div className="input_box_wraper rounded-[4px] space-x-3 ">
              <label>
                  <input
                    type="radio"
                    value="Yes"
                    // checked={employmentType === 'fullTime'}
                    // onChange={handleEmploymentTypeChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    value="No"
                    // checked={employmentType === 'partTime'}
                    // onChange={handleEmploymentTypeChange}
                  />
                 No
                </label>
              </div>
            </div>
            <div className="input_box_container mb-[16px] text-[#000]">
              <label htmlFor='resume' className='label min-h-[22px] text-[14px] font-[700] opacity-80'>Email</label>
              <div className="input_box_wraper rounded-[4px] border-[2px] border-[#e6e6e6] text-[#212529] w-[100%]">
                <input type="text" name="resume" id="d" required className='t text-[100%] p-[10px] w-full box-border' />
              </div>
            </div>
            <div className="input_box_container mb-[16px] text-[#000]">
              <label htmlFor='resume' className='label min-h-[22px] text-[14px] font-[700] opacity-80'>Resume (PDF or Word)</label>
              <div className="input_box_wraper rounded-[4px] border-[2px] border-[#e6e6e6] text-[#212529] w-[100%]">
                <input type="file" name="resume" id="resume" accept=".pdf, .doc, .docx" className='t text-[100%] p-[10px] w-full box-border' />
              </div>
            </div>

            {/* Add more form fields as needed */}

            <button type='submit' className='b p-[13px] bg-[#f7b733] text-[#000] text-[19px] w-[100%] h-[60px] font-medium  flex gap-3 rounded-md items-center '>
              <p className='t ml-[190px] hover:text-[white]'>Submit Application</p>
              <BsFillArrowRightCircleFill className='hover:text-[#4abdac] text-[white]  w-[30px] h-[auto]' />
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default JobapplyPage;
