'use client'

import { state } from '@/vStore/store'
import { motion } from 'motion/react'
import { MdCategory, MdLocationOn, MdMenu, MdPhotoCamera } from 'react-icons/md'
import { useSnapshot } from 'valtio'

export const Sidebar = () => {
  const icons = [MdCategory, MdPhotoCamera, MdLocationOn]
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const snap = useSnapshot(state)

  // Function to toggle the drawer state
  const toggleDrawer = () => {
    // setIsDrawerOpen(prev => !prev)
    state.isDrawerOpen = !snap.isDrawerOpen
  }
  const addFloor = () => {
    // setIsDrawerOpen(prev => !prev)
    state.floorAdded = !snap.floorAdded
  }

  const addChair = () => {
    // setIsDrawerOpen(prev => !prev)
    state.chairAdded = !snap.chairAdded
  }

  const addStage = () => {
    // setIsDrawerOpen(prev => !prev)
    state.stageAdded = !snap.stageAdded
  }

  const addSpeaker = () => {
    // setIsDrawerOpen(prev => !prev)
    state.speakerAdded = !snap.speakerAdded
  }

  const addTable = () => {
    // setIsDrawerOpen(prev => !prev)
    state.tableAdded = !snap.tableAdded
  }

  const EventProps = [
    { label: 'Add Floor', action: 'addFloor' },
    { label: 'Add Chair', action: 'addChair' },
    { label: 'Add Stage', action: 'addStage' },
    { label: 'Add Speaker', action: 'addSpeaker' },
    { label: 'Add Table', action: 'addTable' }
  ]

  return (
    <motion.div
      className='flex gap-2 absolute z-10 top-0 left-0 p-3 w-[30%] text-black h-full'
      initial={{ x: '-87%' }} // Drawer starts off-screen to the left
      animate={{
        x: snap.isDrawerOpen ? '0%' : '-87%'
      }} // Slide in or out
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }} // Animation speed and style
    >
      {/* Drawer */}
      <motion.div
        className='bg-gray-400 text-white p-3 rounded-lg w-full backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'
        initial={{ opacity: 1 }} // Drawer starts off-screen to the left
        animate={{
          opacity: snap.isDrawerOpen ? 1 : 0
        }} // Slide in or out
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }} // Animation speed and style
      >
        <div className='flex flex-col gap-3 items-center justify-center'>
          <h1 className='text-xl font-bold'>Event Name</h1>
          <p className='text-xl'>Event Details Here</p>
          {/* <button onClick={addFloor}>Add floor</button> */}
          <div className='grid grid-cols-2 gap-4 w-full'>
            {EventProps.map(({ label, action }, index) => (
              <button
                key={index}
                className='bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors'
                onClick={() => {
                  if (action === 'addFloor') addFloor()
                  if (action === 'addChair') addChair()
                  if (action === 'addStage') addStage()
                  if (action === 'addSpeaker') addSpeaker()
                  if (action === 'addTable') addTable()
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Drawer Icons */}
      <div className='flex flex-col gap-2 items-center'>
        <div
          className='bg-[#ffffff] p-1 rounded-full cursor-pointer'
          onClick={toggleDrawer}
        >
          <div className='bg-[#767676] p-2 rounded-full shadow-lg'>
            <MdMenu fontSize='medium' className='text-gray-200' />
          </div>
        </div>
        {icons.map((IconComponent, index) => (
          <div
            key={index}
            className='bg-[#cfcfcf] p-1 rounded-full cursor-pointer'
          >
            <div className='bg-[#767676] p-2 rounded-full shadow-lg'>
              <IconComponent fontSize='medium' className='text-white' />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
