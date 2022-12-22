import Invite from './Invite';
import TeamInfo from './TeamInfo';
import Share from './Share';
import Referel from './Referel';

const Team = () => {
  return(
    <div className='bg-[#101728] min-h-screen pb-24'>
      <Invite />
      <TeamInfo />
      <Share />
      <Referel />
    </div>
  )
}

export default Team;