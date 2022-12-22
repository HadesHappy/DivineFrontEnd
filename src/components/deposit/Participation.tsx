import { useState } from 'react';
import useBalance from "../../hooks/useBalance";
import useMaticPrice from '../../hooks/useMaticPrice';
import { deposit } from '../../contract/roi.contract';

import { displayBalance } from "../../utils/display";
import { MINIMUM_DEPOSIT } from "../../utils/constants";
import toast from 'react-hot-toast'
import { BeatLoader } from 'react-spinners';

const Participation = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0);
  const { walletBalance, getBalance } = useBalance();
  const { price } = useMaticPrice();

  const onChange = (e: any) => {
    setAmount(e.target.value);
  }

  const depositClick = async () => {
    if (price && amount <= Math.floor(MINIMUM_DEPOSIT / price))
      toast.error(`Invalid Amount. Minimum deposit amount is: ${Math.floor(MINIMUM_DEPOSIT / price)}`);
    else {
      if (walletBalance !== null && amount > walletBalance) {
        toast.error(`Exceed the wallet balance. Your maximum availability is ${walletBalance} matic`);
      }
      else {
        try {
          setLoading(true);
          const response = await deposit(Number(amount) + 5, 10);
          if (response.status === 'success') {
            toast.success(response.message);
            await getBalance();
          }
          else
            toast.error(response.message);
          setLoading(false);
        }
        catch (error) {
          toast.error(`something went wrong: ${error}`)
        }
      }
    }
  }

  return (
    <div className="px-7 py-5">
      <div className="px-5 py-3 bg-[#2d2159] rounded-2xl">
        <div className="flex flex-row justify-between items-center">
          <div className="text-white py-1">Your Wallet Balance: </div>
          <div className="relative bg-[#3d3d69] rounded-md w-2/5 flex flex-row items-center justify-center gap-3">
            <img className='absolute float-right right-3 h-4 w-4' src="/assets/images/matic.svg" alt='matic' />
            <div className="text-white py-1 text-center">{displayBalance(walletBalance || 0)}</div>
          </div>
        </div>
        <div className="text-white py-3">Enter the amount to deposit</div>
        <div className="relative">
          <img className="absolute float-right right-3 mt-3 h-4 w-4" src='/assets/images/matic.svg' alt='matic' />
          <input type='number' className="rounded-md py-2 bg-[#3d3d69] w-full outline-none text-white text-center" value={amount} onChange={onChange} />
        </div>
        {
          loading ?
            <div className="bg-purple-500 flex flex-row items-center justify-center rounded-lg w-full py-2 mt-5 mb-3 cursor-wait">
              <BeatLoader />
            </div>
            :
            <div className="bg-purple-500 text-white text-center rounded-lg w-full py-2 mt-5 mb-3 cursor-pointer" onClick={depositClick}>
              Deposit
            </div>
        }
      </div>
    </div>
  )
}

export default Participation;