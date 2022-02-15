import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
export default function Edit() {
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

    return (
        <section>
            <Container>
                <NavLink to="/">Home 2</NavLink>
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
                                <Form.Group className="mb-3 text-center">
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
