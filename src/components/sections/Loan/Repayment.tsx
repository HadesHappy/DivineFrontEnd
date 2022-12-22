const Repayment = () => {
  return (
    <div className="px-7">
      <div className="text-purple-400 py-2 text-base text-center">Loan Repayment</div>
      <div className="px-5 py-3 bg-[#2d2159] rounded-xl">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between items-center">
            <div className="text-white uppercase w-3/5">loan balance</div>
            <div className="text-purple-400 bg-[#3d3d69] rounded-xl w-2/5 flex flex-row items-center justify-center gap-3">
              <div className="text-white py-2 text-center">500</div>
              <img className='h-4 w-4' src="/assets/images/matic.svg" alt='matic' />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="text-white uppercase w-3/5">repay loan</div>
            <input className="rounded-xl py-2 bg-[#3d3d69] outline-none w-2/5 font-normal text-white text-center" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-center rounded-xl w-full py-2 mt-5 cursor-pointer">
          Process
        </div>
      </div>
    </div>
  )
}

export default Repayment;