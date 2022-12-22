interface Props {
  level: number,
  percentage: string,
}

const ReferelItem = ({level, percentage}: Props) => {
  return (
    <div className="bg-[#2d2159] rounded-xl w-36 py-3">
      <div className="flex flex-row gap-5 items-center justify-center">
        <div className="bg-orange-500 rouned-xl text-white text-center rounded-xl p-3">
          {'0' + level}
        </div>
        <div className="text-white">
          Level
        </div>
      </div>
      <div className="text-center text-white font-bold">{percentage}</div>
    </div>
  )
}

const Referel = () => {
  return (
    <div className="flex flex-row flex-wrap gap-3 items-center justify-center pt-5 text-base">
      <ReferelItem level={1} percentage='10%' />
      <ReferelItem level={2} percentage='8%' />
      <ReferelItem level={3} percentage='6%' />
      <ReferelItem level={4} percentage='4%' />
      <ReferelItem level={5} percentage='2%' />
    </div>
  )
}

export default Referel;