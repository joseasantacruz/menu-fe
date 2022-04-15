import { render, screen } from '@testing-library/react';
import MenuItem from './components/MenuItem';

test('renders MenuItem test', () => {
  render(<MenuItem name='Test' description='Test description' price='3.5' />);
  const linkElement = screen.getByText('Test');
  expect(linkElement).toBeInTheDocument();
  const linkElement2 = screen.getByText('Test description');
  expect(linkElement2).toBeInTheDocument();
});