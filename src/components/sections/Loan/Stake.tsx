const Stake = () => {
  return (
    <div className="px-7">
      <div className="px-5 py-3 bg-[#2d2159] rounded-xl">
        <div className="text-white py-2">Deposit amount</div>
        <div className="flex flex-row justify-between items-center">
          <input className="rounded-xl py-2 bg-[#3d3d69] outline-none w-2/5 font-normal text-white text-center" />
          <div className="flex flex-row gap-1 items-center">
            <img className='h-5 w-5' src="/assets/images/matic.svg" alt='matic' />
            <div className="text-white uppercase">matic</div>
          </div>
        </div>
        <div className="bg-purple-500  text-white text-center rounded-xl w-full py-2 my-5 cursor-pointer">
          Deposit
        </div>
      </div>
    </div>

  )
}

export default Stake;