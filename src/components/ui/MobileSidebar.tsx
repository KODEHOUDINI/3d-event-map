import { state } from '@/vStore/store'
import { useSnapshot } from 'valtio'

export default function MobileSidebar() {
  const snap = useSnapshot(state)

  const toggleRoomDisplay = () => {
    state.showRoom = !snap.showRoom
  }

  return (
    <div className='rounded-lg w-full absolute z-10 bottom-24'>
      <div className='flex flex-col gap-2 items-center justify-start'>
        {/* <h1 className='text-xl font-bold'>Event Name</h1> */}
        {/* <p className='text-xl'>Current Location Within UG</p> */}
        <div className='flex justify-center'>
          <button
            className='bg-white text-gray-500 w-56 text-nowrap text-lg p-2 rounded-full font-semibold'
            onClick={toggleRoomDisplay}
          >
            {snap.showRoom ? 'Back To Map' : 'Arrived At Destination'}
          </button>
        </div>
      </div>
    </div>
  )
}
