interface Props {
  text: string,
  description: string,
}

const EarningItem = ({ text, description }: Props) => (
  <div className="flex flex-col gap-3 items-center justify-center">
    <div className="text-white font-normal">
      {text}
    </div>
    <div className="text-purple-400">
      {description}
    </div>
  </div>
)

const MyEarning = () => {
  return (
    <div className="p-7 my-5 rounded-3xl bg-[#2d2159]">
      <div className="text-white text-lg">
        My earnings
      </div>
      <div className="bg-[#3d3d69] p-3 flex flex-row justify-between rounded-xl mt-5">
        <EarningItem text='0.00' description="Total Deposit" />
        <EarningItem text='0.00' description='Total Earned' />
      </div>
    </div>
  )
}

export default MyEarning;