import React from 'react'

const CategoryCard = () => {
  return (
    <div className='row'>
      <div className='col-lg-4 mt-3'>
        <div className='card container p-3' style={{width:"18rem"}}>
          <div>
            <h3>Grocery</h3><hr />
            <p className='fw-bold'>Total Expense of this Category</p>
            <span className='fw-bold' style={{fontSize:"40px"}}>₹1000</span>
            <hr />
            <p className='fw-bold'>Recent Expense:</p>
            <div>
              <table className='table'>
                <tbody>
                <tr>
                    <td>12/12/2024</td>
                    <td>₹ 1000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-4 mt-3'>
        <div className='card container p-3' style={{width:"18rem"}}>
          <div>
            <h3>Travel</h3><hr />
            <p className='fw-bold'>Total Expense of this Category</p>
            <span className='fw-bold' style={{fontSize:"40px"}}>₹1000</span>
            <hr />
            <p className='fw-bold'>Recent Expense:</p>
            <div>
              <table className='table'>
                <tbody>
                <tr>
                    <td>12/12/2024</td>
                    <td>₹ 1000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-4 mt-3'>
        <div className='card container p-3' style={{width:"18rem"}}>
          <div>
            <h3>Personal</h3><hr />
            <p className='fw-bold'>Total Expense of this Category</p>
            <span className='fw-bold' style={{fontSize:"40px"}}>₹1000</span>
            <hr />
            <p className='fw-bold'>Recent Expense:</p>
            <div>
              <table className='table'>
                <tbody>
                <tr>
                    <td>12/12/2024</td>
                    <td>₹ 1000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default CategoryCard