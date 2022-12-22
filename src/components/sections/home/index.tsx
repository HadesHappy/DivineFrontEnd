import Face from './Face';
import ButtonGroup from './ButtonGroup';
import Balance from './Balance';
import Address from './Address';
import Description from './Description';
import Withdraw from './Withdraw';

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