import React, { useContext, useState } from 'react';
import {
  EmployeeContext,
  EmployeeContextProps,
  DataEmployeeProps,
} from '../../context/EmployeeContext';
import * as S from './styles';

function CreateEmployee(): JSX.Element {
  const [newEmployee, setNewEmployee] = useState<DataEmployeeProps>();

  const { dataEmployees, setDataEmployees } = useContext(
    EmployeeContext,
  ) as EmployeeContextProps;

  function handleSave() {
    const newId = dataEmployees.length + 1;
    const newObject = { ...newEmployee, id: newId };

    setDataEmployees([...dataEmployees, newObject]);
  }

  return (
    <S.Content>
      <h3>Criando</h3>
      Nome:
      <S.CustomInput
        id="first-name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewEmployee({ ...newEmployee, firstName: e.target.value });
        }}
        required
      />
      Sobrenome:
      <S.CustomInput
        id="last-name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewEmployee({ ...newEmployee, lastName: e.target.value });
        }}
        required
      />
      E-mail:
      <S.CustomInput
        id="mail"
        type="email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewEmployee({ ...newEmployee, mail: e.target.value });
        }}
        required
      />
      NIS:
      <S.CustomInput
        id="nis"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewEmployee({ ...newEmployee, nis: e.target.value });
        }}
        required
      />
      <button
        type="button"
        onClick={() => {
          handleSave();
        }}
      >
        Salvar
      </button>
    </S.Content>
  );
}

export default CreateEmployee;
