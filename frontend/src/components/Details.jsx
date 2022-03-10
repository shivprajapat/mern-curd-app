import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { useParams } from 'react-router-dom';

export default function Details() {
    const { id } = useParams("");
    const [showData, setShowData] = useState([]);
    const handleChange = async (e) => {
        const res = await fetch(`/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        console.log(data);
        if (res.status === 404 || !data) {
            console.log('error');
        }
        else {
            setShowData(data);
            console.log('get data');
        }
    }
    useEffect(() => {
        handleChange()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                                            <h3><b>Name :</b> <span>{showData.name}</span> </h3>
                                            <h3><b>Age :</b> <span>21</span> </h3>
                                            <p><EmailIcon /> <b>Email :</b> <span>{showData.email}</span> </p>
                                            <p><WorkIcon /><b>Occuption :</b> <span>{showData.work}</span> </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="right_view">
                                        <div className="content">

                                            <p><PhoneIphoneIcon /> <b>Mobile :</b> <span>{showData.mobile}</span> </p>
                                            <p><LocationOnIcon /><b>Location :</b> <span>Jaipur</span> </p>
                                            <p> <b>Description :</b>{showData.desc}</p>
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
