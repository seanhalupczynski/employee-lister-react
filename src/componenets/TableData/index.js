import React from 'react';
import TableRow from '../TableRow';

export default class TableData extends React.Component {

    render(){
        return(
            <table>
                <thead>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>DOB</th>
                </thead>
                <tbody>
                    <TableRow />
                </tbody>
            </table>        
        )
    }
}