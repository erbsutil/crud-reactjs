import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 40px;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #d2ced1;
  box-sizing: border-box;
  margin: 8px 0;
  padding: 12px 20px;
  width: 100%;
`;

export const Label = styled.label`
  display: inline-block;
  padding: 6px 12px 6px 0;
`;

export const Button = styled.button`
  background-color: #26ab71;
  border-radius: 5px;
  border: none;
  color: white;
  display: inline-block;
  margin-top: 10px;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  &.green {
    background-color: #26ab71;
  }
  &.red {
    background-color: #ff3637;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: end;
  column-gap: 6px;
`;
