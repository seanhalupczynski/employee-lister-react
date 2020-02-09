import React from 'react';
import PageHeader from './componenets/PageHeader';
import SearchBar from './componenets/SearchBar';
import TableArea from './componenets/TableArea';
import TableHeader from './componenets/TableHeader';
import TableData from './componenets/TableData';

function App() {
  return (
    <div>
      <PageHeader />
      <SearchBar />
      <TableArea />
      <TableHeader />
      <TableData />
    </div>

  );
}

export default App;
