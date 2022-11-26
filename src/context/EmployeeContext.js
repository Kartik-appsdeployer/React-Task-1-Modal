import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export const EmployeeContext = createContext();

// Use of createContext = Ye bhi same props ke jaisa hi hota hai but agr hume particular prop ko multiple components mein use krna
// hai to use multiple components mein pass krna pdega....And context mein hum ise ek hi jagah define kr skte hai fir use multiple
// components mein use kr skte hai.

const EmployeeContextProvider = (props) => {
    const [persons, setPersons] = useState([
        { id: uuidv4(), name: "Kartik Kulshreshtha", course: "Btech", email: "kartikkulshreshtha2507@gmail.com" },
        { id: uuidv4(), name: "Ashwini Kulshreshtha", course: "MBA", email: "ashwinikulshreshtha2507@gmail.com" },
        { id: uuidv4(), name: "Anjana Kulshreshtha", course: "BA", email: "anjanakulshreshtha2507@gmail.com" },
        { id: uuidv4(), name: "Ajay Kulshreshtha", course: "BA", email: "ajaykulshreshtha2507@gmail.com" },
        { id: uuidv4(), name: "Ashish Kulshreshtha", course: "BE", email: "ashishkulshreshtha2507@gmail.com" }
    ])

    //Ye addNew() persons mein new details add kr dega...
    const addNew = (name, course, email) => {
        setPersons([...persons, {id: uuidv4(), name, course, email}]);
    }

    return (

        //Yaha se humne persons ko as a value uski children ko provide kr diya hai
        <EmployeeContext.Provider value={{ persons, addNew, setPersons }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}
export default EmployeeContextProvider;