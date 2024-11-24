import { render, screen } from '@testing-library/react';
import App from '../App';




describe("Tests in <App />", () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Hi, I am/i);
    expect(linkElement).toBeInTheDocument();
  });
});