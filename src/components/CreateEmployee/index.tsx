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
        Nome:
        <S.CustomInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewEmployee({ ...newEmployee, firstName: e.target.value });
          }}
          required
        />
        Sobrenome:
        <S.CustomInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewEmployee({ ...newEmployee, lastName: e.target.value });
          }}
          required
        />
        E-mail:
        <S.CustomInput
          type="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewEmployee({ ...newEmployee, mail: e.target.value });
          }}
          required
        />
        NIS:
        <S.CustomInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewEmployee({ ...newEmployee, nis: e.target.value });
          }}
          required
        />
        <button type="submit">Salvar</button>
      </form>
    </S.Content>
  );
}

export default CreateEmployee;
