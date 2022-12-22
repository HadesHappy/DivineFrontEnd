import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useAccountContext } from '../../contexts/accountContext'
import {displayAddress} from '../../utils/display'

const Top = () => {
  const navigate = useNavigate()
  const { account } = useAccountContext()

  const onClick = () => {
    navigate('/home')
  }
  return (
    <div className="relative p-7 bg-[#2d2159] items-center rounded-b-3xl text-white">
      <div className="absolute float-left left-5 cursor-pointer">
        <div className='rounded-full bg-[#3d3d69] w-5 h-5 flex flex-row justify-center items-center'>
          <FaArrowLeft onClick={onClick} />
        </div>
      </div>
      <div className='text-center'>
        {displayAddress(account || '')}
      </div>
    </div>

  )
}

export default Top;