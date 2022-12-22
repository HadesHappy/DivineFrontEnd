import Application from "../components/sections/Loan/Application";
import Repayment from "../components/sections/Loan/Repayment";
import Bar from "../components/sections/Loan/Bar";

const Loan = () => {
  return (
    <div className='bg-[#101728] text-sm min-h-screen pb-24 space-y-10'>
      <Application />
      <Repayment />
      <Bar />
    </div>
  )
}

export default Loan;