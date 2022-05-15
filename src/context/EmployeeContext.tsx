import React, { createContext, useState, useMemo } from 'react';

import { DataEmployeeProps } from '../types';

type EmployeeContextProviderProps = {
  children: React.ReactNode;
};

export type EmployeeContextProps = {
  dataEmployees: DataEmployeeProps[];
  setDataEmployees: React.Dispatch<React.SetStateAction<DataEmployeeProps[]>>;
  currentEmployee: DataEmployeeProps;
  setCurrentEmployee: React.Dispatch<React.SetStateAction<DataEmployeeProps>>;
  isCreating: boolean;
  setIsCreating: React.Dispatch<React.SetStateAction<boolean>>;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EmployeeContext = createContext<EmployeeContextProps | null>(null);

function EmployeeProvider({ children }: EmployeeContextProviderProps) {
  const [dataEmployees, setDataEmployees] = useState<DataEmployeeProps[]>([]);
  const [currentEmployee, setCurrentEmployee] = useState({});
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const employeeProviderValue = useMemo(
    () => ({
      dataEmployees,
      setDataEmployees,
      currentEmployee,
      setCurrentEmployee,
      isCreating,
      setIsCreating,
      isEditing,
      setIsEditing,
    }),
    [
      dataEmployees,
      setDataEmployees,
      currentEmployee,
      setCurrentEmployee,
      isCreating,
      setIsCreating,
      isEditing,
      setIsEditing,
    ],
  );

  return (
    <EmployeeContext.Provider value={employeeProviderValue}>
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeProvider;
