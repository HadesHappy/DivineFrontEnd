import { FaLink } from 'react-icons/fa'
import useCode from '../../hooks/useCode'
import toast from 'react-hot-toast'

const ReferalDescription = () => {
  const { code } = useCode()
  const onLinkClick = () => {
    var inp = document.createElement('input');
    document.body.appendChild(inp)
    inp.value = 'http://localhost:3000/home/' + code
    inp.select();
    document.execCommand('copy', false);
    inp.remove();
    toast.success(code.toString())
  }

  return (
    <div className="bg-[#2d2159] px-5 py-5 mt-5 rounded-2xl">
      <div className='bg-[#3d3d69] w-10 h-10 flex justify-center items-center mx-auto rounded-md cursor-pointer' onClick={onLinkClick}>
        <FaLink className='text-[#0085ff] w-5 h-5' />
      </div>
      <div className='text-center text-indigo-400 my-2'>
        Copy Link
      </div>
      <div className="text-white mb-3 text-lg">Invitation Reward</div>
      <div className="text-purple-400">
        1. Invite and refer your friends to join you will get up to five-tiers of rewards.
      </div>
      <div className="text-purple-400 my-3">
        2. The five-tier reward is Level 1 (10%) Level2 (8%) Level3 (6%) Level4 (4%) Level5 (2%).
      </div>
      <div className="text-purple-400">
        3. Daily rewards will be calculated based on your subordinate's daily income.
      </div>
    </div>
  )
}
export default ReferalDescription;