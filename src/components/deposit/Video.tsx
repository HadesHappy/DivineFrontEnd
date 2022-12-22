import ReactPlayer from "react-player/lazy";
const Video = () => {
  return (
    <div className="py-5">
      <div className='relative w-[320px] h-[180px] m-auto'>
        <ReactPlayer
          className='absolute top-0 left-0'
          url='../../assets/video/video.mov'
          width='100%'
          height='100%'
          playing={true}
          loop={true}
        />
      </div>
    </div>
  )
}

export default Video;