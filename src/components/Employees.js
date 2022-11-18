const Employees = ({person}) => {
    return (
        <>
            <td>{person.name}</td>
            <td>{person.course}</td>
            <td>{person.email}</td>
        </>
    )
}
export default Employees;