'use client'

import { useEffect, useState } from 'react'
import { getCenterOfScreen } from '@/utils/screenUtils'
import { MdCategory, MdLocationOn, MdPhotoCamera } from 'react-icons/md'

export const Eventbar = () => {
  const icons = [MdCategory, MdPhotoCamera, MdLocationOn]
  const [center, setCenter] = useState(getCenterOfScreen())
  console.log(center)

  // Update center on resize event
  useEffect(() => {
    const handleResize = () => {
      setCenter(getCenterOfScreen())
    }
    // Add event listener on mount
    window.addEventListener('resize', handleResize)

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      className={` flex gap-2 justify-between items-center absolute z-20 top-0 right-0 p-3 text-black`}
      style={{ width: `${center + 80}px` }} // Dynamically set the width
    >
      <div className='rounded-xl bg-white text-black p-2 text-center align-middle'>
        Event Name
      </div>

      <div className='flex gap-2 rounded-lg p-2'>
        {icons.map((IconComponent, index) => (
          <div
            key={index + 14}
            className='bg-[#cfcfcf] p-1 rounded-full cursor-pointer'
          >
            <div className='bg-[#767676] p-2 rounded-full shadow-lg'>
              <IconComponent fontSize='small' className='text-white' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
