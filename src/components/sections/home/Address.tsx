import { useAccountContext } from "../../../contexts/accountContext";
import {displayAddress} from "../../../utils/display";

const Address = () => {
  const { account } = useAccountContext();
  return (
    <div className="flex flex-row justify-between font-normal text-sm">
      <div className="text-white">Address: </div>
      {
        account ?
          <div className="text-white">{displayAddress(account || '')}</div>
          :
          <div className="text-white">{''}</div>
      }
    </div>
  )
}

export default Address;