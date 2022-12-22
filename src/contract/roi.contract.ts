import { ethers } from 'ethers';
import ABI from './abi';
import { LOCAL_NETWORK, CONTRACT_ADDRESS } from '../utils/constants';

const provider = new ethers.providers.JsonRpcProvider(LOCAL_NETWORK);
const roiContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

const deposit = async (amount: number, referCode: number) => {
  try {
    const amountEther = ethers.utils.parseEther(amount.toString());
    console.log('amount: ', amountEther)
    console.log('referCode: ', referCode)
    const walletProvider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const signer = walletProvider.getSigner()

    const contractWithSigner = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
    const tx = await contractWithSigner.deposit(referCode, { value: amountEther });

    console.log('tx: ', tx);
    // const tx = await signer.sendTransaction(unsignedTx);
    //const tx = await tmp.deposit({ value: amountEther })
    // console.log('tx: ', tx)
    // console.log(`Transaction Response TX hash: ${tx.hash}`);
    const receipt = await tx.wait();
    const response = {
      status: 'success',
      message: 'Deposit Succeed.'
    }
    return response;
  }
  catch (error) {
    const response = {
      status: 'fail',
      message: 'Deposit Failed.'
    }
    return response;
  }
}

const getMaticPrice = async () => {
  try {
    const price = await roiContract.getLatestPrice();
    const priceEther = ethers.utils.formatEther(price.toString())
    console.log('matic price: ', priceEther);
    return Number(priceEther);
  }
  catch (error) {
    console.log(error)
  }
}

const getTotalDeposit = async (account: string) => {
  try {
    if (account) {
      const amount = await roiContract.getTotalDeposit(account);
      const amountEther = ethers.utils.formatEther(amount.toString());
      return Number(amountEther);
    }
  }
  catch (error) {
    console.log(error)
  }
}

const getTotalEarned = async (account: string) => {
  try {
    if (account) {
      const amount = await roiContract.getTotalEarnings(account);
      const amountEther = ethers.utils.formatEther(amount.toString());
      return Number(amountEther);
    }
  }
  catch (error) {
    console.log(error)
  }
}

const getWithdrawableBalance = async (account: string) => {
  try {
    if (account) {
      const amount = await roiContract.getWithdrawableBalance(account);
      const amountEther = ethers.utils.formatEther(amount.toString());
      return Number(amountEther);
    }
  }
  catch (error) {
    console.log(error)
  }
}

const withdraw = async (amount: number) => {
  try {
    // const result = await roiContract.withdraw(amount);
    const amountEther = ethers.utils.parseEther(amount.toString());
    const walletProvider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const signer = walletProvider.getSigner()

    const contractWithSigner = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
    const tx = await contractWithSigner.withdraw(amountEther);

    console.log('tx: ', tx);
    // const tx = await signer.sendTransaction(unsignedTx);
    //const tx = await tmp.deposit({ value: amountEther })
    // console.log('tx: ', tx)
    // console.log(`Transaction Response TX hash: ${tx.hash}`);
    const receipt = await tx.wait();
    const response = {
      status: 'success',
      message: 'Deposit Succeed.'
    }
    return response;
  }
  catch (error) {
    console.log(error)
  }
}

const getReferalWithdraw = async (account: string) => {
  try {
    const amount = await roiContract.getReferalWithdraw(account);
    const amountEther = ethers.utils.formatEther(amount.toString());
    return Number(amountEther);
  }
  catch (error) {
    console.log(error)
  }
}

const withdrawTeamEarninigs = async () => {
  try {
    // const result = await roiContract.withdraw(amount);
    const walletProvider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const signer = walletProvider.getSigner()

    const contractWithSigner = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
    const tx = await contractWithSigner.withdrawReferalEarnings();

    console.log('tx: ', tx);
    // const tx = await signer.sendTransaction(unsignedTx);
    //const tx = await tmp.deposit({ value: amountEther })
    // console.log('tx: ', tx)
    // console.log(`Transaction Response TX hash: ${tx.hash}`);
    const receipt = await tx.wait();
    const response = {
      status: 'success',
      message: 'Deposit Succeed.'
    }
    return response;
  }
  catch (error) {
    console.log(error)
  }
}

const getTeamNum = async (account: string) => {
  try {
    const num = await roiContract.getTeamNum(account);

    return Number(num);
  }
  catch (error) {
    console.log(error)
  }
}

const getCodeFromAddr = async (account: string) => {
  try {
    const code = await roiContract.getCodeFromAddr(account);
    return Number(code);
  }
  catch (error) {
    console.log(error)
  }
}

export {
  deposit,
  getTotalDeposit,
  getMaticPrice,
  getTotalEarned,
  getWithdrawableBalance,
  withdraw,
  getTeamNum,
  getReferalWithdraw,
  withdrawTeamEarninigs,
  getCodeFromAddr,
}
