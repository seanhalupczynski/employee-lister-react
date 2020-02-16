import React from 'react';

export default class SearchBar extends React.Component {

    state = {
        search: "",
        employees: []
    };

    handleInputChage = (event) => {
        console.log(event.target.value)
    };


    render(){
        return(
            <div>
                <input
                    onChange={this.handleInputChage}
                >
                </input>
            </div>
        );
    };
};