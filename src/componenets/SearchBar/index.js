import React from 'react';

export default function SearchBar (props) {

    return(
        <div>
            <input
                onChange={props.handleInputChage}
            >
            </input>
        </div>
    );
};
