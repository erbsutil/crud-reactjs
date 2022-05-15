import React, { useContext } from 'react';
import {
  DataEmployeeProps,
  EmployeeContext,
  EmployeeContextProps,
} from '../../context/EmployeeContext';
import * as S from './styles';

function EditEmployee(): JSX.Element {
  const {
    dataEmployees,
    setDataEmployees,
    currentEmployee,
    setCurrentEmployee,
  } = useContext(EmployeeContext) as EmployeeContextProps;

  function handleSave(employee: DataEmployeeProps) {
    const newObject = dataEmployees.map((e) => {
      return e.id === employee.id ? employee : e;
    });
    setDataEmployees(newObject);
  }

  return (
    <S.Content>
      <h3>Editando</h3>
      Nome:
      <S.CustomInput
        id="first-name"
        value={currentEmployee.firstName || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCurrentEmployee({ ...currentEmployee, firstName: e.target.value });
        }}
        required
      />
      Sobrenome:
      <S.CustomInput
        id="last-name"
        value={currentEmployee.lastName || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCurrentEmployee({ ...currentEmployee, lastName: e.target.value });
        }}
        required
      />
      E-mail:
      <S.CustomInput
        id="mail"
        type="email"
        value={currentEmployee.mail || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCurrentEmployee({ ...currentEmployee, mail: e.target.value });
        }}
        required
      />
      NIS:
      <S.CustomInput
        id="nis"
        value={currentEmployee.nis || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCurrentEmployee({ ...currentEmployee, nis: e.target.value });
        }}
        required
      />
      <button
        type="button"
        onClick={() => {
          handleSave(currentEmployee);
        }}
      >
        Salvar
      </button>
    </S.Content>
  );
}

export default EditEmployee;
