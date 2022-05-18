import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmployeeProvider from '../../context/EmployeeContext';
import ListEmployee from '.';

describe('<ListEmployee />', () => {
  beforeEach(() => {
    render(
      <EmployeeProvider>
        <ListEmployee />
      </EmployeeProvider>,
    );
  });

  it('should render correctly', () => {
    expect(screen.getByText('Adicionar funcionário')).toBeInTheDocument();

    expect(screen.getByTestId('input-firstname')).toBeInTheDocument();
    expect(screen.getByTestId('input-lastname')).toBeInTheDocument();
    expect(screen.getByTestId('input-mail')).toBeInTheDocument();
    expect(screen.getByTestId('input-nis')).toBeInTheDocument();

    expect(screen.getByTestId('btn-cancel')).toBeInTheDocument();
    expect(screen.getByTestId('btn-save')).toBeInTheDocument();
  });
});
