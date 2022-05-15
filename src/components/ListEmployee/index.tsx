import React, { useContext, useState } from 'react';
import {
  EmployeeContext,
  EmployeeContextProps,
} from '../../context/EmployeeContext';
import FormEmployee from '../FormEmployee';

function ListEmployee(): JSX.Element {
  const [showFormEmployee, setShowFormEmployee] = useState(false);

  const { dataEmployees, setDataEmployees } = useContext(
    EmployeeContext,
  ) as EmployeeContextProps;

  function removeEmployee(index: number) {
    const newData = [...dataEmployees];
    newData.splice(index, 1);
    setDataEmployees(newData);
  }

  return (
    <>
      <h2>Listagem</h2>

      <button
        type="button"
        onClick={() => {
          setShowFormEmployee(true);
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
                <td>
                  {e.firstName} - {index}
                </td>
                <td>{e.lastName}</td>
                <td>{e.mail}</td>
                <td>{e.nis}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      setShowFormEmployee(true);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      removeEmployee(index);
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

      {showFormEmployee && (
        <FormEmployee
          onClose={() => {
            setShowFormEmployee(false);
          }}
        />
      )}
    </>
  );
}

export default ListEmployee;
