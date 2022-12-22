import Top from "../components/deposit/Top"
import Description from "../components/deposit/Description"
import Participation from "../components/deposit/Participation"

const Deposit = () => {
  return (
    <div className="bg-[#101728] text-sm min-h-screen">
      <Top />
      <Participation />
      <Description />
    </div>
  )
}

export default Deposit