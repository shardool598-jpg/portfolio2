import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";





const Footer = () => {
  return (
    <>
    <div className='w-screen'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00000" fill-opacity="1" d="M0,128L40,149.3C80,171,160,213,240,192C320,171,400,85,480,69.3C560,53,640,107,720,154.7C800,203,880,245,960,234.7C1040,224,1120,160,1200,144C1280,128,1360,160,1400,176L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </div>
  <div className='w-full'>


<div className='bg-black p-10 font-sans  text-center'>


<p className="text-gray-50 pb-5">Designed and Developed By</p>



{/* <div className="h-1 border-2 border-white border-dotted"></div> */}


<div className="flex text-white w-full justify-between py-3">
              <FaFacebook />
              <FaMailBulk />
              <FaInstagram />
              <FaLinkedin />
              <FaGithub />
            </div>



<p className="text-gray-50 my-2">Shardul Maidkar</p>



</div>










  </div>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Footer