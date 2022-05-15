import React from 'react';

import EditEmployee from '../EditEmployee';
import CreateEmployee from '../CreateEmployee';

import useContextData from '../../hooks/useContextData';

function ListEmployee(): JSX.Element {
  const {
    dataEmployees,
    isCreating,
    isEditing,
    setCurrentEmployee,
    setDataEmployees,
    setIsCreating,
    setIsEditing,
  } = useContextData();

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
      <h2>Lista de funcionários</h2>

      <button
        type="button"
        onClick={() => {
          setIsCreating(true);
        }}
      >
        Adicionar funcionário
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
