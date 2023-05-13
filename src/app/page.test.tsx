import { render, screen } from '@testing-library/react';
import HomePage from './page';

describe('Home Page', () => {
  it ('Renders link to docs', () => {
    render(<HomePage />);
    const someText = screen.getByText('Get started by editing', { exact: false })
    expect(someText).toBeInTheDocument();
  });
});
