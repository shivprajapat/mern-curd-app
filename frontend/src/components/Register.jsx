import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';

export default function Register() {

    const [inputval, setINP] = useState({
        name: "", email: "", age: "", mobile: "", work: "", add: "", desc: ""
    })
    const setdata = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setINP((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }

    const addData = async (e) => {
        e.preventDefault();
        const { name, email, age, mobile, work, add, desc } = inputval;
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, work, add, mobile, desc, age
            })
        });
        const data = await res.json();
        console.log(data);

        if (res.status === 404 || !data) {
            toast.error('User Error!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            toast.success('User Added Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <section>
            <Container>
                <NavLink to="/">Home</NavLink>
                <Row>
                    <Col lg={8} className='mx-auto'>
                        <Card className='shadow border-0 p-4 rounded'>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name='name' value={inputval.name} onChange={setdata} />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name='email' value={inputval.email} onChange={setdata} />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control type="text" name='age' value={inputval.age} onChange={setdata} />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>Mobile  </Form.Label>
                                        <Form.Control type="text" name='mobile' value={inputval.mobile} onChange={setdata} />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col}>
                                        <Form.Label>Work</Form.Label>
                                        <Form.Control type="text" name='work' value={inputval.work} onChange={setdata} />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" name='add' value={inputval.add} onChange={setdata} />
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} name='desc' value={inputval.desc} onChange={setdata} />
                                </Form.Group>
                                <Form.Group className="text-center">
                                    <Button variant="primary" type="submit" onClick={addData}>
                                        Submit
                                    </Button>
                                    <ToastContainer />
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
