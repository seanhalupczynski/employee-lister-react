import React from 'react';
import SearchBar from '../SearchBar';
import TableHeader from '../TableHeader'

export default class TableArea extends React.Component {

    render(){
        return(
            <div>
                <SearchBar />
                <TableHeader />
            </div>
        )
    }
}