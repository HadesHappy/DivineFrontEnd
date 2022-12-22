import { useState, useEffect } from 'react';
import { getTotalDeposit, getTotalEarned, getWithdrawableBalance, getReferalWithdraw, getTeamNum } from "../contract/roi.contract";
import { useAccountContext } from '../contexts/accountContext';

const useContractInfo = () => {
  const [totalDeposit, setTotalDeposit] = useState<number | null>(null);
  const [totalEarned, setTotalEarned] = useState<number | null>(null);
  const [withdrawable, setWithdrawable] = useState<number | null>(null);
  const [teamEarning, setTeamEarning] = useState<number | null>(null);
  const [teamNum, setTeamNum] = useState<number | null>(null);

  const { account } = useAccountContext()

  const getDepositAmount = async () => {
    const amount = await getTotalDeposit(account || '0x00');
    if (amount) {
      setTotalDeposit(amount);
    }
  }

  const getEarnedAmount = async () => {
    const amount = await getTotalEarned(account || '0x00');
    if (amount) {
      setTotalEarned(amount);
    }
  }

  const getPeopleNum = async () => {
    const amount = await getTeamNum(account || '0x00');
    if (amount) {
      setTeamNum(amount);
    }
  }

  const getWithdrawableAmount = async () => {
    const amount = await getWithdrawableBalance(account || '0x00');
    if (amount) {
      setWithdrawable(amount);
    }
  }

  const getReferalAmount = async () => {
    const amount = await getReferalWithdraw(account || '0x00');
    if(amount){
      setTeamEarning(amount);
    }
  }

  const refresh = async () => {
    getDepositAmount()
    getEarnedAmount()
    getWithdrawableAmount()
    getReferalAmount()
    getPeopleNum()
  }

  useEffect(() => {
    if (account) {
      getDepositAmount()
      getEarnedAmount()
      getWithdrawableAmount()
      getReferalAmount()
      getPeopleNum()
    }
  }, [account])
  
  return { totalDeposit, totalEarned, withdrawable, teamEarning, teamNum, refresh }
}

export default useContractInfo;