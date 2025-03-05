import { state } from '@/vStore/store'
import { motion } from 'motion/react'
import { MdCategory, MdLocationOn, MdMenu, MdPhotoCamera } from 'react-icons/md'
import { useSnapshot } from 'valtio'

export default function MobileSidebar() {
  const snap = useSnapshot(state)

  const userStartLocation = ['Left Wing', 'Main Gate', 'Right Wing']
  const icons = [MdLocationOn]

  const toggleDrawer = () => {
    state.isDrawerOpen = !snap.isDrawerOpen
  }

  return (
    <motion.div
      className='block lg:hidden flex-col jus gap-3 justify-between items-center absolute z-10 rounded-xl bottom-0 p-3 w-full text-white bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 h-[50%]'
      initial={{ y: '100%' }}
      animate={{
        y: '18%'
      }} // Slide in or out
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }} // Animation speed and style
    >
      {/* Drawer Icons */}

      <div className='flex w-full gap-2 items-center justify-center'>
        <div className='w-[20%] bg-white h-1 rounded-2xl'></div>
      </div>

      {/* Drawer */}
      <motion.div
        className='p-3 rounded-lg w-full'
        initial={{ opacity: 1 }}
        animate={{
          opacity: snap.isDrawerOpen ? 0 : 1
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }} // Animation speed and style
      >
        <div className='flex flex-col gap-3 items-center justify-center'>
          <h1 className='text-xl font-bold'>Event Name</h1>
          <p className='text-xl'>Current Location Within UG</p>
          <div className='grid grid-cols-2 gap-4 w-full'>
            {userStartLocation.map((locationStart, index) => (
              <button
                key={index}
                className='bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors'
                onClick={() => {
                  console.log('hello')
                }}
              >
                {locationStart}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
