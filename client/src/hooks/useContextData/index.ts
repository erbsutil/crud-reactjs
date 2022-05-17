import { useContext } from 'react';

import {
  EmployeeContext,
  EmployeeContextProps,
} from '../../context/EmployeeContext';

function useContextData(): EmployeeContextProps {
  const context = useContext(EmployeeContext) as EmployeeContextProps;
  return context;
}

export default useContextData;
