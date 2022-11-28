import Employees from './Employees';
import AddEmp from './AddEmp';
import { useContext, useEffect, useState } from 'react';
import {Modal, Button} from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext'
const EmployeeList = () => {

    // Yaha pe context ko import krke is component mein use kr liya
    // And jab bhi contexts ke objects mein kuch change hoga, useContext use re-render kr dega
    const { persons, setPersons } = useContext(EmployeeContext)

    const [view, setView] = useState(false);

    const handleView = () => setView(true);
    const handleClose = () => setView(false);

    useEffect(() => {
        handleClose()
        // alert("Added the value")
    }, [persons])

    // Yaha se sorting funtionality hai
    const [order, setOrder] = useState('ASC');
    const Sorting = (COL)=>{

        // Ye condition, jab useState mein Ascending set hoga, matlb user 
        // ko data ascending order mein chahiye hoga tab
        if(order === "ASC"){
            const sorted = [...persons].sort((a, b)=>
            a[COL].toLowerCase() > b[COL].toLowerCase() ? 1 : -1
            )
        setPersons(sorted);
        setOrder("DESC")
        console.log(order)
        document.getElementById('Name').innerHTML = 'Name &#8593;&darr;'
        document.getElementById('Course').innerHTML = 'Course &#8593;&darr;'
        document.getElementById('Email').innerHTML = 'Email &#8593;&darr;'
        }

        // Ye condition, jab useState mein Descending set hoga, matlb user 
        // ko data descending order mein chahiye hoga tab
        if(order === "DESC"){
            const sorted = [...persons].sort((a, b)=>
            a[COL].toLowerCase() < b[COL].toLowerCase() ? 1 : -1
            )
        setPersons(sorted);
        setOrder("ASC")
        console.log(order)
        document.getElementById('Name').innerHTML = 'Name &darr;&#8593;'
        document.getElementById('Course').innerHTML = 'Course &darr;&#8593;'
        document.getElementById('Email').innerHTML = 'Email &darr;&#8593;'
        }
    }

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
                        <th id='Name' onClick={() => Sorting('name')} style={{cursor: 'pointer'}}>Name &darr;&#8593;</th>
                        <th id='Course' onClick={() => Sorting('course')} style={{cursor: 'pointer'}}>Course &darr;&#8593;</th>
                        <th id='Email' onClick={() => Sorting('email')} style={{cursor: 'pointer'}}>Email &darr;&#8593;</th>
                        <th>Action</th>
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