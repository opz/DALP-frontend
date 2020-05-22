import React from 'react';
import { render } from '@testing-library/react';
import BalanceCard from '../components/elements/BalanceCard';

test('renders static text', () => {
  const { getByText } = render(<BalanceCard />);
  const title = getByText(/Your Balance/i);
  expect(title).toBeInTheDocument();
  const balanceText = getByText(/DALP Balance/i);
  expect(balanceText).toBeInTheDocument();
  const supplyText = getByText(/Total Supply/i);
  expect(supplyText).toBeInTheDocument();
});

test('renders dynamic values', () => {
    const { getByTestId } = render(<BalanceCard />);
    const balance = getByTestId("DALP Balance");
    expect(balance).toBeInTheDocument();
    expect(balance).toHaveTextContent("0.00");
  });
  