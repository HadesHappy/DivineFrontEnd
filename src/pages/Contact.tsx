import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
const Contact = () => {
  return (
    <div className="bg-[#161730] min-h-screen pb-20">
      <div className="flex flex-col justify-between items-center px-7">
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 w-full rounded-full mt-5 cursor-pointer text-gray-800 hover:text-white font-bold text-center'>
          Audit
        </div>
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 w-full rounded-full mt-5 cursor-pointer text-gray-800 hover:text-white font-bold text-center'>
          Contract
        </div>
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 w-full rounded-full my-5 cursor-pointer text-gray-800 hover:text-white font-bold text-center'>
          About
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-white">
          www.divine.grace
        </div>
        <div className='flex flex-row gap-5 py-5'>
          <FaFacebookF className='w-5 h-5 text-white' />
          <FaTwitter className='w-5 h-5 text-white' />
          <FaInstagram className='w-5 h-5 text-white' />
        </div>
      </div>
    </div>
  )
}

export default Contact;