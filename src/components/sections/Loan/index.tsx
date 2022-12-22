import Application from "./Application";
import Repayment from "./Repayment";
import Bar from './Bar';

const Loan = () => {
  return (
    <div className='bg-[#101728] min-h-screen pb-24 space-y-10'>
      <Application />
      <Repayment />
      <Bar />
    </div>
  )
}

export default Loan;