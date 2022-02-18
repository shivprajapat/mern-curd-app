import React from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
export default function Home() {
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
                            <th>Email</th>
                            <th>Job</th>
                            <th colSpan={2}>Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={2}>1</td>
                            <td>Shiv</td>
                            <td>shiv@gmail.com</td>
                            <td>software developer</td>
                            <td>1234567890</td>
                            <td className='d-flex justify-content-between'>
                                <Button variant="success"><VisibilityIcon size={20} /></Button>
                                <Button variant="primary"><EditIcon size={20} /></Button>
                                <Button variant="warning"><DeleteOutlineIcon size={20} /></Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}
