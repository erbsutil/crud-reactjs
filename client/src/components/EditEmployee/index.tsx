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
        <S.Input
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
        <S.Input
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
        <S.Input
          type="email"
          value={currentEmployee.mail || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCurrentEmployee({ ...currentEmployee, mail: e.target.value });
          }}
          required
        />
        NIS:
        <S.Input
          value={currentEmployee.nis || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCurrentEmployee({ ...currentEmployee, nis: e.target.value });
          }}
          required
        />
        <S.ButtonContent>
          <S.Button
            type="button"
            className="red"
            onClick={() => setIsEditing(false)}
          >
            Cancelar
          </S.Button>
          <S.Button className="green" type="submit">
            Salvar
          </S.Button>
        </S.ButtonContent>
      </form>
    </S.Content>
  );
}

export default EditEmployee;
