import React from 'react';

export default class SearchBar extends React.Component {

    state = {
        search: "",
        employees: []
    };

    handleInputChage = (event) => {

    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render(){
        return(
            <div>
                <form>
                    <input
                    handleInputChage={this.handleInputChage}
                    handleSubmit={this.handleSubmit}>
                    </input>
                    <button>
                        Click Me
                    </button>
                </form>
            </div>
        )
    }
}