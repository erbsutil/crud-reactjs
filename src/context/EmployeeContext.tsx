import React, { createContext, useState, useMemo } from 'react';

type EmployeeContextProviderProps = {
  children: React.ReactNode;
};

type DataEmployeeProps = {
  firstName: string;
  lastName: string;
  mail: string;
  nis: string;
};

export type EmployeeContextProps = {
  dataEmployees: DataEmployeeProps[];
  setDataEmployees: React.Dispatch<React.SetStateAction<DataEmployeeProps[]>>;
};

export const EmployeeContext = createContext<any>(null);

function EmployeeProvider({ children }: EmployeeContextProviderProps) {
  const [dataEmployees, setDataEmployees] = useState<DataEmployeeProps[]>([]);

  const employeeProviderValue = useMemo(
    () => ({ dataEmployees, setDataEmployees }),
    [dataEmployees, setDataEmployees],
  );

  return (
    <EmployeeContext.Provider value={employeeProviderValue}>
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeProvider;
