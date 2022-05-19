import React from 'react';
import api from '../../services/api';

import { DataEmployeeProps } from '../../types';

import useContextData from '../../hooks/useContextData';

import * as S from './styles';

function EditEmployee(): JSX.Element {
  const {
    currentEmployee,
    setCurrentEmployee,
    setDataEmployees,
    setIsEditing,
  } = useContextData();

  function handleSave(employeeSelected: DataEmployeeProps) {
    api
      .put('/api', employeeSelected)
      .then((response) => setDataEmployees(response.data));

    setIsEditing(false);
  }

  return (
    <S.Content>
      <form onSubmit={() => handleSave(currentEmployee)}>
        <h3>Editar - {currentEmployee.firstName}</h3>

        <S.Label>Nome:</S.Label>
        <S.Input
          value={currentEmployee.firstName || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCurrentEmployee({
              ...currentEmployee,
              firstName: e.target.value,
            });
          }}
          required
          data-testid="input-firstname"
        />

        <S.Label>Sobrenome:</S.Label>
        <S.Input
          value={currentEmployee.lastName || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCurrentEmployee({
              ...currentEmployee,
              lastName: e.target.value,
            });
          }}
          required
          data-testid="input-lastname"
        />

        <S.Label>E-mail:</S.Label>
        <S.Input
          type="email"
          value={currentEmployee.mail || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCurrentEmployee({ ...currentEmployee, mail: e.target.value });
          }}
          required
          data-testid="input-mail"
        />

        <S.Label>NIS:</S.Label>
        <S.Input
          value={currentEmployee.nis || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCurrentEmployee({ ...currentEmployee, nis: e.target.value });
          }}
          required
          data-testid="input-nis"
        />

        <S.ButtonContent>
          <S.Button
            type="button"
            className="red"
            onClick={() => setIsEditing(false)}
            data-testid="btn-cancel"
          >
            Cancelar
          </S.Button>

          <S.Button className="green" type="submit" data-testid="btn-save">
            Salvar
          </S.Button>
        </S.ButtonContent>
      </form>
    </S.Content>
  );
}

export default EditEmployee;
