import Invite from "../components/sections/team/Invite";
import TeamInfo from "../components/sections/team/TeamInfo";
import Share from "../components/sections/team/Share";
import Referel from "../components/sections/team/Referel";

const Team = () => {
  return (
    <div className='bg-[#101728] text-sm min-h-screen pb-24'>
      <Invite />
      <TeamInfo />
      <Share />
      <Referel />
    </div>
  )
}

export default Team;