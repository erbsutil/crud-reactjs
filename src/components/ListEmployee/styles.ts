import styled from 'styled-components';

export const Content = styled.div`
  margin: 0 auto;
  width: 60%;

  h2 {
    margin: 0;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  margin-top: 20px;
  max-width: 100%;
  width: 100%;

  th,
  td {
    text-align: left;
    padding: 12px;
  }

  td {
    border-bottom: 1px solid #dedede;
  }

  tbody tr:nth-child(2n + 1) {
    background-color: #f8f8f8;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: end;
`;

export const Actions = styled.div`
  column-gap: 6px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  border-radius: 5px;
  border: none;
  color: white;
  display: inline-block;
  font-size: 16px;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;

  &.blue {
    background-color: #0a639a;
  }

  &.green {
    background-color: #26ab71;
  }

  &.red {
    background-color: #ff3637;
  }

  &:hover {
    cursor: pointer;
  }

  &[disabled],
  &:disabled {
    background-color: #d2ced1;
    cursor: not-allowed;
  }
`;
