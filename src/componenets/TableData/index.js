import React from 'react';
// import TableRow from '../TableRow';

export default function TableData(props) {
    console.log(props)
    return(
        <table>
            <thead>
                <tr>
                    {props.headings.map((heading) => {
                        return(
                            <th 
                                key={heading.name}
                            >
                                {heading.name}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>                
                {props.employees[0] !== undefined && props.employees[0].name !== undefined ? (
                    props.employees.map((employee) => {
                        console.log(employee)
                        return (
                            <tr>
                                {/* <td key={employee}>lary</td> */}
                                <td  key={employee.login.uuid}>
                                    <img 
                                        src={employee.picture.medium}
                                        alt={"user"}
                                        />
                                </td>
                                <td>{employee.name.first} {employee.name.last}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.dob.date}</td>
                            </tr>
                        )
                    })
                )
                :
                (
                    <tr></tr>
                )}
            </tbody>
        </table>        
    )
}
