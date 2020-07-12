import React from 'react';
import { render } from '@testing-library/react';
import BalanceCard from '../components/elements/BalanceCard';
import { WalletProvider } from "../providers/wallet";
import { DataProvider } from "../providers/data";

test('renders static text', () => {
  const balanceCard = (
    <WalletProvider>
      <DataProvider>
        <BalanceCard />
      </DataProvider>
    </WalletProvider>
  );
  const { getByText } = render(balanceCard);
  const title = getByText(/Your Balance/i);
  expect(title).toBeInTheDocument();
  const balanceText = getByText(/APT Balance/i);
  expect(balanceText).toBeInTheDocument();
  const supplyText = getByText(/Total Supply/i);
  expect(supplyText).toBeInTheDocument();
});

test('renders dynamic values', () => {
  const balanceCard = (
    <WalletProvider>
      <DataProvider>
        <BalanceCard />
      </DataProvider>
    </WalletProvider>
  );
  const { getByTestId } = render(balanceCard);
  const balance = getByTestId("APT Balance");
  expect(balance).toBeInTheDocument();
  expect(balance).toHaveTextContent("0.00");
});
