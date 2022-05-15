import React from 'react';
import EmployeeProvider from './context/EmployeeContext';
import ListEmployee from './components/ListEmployee';

function App(): JSX.Element {
  return (
    <EmployeeProvider>
      <ListEmployee />
    </EmployeeProvider>
  );
}

export default App;
