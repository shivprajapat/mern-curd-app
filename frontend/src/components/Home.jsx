import React, { useEffect, useState } from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

export default function Home() {
    const [showData, setShowData] = useState([]);
    console.log(showData);
    const handleChange = async (e) => {
        const res = await fetch("/getdata", {
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
    }, [])
    return (
        <div className='home'>
            <Container>
                <div className="add_btn mb-2">
                    <Link to='/register' className='btn btn-primary'>Add Data</Link>
                </div>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr className='table-dark'>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Work</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th colSpan={1}>Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            showData && showData.map((items, index) => {
                                const { name, email, mobile, work } = items;
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{work}</td>
                                        <td>{mobile}</td>
                                        <td className='d-flex justify-content-between'>
                                            <Button variant="success"><VisibilityIcon size={20} /></Button>
                                            <Button variant="primary"><EditIcon size={20} /></Button>
                                            <Button variant="warning"><DeleteOutlineIcon size={20} /></Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>
            </Container>
        </div>
    )
}
