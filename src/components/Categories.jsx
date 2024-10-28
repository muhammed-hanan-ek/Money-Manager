import React, { useState } from 'react'
import CategoryCard from './CategoryCard'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';



const Categories = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='container mt-5'>
      <div className='text-light mt-5 border rounded p-3'>
        <div className="d-flex justify-content-between">
          <h2>Categories</h2>
          <button className='btn btn-success' onClick={handleShow}>Add Category</button>
        </div>
        <CategoryCard/>
      </div>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingCategory" label="Category" className='mb-3'>
        <Form.Control type="text" placeholder="Category" />
      </FloatingLabel>
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

export default Categories