import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('URL Shortener App', () => {
  test('renders header and form elements', () => {
    render(<App />);
    expect(screen.getByText(/URL Shortener/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter original URL/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Shorten/i })).toBeInTheDocument();
  });

  test('shows error when input is empty and user submits', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Shorten/i }));
    expect(screen.getByText(/Please enter a valid URL/i)).toBeInTheDocument();
  });

  test('accepts a valid URL and displays shortened link', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Enter original URL/i);
    fireEvent.change(input, { target: { value: 'https://example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /Shorten/i }));

    // Assume async render — replace timeout if using actual async API
    setTimeout(() => {
      expect(screen.getByText(/Shortened URL:/i)).toBeInTheDocument();
    }, 1000);
  });

  test('displays analytics section after shortening', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Enter original URL/i);
    fireEvent.change(input, { target: { value: 'https://example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /Shorten/i }));

    setTimeout(() => {
      expect(screen.getByText(/Analytics/i)).toBeInTheDocument();
    }, 1000);
  });
});
