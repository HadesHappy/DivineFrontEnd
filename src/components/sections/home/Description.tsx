interface Props {
  text1: string,
  text2: string,
  text3: string,
}

const DescriptionItem = ({ text1, text2, text3 }: Props) => (
  <div className="uppercase font-normal my-3">
    <div className="text-white pb-1">{text1}</div>
    {
      text2 === 'active' ?
        <div className="text-indigo-400">{text2}</div>
        :
        <div className="text-white">{text2}</div>
    }
    {
      text3 === 'active' ?
        <div className="text-indigo-400 text-center pt-4">{text3}</div>
        :
        <div className="text-purple-400 text-center pt-3 text-base">{text3}</div>

    }
  </div>
)

const Description = () => {
  return (
    <div className="py-1">
      <div className="border-t border-gray-500 w-full h-1"></div>
      <div className="flex flex-row justify-between text-xs">
        <DescriptionItem text1='Daily' text2='Earning' text3='1%' />
        <DescriptionItem text1='Holders' text2='Bonus' text3='1.5%' />
        <DescriptionItem text1='Leadership' text2='Bonus' text3='1%' />
        <DescriptionItem text1='nft bonus' text2='active' text3='1%' />
        <DescriptionItem text1='milestone' text2='share' text3='active' />
      </div>
      <div className="border-t border-gray-500 w-full h-1"></div>
    </div>
  )
}

export default Description;