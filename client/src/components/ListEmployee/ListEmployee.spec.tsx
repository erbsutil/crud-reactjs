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
    expect(screen.getByText('Lista de funcionários')).toBeInTheDocument();
    expect(screen.getByTestId('btn-add-employee')).toBeInTheDocument();
  });
});
