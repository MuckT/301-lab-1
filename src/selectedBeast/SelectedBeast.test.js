import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectedBeast from './SelectedBeast';

describe('<SelectedBeast />', () => {
  test('it should mount', () => {
    render(<SelectedBeast />);

    const selectedBeast = screen.getByTestId('SelectedBeast');

    expect(selectedBeast).toBeInTheDocument();
  });
});
