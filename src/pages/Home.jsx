import React from 'react'
import Header from '../components/Header'
import Questions from '../components/Questions'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <div>
        <Header/>
        <div >
          
          <div className="text-center text-light bg-dark d-flex justify-content-center align-items-center" style={{height:"100vh",width:"100%",borderRadius:"0px 0px 2050px 1000px"}}>
            <div>
              <div style={{fontSize:"70px"}}><i class="fa-solid fa-money-bill-transfer"></i></div>
              <h1 className='fw-bolder  pb-0 ms-3' style={{fontSize:"70px"}}>Money Manager</h1>
              <p className='f fs-5 mt-0 pt-0 ms-3'>Easily manage and track all your expenses in one convenient platform. <br />  
              Stay organized and in control of your finances with just a few clicks!</p>
              <Link to={"/Dashboard"} style={{textDecoration:"none"}} className='btn btn-light ms-3 py-3 text-dark fw-bold fs-5'>Get Started</Link>
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h1 style={{fontSize:"50px"}} className='fw-bold text-center pt-5 pb-2'>One Stop solution for all your all Expenses</h1>
          <div className='container text-center fw-semibold mb-5 pb-5'><span className='fs-5 container'>With our Expense Tracking tool, capture all expenses made for official purposes, including travel, directly on a single <br /> platform.  Our easy-to-use tool will ensure that you can effortlessly reconcile and reimburse all expenditures you made </span></div>
        </div>
        <div className="mt-5 d-flex justify-content-evenly text-center mb-5 flex-wrap">
          <div>
            <div style={{fontSize:"70px"}}><i class="fa-solid fa-piggy-bank"></i></div>
            <h3 className='text-center fw-bold'>Save Expenses</h3>
            <p className='fs-5'>Expense management automation <br /> helps in reducing leakage in  all <br /> expense.</p>
          </div>
          <div>
            <div style={{fontSize:"70px"}}><i class="fa-solid fa-chart-simple"></i></div>
            <h3 className='text-center fw-bold'>Seamless Process</h3>
            <p className='fs-5'>Same platform is used to record  the <br /> entire travel expenses as  well as other <br /> spends, making the process seamless.</p>
          </div>
        </div>
        <div className='mb-5'>
        <h1 style={{fontSize:"50px"}} className='fw-bold text-center pt-5 pb-2'>Get your benefits by creating your own account!</h1>
        <Link to={"/Register"} className='d-flex justify-content-center' style={{textDecoration:"none"}}><button className='btn btn-dark py-3 px-4 fw-bold fs-5'>Create Account</button></Link>
        </div>
        <Questions/>
        <Footer/>
    </div>
  )
}

export default Home