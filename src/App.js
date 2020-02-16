import React from 'react';
import Wrapper from './componenets/Wrapper';
import PageHeader from './componenets/PageHeader';
import Main from './componenets/Main';

function App() {
  return (
    <div>
      <Wrapper>
        <PageHeader/>
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;
