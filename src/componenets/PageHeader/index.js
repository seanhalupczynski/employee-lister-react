import React from 'react';

export default class PageHeader extends React.Component {

    render(){
        return(
            <div>
                <h1>Employee Directory</h1>
                <p>Click table header to sort by column or us search box to filter the table.</p>
            </div>
        )
    }
}