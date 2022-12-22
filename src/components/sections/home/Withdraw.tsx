import { useState } from 'react';
import useContractInfo from "../../../hooks/useContractInfo";
import { displayBalance } from "../../../utils/display";
import toast from 'react-hot-toast';
import { withdraw } from '../../../contract/roi.contract';
import { BeatLoader } from 'react-spinners';

const Withdraw = () => {
  const { withdrawable, refresh } = useContractInfo()
  const [amount, setAmount] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)

  const onChange = (e: any) => {
    setAmount(e.target.value);
  }

  const setMax = () => {
    setAmount(withdrawable || 0);
  }

  const withdrawClick = async () => {
    if(withdrawable && (amount > withdrawable)){
      toast.error('Something went wrong. \n Amount exceeds the withdrawable value.');
    }
    else{
      setLoading(true);
      await withdraw(amount);
      await refresh();
      setLoading(false);
    }
  }
  
  return (
    <div>
      <div className="px-5 py-3 bg-[#2d2159] text-sm rounded-2xl">
        <div className="flex flex-row justify-between items-center">
          <div className="text-white py-1">Withdrawable Balance: </div>
          <div className="relative bg-[#3d3d69] rounded-md w-2/5 flex flex-row items-center justify-center gap-3">
            <img className='absolute float-right right-3 h-4 w-4' src="/assets/images/matic.svg" alt='matic' />
            <div className="text-white py-1 text-center">{displayBalance(withdrawable || 0)}</div>
          </div>
        </div>

        <div className="text-white py-2">Enter the amount to withdraw</div>
        <div className="flex flex-row justify-between items-center">
          <input type='number' className="rounded-md py-1 bg-[#3d3d69] outline-none w-2/5 font-normal text-white text-center" value={amount} onChange={onChange}/>
          <div className="flex flex-row items-center justify-center gap-1 px-5 py-1 rounded-md bg-[#3d3d69] text-orange-500 text-center cursor-pointer" onClick={setMax}>
            <img className="h-4 w-4" src='/assets/images/matic.svg' alt='matic' />
            MAX
          </div>
        </div>
        {
          loading ?
            <div className="bg-purple-500 flex flex-row items-center justify-center rounded-lg w-full py-2 mt-5 mb-3 cursor-wait">
              <BeatLoader />
            </div>
            :
            <div className="bg-purple-500 text-white text-center rounded-lg w-full py-2 mt-5 cursor-pointer" onClick={withdrawClick}>
              Withdraw
            </div>
        }
        {/* <div className="bg-[#3d3d69] text-purple-400 text-center rounded-xl w-full py-2 mt-5 mb-3 cursor-pointer">
        Withdrawal Record
      </div> */}
      </div>
    </div>
  )
}

export default Withdraw;