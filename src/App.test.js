import { render, screen } from '@testing-library/react';
import MainApp from './App';

it('renders learn react link', async () => {
  render(<MainApp />);
  const linkElement = await screen.findByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
