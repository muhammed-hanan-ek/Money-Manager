import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';



const RecentExp = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='mt-5 container text-light'>
      <div className="p-3">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Recent Expenses</h5>
          <button className='btn btn-success' onClick={handleShow}>Add Expense</button>
        </div>
        <div className='mt-4'>
          <table className='table text-center'>
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>12/12/2024</td>
                <td>Grocery</td>
                <td>₹ 1000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingExpense" label="Your Expense (₹)" className='mb-3'>
        <Form.Control type="text" placeholder="Your Expense (₹)" />
      </FloatingLabel>
      <input type="date" className='w-100 p-3 rounded form-control mb-3' />
      <div>
                    <select name="" id="dist" className='p-3 w-100 rounded mb-3'>
                        <option selected hidden disabled value="">Category</option>
                        <option value="">Grocery</option>
                        <option value="">Travel</option>
                        <option value="">Personal</option>
                    </select>
                </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default RecentExp