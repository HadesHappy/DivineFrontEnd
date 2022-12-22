import Top from "../components/Referal/Top"
import Friend from '../components/Referal/Friend'
import ReferalDescription from "../components/Referal/ReferalDescription"

const Referal = () => {
  return (
    <div className="bg-[#101728] text-sm min-h-screen pb-5">
      <Top />
      <Friend />
      <ReferalDescription />
    </div>
  )
}

export default Referal