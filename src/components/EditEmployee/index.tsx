import React from 'react';

import { DataEmployeeProps } from '../../types';

import useContextData from '../../hooks/useContextData';

import * as S from './styles';

function EditEmployee(): JSX.Element {
  const {
    currentEmployee,
    dataEmployees,
    setCurrentEmployee,
    setDataEmployees,
    setIsEditing,
  } = useContextData();

  function handleSave(employeeSelected: DataEmployeeProps) {
    const newObject = dataEmployees.map((e) => {
      return e.id === employeeSelected.id ? employeeSelected : e;
    });
    setDataEmployees(newObject);

    setIsEditing(false);
  }

  return (
    <S.Content>
      <form onSubmit={() => handleSave(currentEmployee)}>
        <h3>Editar - {currentEmployee.firstName}</h3>
        Nome:
        <S.CustomInput
          value={currentEmployee.firstName || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCurrentEmployee({
              ...currentEmployee,
              firstName: e.target.value,
            });
          }}
          required
        />
        Sobrenome:
        <S.CustomInput
          value={currentEmployee.lastName || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCurrentEmployee({
              ...currentEmployee,
              lastName: e.target.value,
            });
          }}
          required
        />
        E-mail:
        <S.CustomInput
          type="email"
          value={currentEmployee.mail || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCurrentEmployee({ ...currentEmployee, mail: e.target.value });
          }}
          required
        />
        NIS:
        <S.CustomInput
          value={currentEmployee.nis || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCurrentEmployee({ ...currentEmployee, nis: e.target.value });
          }}
          required
        />
        <button type="submit">Salvar</button>
      </form>
    </S.Content>
  );
}

export default EditEmployee;
