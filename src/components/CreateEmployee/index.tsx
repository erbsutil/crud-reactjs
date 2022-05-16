import React, { useState } from 'react';

import { DataEmployeeProps } from '../../types';

import useContextData from '../../hooks/useContextData';

import * as S from './styles';

function CreateEmployee(): JSX.Element {
  const [newEmployee, setNewEmployee] = useState<DataEmployeeProps>();

  const { dataEmployees, setDataEmployees, setIsCreating } = useContextData();

  function handleSave() {
    const newId = dataEmployees.length + 1;
    const newObject = { ...newEmployee, id: newId };

    setDataEmployees([...dataEmployees, newObject]);
    setIsCreating(false);
  }

  return (
    <S.Content>
      <form onSubmit={handleSave}>
        <h3>Adicionar funcionário</h3>
        <S.Label>Nome:</S.Label>
        <S.Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewEmployee({ ...newEmployee, firstName: e.target.value });
          }}
          required
        />
        <S.Label>Sobrenome:</S.Label>
        <S.Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewEmployee({ ...newEmployee, lastName: e.target.value });
          }}
          required
        />
        <S.Label>E-mail:</S.Label>
        <S.Input
          type="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewEmployee({ ...newEmployee, mail: e.target.value });
          }}
          required
        />
        <S.Label>NIS:</S.Label>
        <S.Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewEmployee({ ...newEmployee, nis: e.target.value });
          }}
          required
        />

        <S.ButtonContent>
          <S.Button
            type="button"
            className="red"
            onClick={() => setIsCreating(false)}
          >
            Cancelar
          </S.Button>
          <S.Button type="submit" className="green">
            Salvar
          </S.Button>
        </S.ButtonContent>
      </form>
    </S.Content>
  );
}

export default CreateEmployee;
