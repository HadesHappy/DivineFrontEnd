import toast from 'react-hot-toast';
import useCode from '../../hooks/useCode';

const Friend = () => {
  const { code } = useCode()  
  const onCodeClick = () => {

  }

  return (
    <div className="mt-5 mx-7 bg-[#2d2159] text-sm rounded-2xl">
      <img className='rounded-t-2xl w-full h-60' src='/assets/background/image1.png' alt='background' />
      <div className='py-5 px-10'>
        <div className='text-white cursor-pointer' onClick={onCodeClick}>
          {code}
        </div>
        <div className='text-purple-400 mt-5'>
          Divine platform
          <br />
          Referal code
        </div>
      </div>
    </div>
  )
}

export default Friend;