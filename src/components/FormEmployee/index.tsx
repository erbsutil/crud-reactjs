import React from 'react';
// import {
//   EmployeeContext,
//   EmployeeContextProps,
// } from '../../context/EmployeeContext';
import * as S from './styles';

interface closeFormProps {
  onClose: () => void;
}

function FormEmployee({ onClose = () => null }: closeFormProps): JSX.Element {
  // const { dataEmployees } = useContext(EmployeeContext) as EmployeeContextProps;

  return (
    <S.Content>
      <h3>Novo</h3>
      Nome: <S.CustomInput id="first-name" required />
      Sobrenome: <S.CustomInput id="last-name" required />
      E-mail: <S.CustomInput id="mail" type="email" required />
      NIS: <S.CustomInput id="nis" required />
      <button
        type="button"
        onClick={() => {
          onClose();
        }}
      >
        Salvar
      </button>
    </S.Content>
  );
}

export default FormEmployee;
