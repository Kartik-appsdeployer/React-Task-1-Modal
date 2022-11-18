import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { EmployeeContext } from '../context/EmployeeContext';
import { useContext, useState } from 'react';

const AddEmp = () => {

    //Is context mein ek addNew krke function hai uske through hi hum koi bhi details add
    //kr skte hai
    const {addNew} = useContext(EmployeeContext);


    //Is useState ke through initially values blank rahengi and jab hum setAddpersons
    //call krenge tab wo values set kr dega aur destructuring ke through addNew() mein add
    //Kar dega
    const [addpersons, setAddpersons] = useState({
        name: "", course: "", email: ""
    })
    const Function = (e) => {
        setAddpersons({...addpersons, [e.target.name]:e.target.value})
    }
    const {name, course, email} = addpersons;


    //Jab bhi form submit krenge tab ye function chalega aur details table mein add hongi
    const handleSubmit = (e) => {
        e.preventDefault();
        addNew(name, course, email);
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control className="mb-3" type="text" name='name' value={name} onChange={ (e) => Function(e)} placeholder="Enter Your Name..." required>
                        
                    </Form.Control>
                    <Form.Control className="mb-3" type="text" name='course' value={course} onChange={ (e) => Function(e)} placeholder="Enter Your Course..." required>
                        
                    </Form.Control>
                    <Form.Control className="mb-3" type="email" name='email' value={email} onChange={ (e) => Function(e)} placeholder="Enter Your Email..." required>
                        
                    </Form.Control>
                    <Button className="justify-content-center" variant='success' type='submit'>
                        Add
                    </Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default AddEmp