import React, { useEffect } from 'react';

import EditEmployee from '../EditEmployee';
import CreateEmployee from '../CreateEmployee';

import useContextData from '../../hooks/useContextData';

import * as S from './styles';

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

  async function callApi() {
    const response = await fetch('/api');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  useEffect(() => {
    callApi().then((res) => setDataEmployees(res));
  }, [setDataEmployees]);

  return (
    <S.Content>
      <h2>Lista de funcionários</h2>

      <S.ButtonContent>
        <S.Button
          type="button"
          onClick={() => {
            setIsCreating(true);
            setIsEditing(false);
          }}
          className="blue"
        >
          Adicionar funcionário
        </S.Button>
      </S.ButtonContent>

      {dataEmployees.length > 0 ? (
        <S.Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>E-mail</th>
              <th>NIS</th>
            </tr>
          </thead>
          <tbody>
            {dataEmployees.map((e, index) => {
              return (
                <tr key={e.nis}>
                  <td>{e.firstName}</td>
                  <td>{e.lastName}</td>
                  <td>{e.mail}</td>
                  <td>{e.nis}</td>
                  <td>
                    <S.Actions>
                      <S.Button
                        type="button"
                        onClick={() => {
                          handleEdit(index);
                          setIsCreating(false);
                        }}
                        className="green"
                      >
                        Editar
                      </S.Button>
                      <S.Button
                        type="button"
                        onClick={() => {
                          handleRemove(index);
                        }}
                        className="red"
                        disabled={isEditing}
                      >
                        Excluir
                      </S.Button>
                    </S.Actions>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </S.Table>
      ) : (
        !isCreating && (
          <S.EmptyState>Nenhum funcionário encontrado :(</S.EmptyState>
        )
      )}

      {isEditing && <EditEmployee />}

      {isCreating && <CreateEmployee />}
    </S.Content>
  );
}

export default ListEmployee;
