import React, { useState } from 'react'
import Header from '../components/Header'
import AddIncome from '../components/AddIncome'
import Categories from '../components/Categories'
import RecentExp from '../components/RecentExp'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import 'react-calendar/dist/Calendar.css';

const DashBoard = () => {
    const [date, setDate] = useState(new Date());
    const [percentage,setPercentage] = useState(50) 
    return (
        <div className='bg-dark container-fluid pt-5' style={{ minHeight: "100vh", width: "100%" }}>
            
            <div className="row">
                <div className='col-8 d-flex justify-content-evenly align-items-center text-light flex-wrap'>
                <div className='mt-5 pt- ms-5 d-flex flex-wrap'>
                    <div className="text-light  d-flex align-items-center fw-bold p-4 rounded mb-3 ms-3 text-dark" style={{backgroundColor:" #CBDCCB"}}>
                           <div>Total Income  <br /><span style={{fontSize:"30px",color:"green"}}>₹10000</span></div>
                        </div>
                        <div className="text-light  d-flex align-items-center fw-bold p-4 rounded mb-3 text-dark ms-3" style={{backgroundColor:" #CBDCCB"}}>
                           <div>Total Expense  <br /><span style={{fontSize:"30px",color:"red"}}>₹5000</span></div>
                        </div>
                        <div className="text-light  d-flex align-items-center fw-bold p-4 rounded mb-3 text-dark ms-3 " style={{backgroundColor:" #CBDCCB"}}>
                           <div>Total Balance  <br /><span style={{fontSize:"30px"}} className='text-warning'>₹5000</span></div>
                        </div>
                        </div>
                    <div>
                       
                        <div className='mt-4 ms-5' style={{ width: 200, height: 200, }}>
                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                        <div className='d-flex mt-3'>
                            <div className=' me-2 mt-2' style={{backgroundColor:"#3498db",width:"10px",height:"10px"}}></div>
                            <p>Total Expense of this month</p>
                            </div>
                        </div>
                       
                    </div>
                    
                    
                </div>
                <div className='col-4'><AddIncome /></div>
            </div>
            <hr />
            <div className="row">
                <div className="col-lg-8"><Categories /></div>
                <div className="col-lg-4"><RecentExp /></div>
            </div>

        </div>
    )
}

export default DashBoard