import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders app w/ header', () => {
  const { getByAltText } = render(<App />);
  const logo = getByAltText("DALP Logo");
  expect(logo).toBeInTheDocument();
});
