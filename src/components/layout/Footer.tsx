import { useState, useEffect } from "react";
import FooterItem from "./FooterItem";
import {
  BsFillHouseDoorFill,
  BsHouseDoor,
  BsGeoFill,
  BsGeo,
  BsSave2Fill,
  BsSave2,
  BsPeopleFill,
  BsPeople
} from 'react-icons/bs';

import {
  AiFillContacts,
  AiOutlineContacts
} from 'react-icons/ai'

// interface Props {
//   index: number,
//   setIndex: (value: number) => void,
// }

const Footer = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  useEffect(() => {
    setSelectedItem('home')
  }, [])
  return (
    <div className="fixed bottom-0 left-0 w-screen text-sm bg-[#2d2159] rounded-t-3xl">
      <div className="flex flex-row px-7 py-3 justify-between items-center">
        <FooterItem text='Home' index='home' icon1={<BsHouseDoor className="text-white h-5 w-5" />} icon2={<BsFillHouseDoorFill className="text-white h-5 w-5" />} setSelectedItem={setSelectedItem} selectedItem={selectedItem} />
        <FooterItem text='Loan' index='loan' icon1={<BsSave2 className="text-white h-5 w-5" />} icon2={<BsSave2Fill className="text-white h-5 w-5" />} setSelectedItem={setSelectedItem} selectedItem={selectedItem} />
        <FooterItem text='Team' index='team' icon1={<BsPeople className="text-white h-5 w-5" />} icon2={<BsPeopleFill className="text-white h-5 w-5" />} setSelectedItem={setSelectedItem} selectedItem={selectedItem} />
        <FooterItem text='NFT' index='nft' icon1={<BsGeo className="text-white h-5 w-5" />} icon2={<BsGeoFill className="text-white h-5 w-5" />} setSelectedItem={setSelectedItem} selectedItem={selectedItem} />
        <FooterItem text='Contact' index='contact' icon1={<AiOutlineContacts className="text-white h-5 w-5" />} icon2={<AiFillContacts className="text-white h-5 w-5" />} setSelectedItem={setSelectedItem} selectedItem={selectedItem} />
      </div>
    </div>
  )
}
// const Footer = ({ index, setIndex }: Props) => {
//   return (
//     <div className="fixed bottom-0 left-0 w-screen bg-[#2d2159] rounded-t-3xl">
//       <div className="flex flex-row px-7 py-3 justify-between items-center">
//         <FooterItem text='Home' id={0} icon1={<BsHouseDoor className="text-white h-5 w-5" />} icon2={<BsFillHouseDoorFill className="text-white h-5 w-5" />} index={index} setIndex={setIndex} />
//         <FooterItem text='Loan' id={1} icon1={<BsSave2 className="text-white h-5 w-5" />} icon2={<BsSave2Fill className="text-white h-5 w-5" />} index={index} setIndex={setIndex} />
//         <FooterItem text='Team' id={2} icon1={<BsPeople className="text-white h-5 w-5" />} icon2={<BsPeopleFill className="text-white h-5 w-5" />} index={index} setIndex={setIndex} />
//         <FooterItem text='NFT' id={3} icon1={<BsGeo className="text-white h-5 w-5" />} icon2={<BsGeoFill className="text-white h-5 w-5" />} index={index} setIndex={setIndex} />
//         <FooterItem text='Contact' id={4} icon1={<AiOutlineContacts className="text-white h-5 w-5" />} icon2={<AiFillContacts className="text-white h-5 w-5" />} index={index} setIndex={setIndex} />
//       </div>
//     </div>
//   )
// }
export default Footer;

