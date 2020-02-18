import React from 'react';
import SearchBar from '../SearchBar';
import TableData from '../TableData'
import API from '../../utils/API'

export default class TableArea extends React.Component {
    state = {
        search: "",
        order: "descending",
        employees: [{}],
        filteredEmployees: [{}]
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

    handleSort = (heading) => {
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

        const compareFnc = (a, b) => {
            if (this.state.order === "ascending") {
              // account for missing values
              if (a[heading] === undefined) {
                return 1;
              } else if (b[heading] === undefined) {
                return -1;
              }
              // numerically
              else if (heading === "name") {
                return a[heading].first.localeCompare(b[heading].first);
              } else {
                return a[heading] - b[heading];
              }
            } else {
              // account for missing values
              if (a[heading] === undefined) {
                return 1;
              } else if (b[heading] === undefined) {
                return -1;
              }
              // numerically
              else if (heading === "name") {
                return b[heading].first.localeCompare(a[heading].first);
              } else {
                return b[heading] - a[heading];
              };
            }
      
          };
        const sortedEmployees = this.state.filteredEmployees.sort(compareFnc);
        this.setState({ filteredEmployees: sortedEmployees });
    };

    componentDidMount() {
        API.getEmployees().then((response) => {
            this.setState(
                {
                    employees: response.data.results,
                    filteredEmployees: response.data.results
                }
            );
        });
    };
    
    render() {
        return(
            <div>
                <SearchBar 
                    handleChange={this.handleChange}
                />
                <div>
                    <TableData 
                        headings={this.tableHeaders}
                        employees={this.state.filteredEmployees}
                        handleSort={this.handleSort}
                    />
                </div>
            </div>
        )
    }
}