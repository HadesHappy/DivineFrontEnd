import { BsWalletFill } from 'react-icons/bs';

const Address = () => {
  return(
    <div className="bg-[#212244] rounded-b-2xl px-7 flex flex-row gap-5 py-10 items-center">
      <BsWalletFill className='text-indigo-600 w-14 h-14'/>
      <div className='text-white'>0x349****23399</div>
    </div>
  )
}

export default Address;