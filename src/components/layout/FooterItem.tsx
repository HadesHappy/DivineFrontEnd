import { useNavigate } from "react-router-dom"

interface Props {
  index: string,
  text: string,
  icon1: JSX.Element,
  icon2: JSX.Element,
  selectedItem: string | null,
  setSelectedItem: (value: string) => void
}

const FooterItem = ({ index, icon1, icon2, text, setSelectedItem, selectedItem }: Props) => {
  const navigate = useNavigate()
  const onClick = () => {
    setSelectedItem(index)
    navigate(`${index}`);
  }
  return (
    <div className="flex flex-col gap-2 items-center justify-center cursor-pointer" onClick={onClick}>
      <div className="flex flex-row items-center justify-center w-9 h-9 rounded-xl bg-[#3d3d69]">
        {
          index === selectedItem ?
            icon2
            :
            icon1
        }
      </div>
      <div className="text-center font-normal text-white">
        {text}
      </div>
    </div>
  )
}

export default FooterItem