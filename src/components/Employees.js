import { EmployeeContext } from "../context/EmployeeContext";
import EditPerson from './EditPerson';
import { useContext, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';


// Process of editing the details:
// onClick() in icon -> Model wil render, with the old details from UpdatePerson components by passing
// person argument

const Employees = ({ person }) => {
    const { deleteUser } = useContext(EmployeeContext);

    const [view, setView] = useState(false);

    const handleView = () => setView(true);
    const handleClose = () => setView(false);
    return (
        <>
            <td>{person.name}</td>
            <td>{person.course}</td>
            <td>{person.email}</td>
            <td>
                <i onClick={handleView} className="fa fa-pencil-square-o" aria-hidden="true"></i>
                <i onClick={() => deleteUser(person.id)} className="fa fa-trash" aria-hidden="true"></i>
            </td>

            <Modal show={view} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h1>Edit Person</h1>
                </Modal.Header>
                <Modal.Body>
                    <EditPerson Object={person} />
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
export default Employees;