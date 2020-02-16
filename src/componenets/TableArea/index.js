import React from 'react';
import SearchBar from '../SearchBar';
import TableData from '../TableData'

export default class TableArea extends React.Component {
    state = {
        search: "",
        order: "descending",
        filteredUsers: [{}]
    };

    tableHeaders = [
        {
            name: "Image",
            width: "10%"
        },
        {
            name: "Name",
            width: "10%"
        },
        {
            name: "Email",
            width: "20%"
        },
        {
            name: "Phone",
            width: "20%"
        },
        {
            name: "DOB",
            width: "20%"
        }
    ]

    handleChange = (event) => {
        console.log(event.target.value)
    };

    handleSort = (event) => {
        if(this.state.order === "descending"){
            this.setState(
                {
                    order: "ascending"
                }
            );
        }
        else if(this.state.order === "ascending"){
            this.setState(
                {
                    order: "descending"
                }
            );
        };
    };
    render(){
        return(
            <div>
                <SearchBar />
                <TableData />
            </div>
        )
    }
}