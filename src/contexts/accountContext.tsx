import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface IAccountContext {
  balance: number | null;
  account: string | null;
  setAddress: Function;
};

const defaultState = {
  balance: 0,
  account: '',
  setAddress() { }
};

export const AccountContext = createContext<IAccountContext>(defaultState);
export const useAccountContext = () => useContext(AccountContext);

const AccountProvider = ({ children }: { children: any }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);

  const { getItem, setItem } = useLocalStorage();

  const setAddress = (address: string) => {
    setItem('address', address);
    setAccount(address);
  }

  useEffect(() => {
    const value: string | null = getItem('address');
    if (value) {
      setAddress(value)
    }
  }, [])

  return (
    <AccountContext.Provider
      value={{
        balance,
        account,
        setAddress,
      }}
    >
      {children}
    </AccountContext.Provider>
  )
}

export default AccountProvider;
