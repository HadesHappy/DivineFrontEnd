import { useState, useEffect } from 'react'
import { useAccountContext } from '../contexts/accountContext';
import { ethers } from 'ethers';
import { LOCAL_NETWORK } from '../utils/constants';

const useBalance = () => {
  const { account } = useAccountContext();
  const [walletBalance, setWalletBalance] = useState<number | null>(null);

  const getBalance = async (): Promise<void> => {
    const provider = new ethers.providers.JsonRpcProvider(LOCAL_NETWORK);
    if (account) {
      provider.getBalance(account)
        .then((balance: any) => {
          const balanceInEth = ethers.utils.formatEther(balance);
          console.log(balanceInEth)
          setWalletBalance(Math.floor(Number(balanceInEth) * 100000) / 100000);
        })
        .catch((error) => {
          console.log(error);
        })
    }
    else {
      setWalletBalance(null)
    }
  }

  useEffect(() => {
    getBalance()
  }, [account])

  return { walletBalance, getBalance };
}

export default useBalance;