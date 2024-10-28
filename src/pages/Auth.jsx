import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Google from '../images/google.png'


const Auth = ({insideRegister}) => {
  return (
    <div className='d-flex justify-content-center align-items-center container' style={{height:"100vh"}}>
        <div className='container bg-dark text-light w-75 p-5 shadow'style={{borderRadius:"200px 1000px 500px 1000px"}}>
          <div className='text-center'>
            <h1 className='mb-5'><u>{insideRegister?"Register":"Login"}</u></h1>
          <div  style={{fontSize:"70px"}}><i class="fa-solid fa-money-bill-transfer"></i></div>
          <h1 className='fw-bolder  pb-0 ms-3' style={{fontSize:"70px"}}>Money Manager</h1>
          <hr />
          <div className='d-flex justify-content-center w-100'>
            <div className='w-50 mt-3'>
            {insideRegister&&
            <FloatingLabel
          controlId="floatingName"
          label="Username"
          className="mb-4 w-100 text-dark"
        >
          <Form.Control type="text" placeholder="Username" />
        </FloatingLabel>}
            <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-4 w-100 text-dark"
        >
          <Form.Control type="email" placeholder="Email Address" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password" className='mb-4 w-100 text-dark'>
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <button className='w-100 btn btn-success py-2 fw-bold fs-5 mb-1'>{insideRegister?"Register":"Login"}</button>
        <div>
          {
            insideRegister?
            <p>Already have an Account? Click here to <Link to={"/Login"} className='text-light'>Login</Link></p>
            :
            <p>New user? Click here to <Link to={"/Register"} className='text-light'>Register</Link></p>
          }
        </div>
        <hr />
        <div className='mt-3'>
          <div className='btn btn-light py-2 fw-bold'><img className='me-2' width="25px" src={Google} alt="" />Connect with Google</div>
        </div>
            </div>
          </div>
          </div>

        </div>
    </div>
  )
}

export default Auth