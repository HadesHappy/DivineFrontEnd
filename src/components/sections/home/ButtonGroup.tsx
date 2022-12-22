import { useNavigate } from "react-router-dom"
import useContractInfo from "../../../hooks/useContractInfo"

const ContractButton = () => {
  return (
    <div className="text-gray-900 font-bold hover:text-white text-center py-2 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full cursor-pointer">
      View Contract
    </div>
  )
}

const ParticipationButton = () => {
  const navigate = useNavigate()
  const { totalDeposit } = useContractInfo()

  return (
    <>
      {
        (totalDeposit || 0) > 0 ?
          <div className="text-gray-900 font-bold hover:text-white text-center py-2 w-full bg-gradient-to-r from-gray-300 to-blue-500 rounded-full cursor-pointer" onClick={() => navigate('/deposit')}>
            Deposit
          </div>
          :
          <div className="text-gray-900 font-bold hover:text-white text-center py-2 w-full bg-gradient-to-r from-gray-300 to-blue-500 rounded-full cursor-pointer" onClick={() => navigate('/deposit')}>
            Participation
          </div>
      }
    </>
  )
}

const PresentationButton = () => {
  return (
    <div className="text-gray-900 font-bold hover:text-white text-center py-2 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full cursor-pointer">
      Presentation
    </div>
  )
}

const ButtonGroup = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-5 px-7 my-5">
      <ContractButton />
      <ParticipationButton />
      <PresentationButton />
    </div>
  )
}

export default ButtonGroup;