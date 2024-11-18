import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to Fund Finder/i); // Match the actual text
  expect(headingElement).toBeInTheDocument();
});
