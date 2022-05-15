import React, { createContext, useState, useMemo } from 'react';

type EmployeeContextProviderProps = {
  children: React.ReactNode;
};

export type DataEmployeeProps = {
  id?: number;
  firstName?: string;
  lastName?: string;
  mail?: string;
  nis?: string;
};

export type EmployeeContextProps = {
  dataEmployees: DataEmployeeProps[];
  setDataEmployees: React.Dispatch<React.SetStateAction<DataEmployeeProps[]>>;
  currentEmployee: DataEmployeeProps;
  setCurrentEmployee: React.Dispatch<React.SetStateAction<DataEmployeeProps>>;
};

export const EmployeeContext = createContext<EmployeeContextProps | null>(null);

function EmployeeProvider({ children }: EmployeeContextProviderProps) {
  const [dataEmployees, setDataEmployees] = useState<DataEmployeeProps[]>([]);
  const [currentEmployee, setCurrentEmployee] = useState({});

  const employeeProviderValue = useMemo(
    () => ({
      dataEmployees,
      setDataEmployees,
      currentEmployee,
      setCurrentEmployee,
    }),
    [dataEmployees, setDataEmployees, currentEmployee, setCurrentEmployee],
  );

  return (
    <EmployeeContext.Provider value={employeeProviderValue}>
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeProvider;
