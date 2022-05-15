import React, { useContext, useState } from 'react';
import {
  EmployeeContext,
  EmployeeContextProps,
} from '../../context/EmployeeContext';

import EditEmployee from '../EditEmployee';
import CreateEmployee from '../CreateEmployee';

function ListEmployee(): JSX.Element {
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const { dataEmployees, setDataEmployees, setCurrentEmployee } = useContext(
    EmployeeContext,
  ) as EmployeeContextProps;

  function handleRemove(index: number) {
    const newData = [...dataEmployees];
    newData.splice(index, 1);
    setDataEmployees(newData);
  }

  function handleEdit(index: number) {
    setIsEditing(true);
    setCurrentEmployee(dataEmployees[index]);
  }

  return (
    <>
      <h2>Listagem</h2>

      <button
        type="button"
        onClick={() => {
          setIsCreating(true);
        }}
      >
        Novo
      </button>

      <table>
        <tbody>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>E-mail</th>
            <th>NIS</th>
          </tr>
          {dataEmployees.map((e, index) => {
            return (
              <tr key={e.nis}>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.mail}</td>
                <td>{e.nis}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      handleEdit(index);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      handleRemove(index);
                    }}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {isEditing && <EditEmployee />}

      {isCreating && <CreateEmployee />}
    </>
  );
}

export default ListEmployee;
