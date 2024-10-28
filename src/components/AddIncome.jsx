import React, { useState } from 'react'
import { Button,FloatingLabel, Form, Modal } from 'react-bootstrap';




const AddIncome = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
   <>
        <div className='text-light'>
            <button onClick={handleShow} className='btn btn-success p-2 fw-bold fs-5'>Add Income</button>
        </div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Your Income Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel controlId="floatingExpense" label="Income (₹)" className='mb-3'>
        <Form.Control type="text" placeholder="Amount of Expense (₹)" />
      </FloatingLabel>
      <div>
                    <select name="" id="dist" className='p-3 w-100 rounded mb-3'>
                        <option selected hidden disabled value="">Month</option>
                        <option value="">January</option>
                        <option value="">February</option>
                        <option value="">March</option>
                        <option value="">April</option>
                        <option value="">May</option>
                        <option value="">June</option>
                        <option value="">July</option>
                        <option value="">August</option>
                        <option value="">September</option>
                        <option value="">October</option>
                        <option value="">November</option>
                        <option value="">December</option>
                    </select>
                </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" className=''>Add</Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default AddIncome