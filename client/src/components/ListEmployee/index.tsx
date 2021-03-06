import React, { useEffect } from 'react';
import api from '../../services/api';

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
    api
      .delete(`/api?&itemId=${encodeURIComponent(index)}`)
      .then((response) => setDataEmployees(response.data));
  }

  function handleEdit(index: number) {
    setIsEditing(true);
    setCurrentEmployee(dataEmployees[index]);
  }

  useEffect(() => {
    api.get('/api').then((response) => setDataEmployees(response.data));
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
          data-testid="btn-add-employee"
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
