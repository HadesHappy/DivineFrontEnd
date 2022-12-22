import useContractInfo from "../../../hooks/useContractInfo";
import { displayBalance } from "../../../utils/display";

const Balance = () => {
  const { totalDeposit, totalEarned } = useContractInfo();

  return(
    <div className="flex flex-row gap-3 justify-between items-center text-sm my-5">
      <div className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="rounded-full bg-[#2d2159] m-3">
          <div className="flex items-center justify-center text-base text-white h-20 w-20">{displayBalance((totalEarned || 4.5)/(totalDeposit || 1))}%</div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-4/5">
        <div className="flex flex-row items-center w-full">
          <div className="uppercase text-white w-3/5">total deposit:</div>
          <div className="text-center bg-[#3d3d69] py-1 text-white rounded-md w-2/5">{displayBalance(totalDeposit || 0)}</div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-full h-2 my-1 rounded-full" />
        <div className="flex flex-row items-center w-full">
          <div className="uppercase text-white  w-3/5">total earned:</div>
          <div className="text-center bg-[#3d3d69] py-1 text-white rounded-md w-2/5">{displayBalance(totalEarned || 0)}</div>
        </div>
      </div>
    </div>
  )
}

export default Balance;