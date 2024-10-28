import React from 'react'

const Footer = () => {
  return (
    <div className='bg-dark text-light'>
        <div className="row container ">
            
           
                <div className='d-flex justify-content-center p-5 container'>
                    <input className='px-2 py-3 rounded bg-transparent border w-50 text-light' placeholder='Ask your doubts!!!' type="text" />
                    <button className='btn btn-light ms-2'>Submit</button>
                </div>
                <div style={{fontSize:"30px"}} className='d-flex justify-content-center container pb-5'>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-instagram ms-5"></i>
                <i class="fa-brands fa-facebook ms-5"></i>
                <i class="fa-brands fa-twitter ms-5"></i>
                </div>
        </div>
    </div>
  )
}

export default Footer