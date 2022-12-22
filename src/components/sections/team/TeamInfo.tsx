import { useState } from 'react'
import useContractInfo from "../../../hooks/useContractInfo"
import { displayBalance } from "../../../utils/display"
import { withdrawTeamEarninigs } from "../../../contract/roi.contract"
import { BeatLoader } from 'react-spinners'
import toast from 'react-hot-toast'

interface Props {
  text: number,
  description: string,
}

const TeamItem = ({ text, description }: Props) => (
  <div className="flex flex-col gap-3 items-center justify-center">
    <div className="text-white font-normal">
      {text}
    </div>
    <div className="text-purple-400">
      {description}
    </div>
  </div>
)

const TeamInfo = () => {
  const { teamNum, teamEarning, refresh } = useContractInfo()
  const [loading, setLoading] = useState<boolean>(false);

  const onWithdrawClick = async () => {
    if (teamEarning) {
      setLoading(true);
      await withdrawTeamEarninigs();
      await refresh();
      setLoading(false);
    }
    else {
      toast.error('Something went wrong. \n Amount exceeds the withdrawable value.');
    }
  }
  return (
    <div className="p-7 my-5 rounded-3xl bg-[#2d2159]">
      <div className="text-white text-base">
        My team
      </div>
      <div className="bg-[#3d3d69] p-3 flex flex-row justify-between rounded-xl mt-5">
        <TeamItem text={teamNum || 0} description="People" />
        <TeamItem text={displayBalance(teamEarning || 0)} description='Team Earning' />
      </div>
      {
        loading ?
          <div className="bg-purple-500 flex flex-row items-center justify-center rounded-lg w-full py-2 mt-5 mb-3 cursor-wait">
            <BeatLoader />
          </div>
          :
          <div className="bg-purple-500 text-white text-center rounded-xl w-full py-2 mt-5 cursor-pointer" onClick={onWithdrawClick}>
            Withdraw
          </div>
      }
    </div>
  )
}

export default TeamInfo;