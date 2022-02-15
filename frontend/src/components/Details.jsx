import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
export default function Details() {
    return (
        <div className='details'>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Row>
                                <div className="buttons text-end mb-2">
                                    <Button variant="primary mx-2 btn-sm"><EditIcon /></Button>
                                    <Button variant="danger btn-sm"><DeleteOutlineIcon /></Button></div>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="left_view">
                                        <img className='details-user-img' src="https://statinfer.com/wp-content/uploads/dummy-user.png" style={{ width: 50 }} alt="" />
                                        <div className="content">
                                            <h3><b>Name :</b> <span>shiv</span> </h3>
                                            <h3><b>Age :</b> <span>21</span> </h3>
                                            <p><EmailIcon /> <b>Email :</b> <span>shiv@gmail.com</span> </p>
                                            <p><WorkIcon /><b>Occuption :</b> <span>web developer</span> </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="right_view">
                                        <div className="content">

                                            <p><PhoneIphoneIcon /> <b>Mobile :</b> <span>1234567890</span> </p>
                                            <p><LocationOnIcon /><b>Location :</b> <span>Jaipur</span> </p>
                                            <p  > <b>Description</b> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laudantium.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </CardContent>
                    </Card>
                </Row>
            </Container>
        </div >
    )
}
