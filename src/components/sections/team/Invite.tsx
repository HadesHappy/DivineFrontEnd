import { useNavigate } from "react-router-dom";

const Invite = () => {
  const navigate = useNavigate();

  return(
    <div className="px-7 pt-5">
      <div className="flex flex-row justify-between rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-600 p-5">
        <div className="flex flex-row gap-2">
          <div className="bg-gray-200 rounded-full">
            <div className="m-2 w-7 h-7 bg-gradient-to-r from-fuchsia-300 to-fuchsia-500 rounded-full"></div>
          </div>
          <div className="text-white">
            <div className="font-bold text-base">Invite friends</div>
            <div className="text-sm text-gray-200">Earn Commission</div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center bg-gray-100 text-purple-400 rounded-xl px-5 cursor-pointer" onClick={() => navigate('/invite')}>
          Invite
        </div>
      </div>
    </div>
  )
}

export default Invite;