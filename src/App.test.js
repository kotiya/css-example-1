import { render, screen } from '@testing-library/react';
import App from './App';
import { describe, expect, it } from '@jest/globals';

describe('App component test', () => {
  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
   });
});