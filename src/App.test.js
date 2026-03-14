// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RailwayDeploy title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RailwayDeploy/i);
    expect(titleElement).toBeInTheDocument();
});
