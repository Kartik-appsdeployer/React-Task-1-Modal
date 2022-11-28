import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { EmployeeContext } from '../context/EmployeeContext';
import { useContext, useState } from 'react';

const EditPerson = ({ Object }) => {

    // Process of editing the details:
    // onClick() on icon -> Model will render, with the old details from UpdatePerson components by passing
    // person argument

    const Id = Object.id;
    const { editForm } = useContext(EmployeeContext);
    const [name, setName] = useState(Object.name)
    const [course, setCourse] = useState(Object.course)
    const [email, setEmail] = useState(Object.email)

    const toUpdate = {Id, name, course, email};

    const handleEdit = (e) => {
        e.preventDefault();
        editForm(Id, toUpdate);
    }
    return (
        <>
            <Form onSubmit={handleEdit}>
                <Form.Group>
                    <Form.Control className="mb-3" type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name..." required>

                    </Form.Control>
                    <Form.Control className="mb-3" type="text" name='course' value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Enter Your Course..." required>

                    </Form.Control>
                    <Form.Control className="mb-3" type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email..." required>

                    </Form.Control>
                    <Button className="justify-content-center" variant='success' type='submit'>
                        Edit
                    </Button>
                </Form.Group>
            </Form>
        </>
    )
}
export default EditPerson