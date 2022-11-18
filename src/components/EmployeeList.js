import Employees from './Employees';
import AddEmp from './AddEmp';
import { useContext, useState } from 'react';
import {Modal, Button} from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext'
const EmployeeList = () => {

    // Yaha pe context ko import krke is component mein use kr liya
    // And jab bhi contexts ke objects mein kuch change hoga, useContext use re-render kr dega
    const { persons } = useContext(EmployeeContext)

    const [view, setView] = useState(false);

    const handleView = () => setView(true);
    const handleClose = () => setView(false);

    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Modal Table</h2>
                    </div>
                    <div className="col-sm-6">
                        <a onClick={handleView} className="btn btn-success" data-toggle="modal"><span>Add</span></a>
                    </div>
                </div>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        persons.map(person => (
                            <tr key={person.id}>
                                <Employees person={person} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Modal show={view} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h1>Add Details</h1>
                </Modal.Header>
                <Modal.Body>
                    <AddEmp />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} variant="dark" >
                        Close this
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default EmployeeList