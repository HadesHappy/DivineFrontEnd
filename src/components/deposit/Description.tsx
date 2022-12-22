import { FaRegWindowClose, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

const Description = () => {
  let price = 1
  return (
    <div className='text-white bg-[#2d2159] rounded-2xl mx-7 px-5 py-3'>
      <div className='flex flex-row gap-2 items-center'>
        <FaExclamationTriangle className='text-pink-500' />
        <div className='uppercase text-pink-500'>
          important!
        </div>
      </div>
      {
        price && <div>
          Do not forget about transaction fees! Transaction fee is <span className='uppercase text-purple-500'>5 matic</span><br />
          <li>50% to marketing address</li>
          <li>30% to creator address</li>
          <li>20% to charity</li>

        </div>
      }
      <div className='border-0.5 border-t w-full border-gray-500 mt-2'></div>
      <div className='my-2'>
        <div className='flex flex-row gap-2'>
          <div>
            <FaCheck className=' text-purple-500 w-3 h-3 mt-1' />
          </div>
          <div>Minimum participation amount
            {
              price &&
              <span className='uppercase text-purple-500'> {Math.floor(10 / price)} matic</span>
            }
          </div>
        </div>
        <div className='flex flex-row gap-2'>
          <div>
            <FaCheck className='w-3 h-3 mt-1 text-purple-500' />
          </div>
          <div>We are working only with: <span className='uppercase text-purple-500'>matic</span> cryptocurrency</div>
        </div>
        <div className='flex flex-row gap-2'>
          <div>
            <FaCheck className='w-3 h-3 mt-1 text-purple-500' />
          </div>
          <div>Your participation will be activated after <span className=' text-purple-500'>1 confirmation</span> in blockchain</div>
        </div>
        <div className='flex flex-row gap-2'>
          <div>
            <FaCheck className='w-3 h-3 mt-1 text-purple-500' />
          </div>
          <div>Withdrawable rewards are instant and do not require approval</div>
        </div>
      </div>
    </div>
  )
}

export default Description