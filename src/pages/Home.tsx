import Face from "../components/sections/home/Face";
import ButtonGroup from "../components/sections/home/ButtonGroup";
import Address from "../components/sections/home/Address";
import Description from "../components/sections/home/Description";
import Balance from "../components/sections/home/Balance";
import Withdraw from "../components/sections/home/Withdraw";

const Home = () => {
  return (
    <div className='bg-[#101728] min-h-screen pb-28 px-7'>
      <Face />
      <ButtonGroup />
      <Address />
      <Description />
      <Balance />
      <Withdraw />
    </div>
  )
}

export default Home;