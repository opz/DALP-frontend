import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { WalletProvider } from "../providers/wallet";
import { DataProvider } from "../providers/data";

test('renders app w/ header', () => {
  const app = (
    <WalletProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </WalletProvider>
  );
  const { getByAltText } = render(app);
  const logo = getByAltText("APY.Finance");
  expect(logo).toBeInTheDocument();
});
