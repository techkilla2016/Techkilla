'use client'
import { Modal } from 'bootstrap'
import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const Career = () => {
    const EMPTY_VALUE = {
        First_Name: '',
        Last_Name: '',
        Phone_Number: '',
        Opportunity: '',
        about_us: '',
    }
    const [formData, setFormData] = useState(EMPTY_VALUE)
    const [show, setShow] = useState(false)
    function handleChange(event) {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleSubmit() {
        const { First_Name, Last_Name, Phone_Number, Opportunity, about_us } = formData
        if (First_Name && Last_Name && Phone_Number && Opportunity && about_us) {
            axios.post(`${apiKey}/api/email`, { ...formData, type: 'career', subject: "Looking for Opportunity" })
            setShow(false)
        }
        setShow(false)
    }
    return (
        <Modal size="xl" centered show={show} onHide={() => setShow(false)}>
            <Modal.Header className='mb-4' closeButton>
                <Modal.Title>Careers Form</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form className='px-5 pb-4'>
                    <Row>
                        <Col>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control value={formData?.First_Name} onChange={handleChange} name='First_Name' />
                        </Col>
                        <Col>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control value={formData?.Last_Name} onChange={handleChange} name='Last_Name' />
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mt-3'>
                            <Form.Label>Phone Number*</Form.Label>
                            <Form.Control value={formData?.Phone_Number} onChange={handleChange} name='Phone_Number' />
                        </Col>
                        <Col className='mt-3'>
                            <Form.Label>Opportunity Looking For*    </Form.Label>
                            <Form.Control value={formData?.Opportunity} onChange={handleChange} name='Opportunity' />
                        </Col>
                    </Row>
                    <Form.Group className="mt-3 mb-4 pb-4" controlId="formGridAddress2">
                        <Form.Label>How did you hear about us?</Form.Label>
                        <Form.Control value={formData?.about_us} onChange={handleChange} name='about_us' />
                    </Form.Group>
                    <button onClick={handleSubmit}>
                        <Button url='' title='Send Massage'></Button>
                    </button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default Career
