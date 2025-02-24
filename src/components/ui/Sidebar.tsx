import { MdCategory, MdLocationOn, MdMenu, MdPhotoCamera } from 'react-icons/md'

export const Sidebar = () => {
  const icons = [MdCategory, MdPhotoCamera, MdLocationOn]
  return (
    <div className='flex gap-2 absolute z-10 top-0 left-0 p-3 w-[30%] text-black h-full'>
      {/* Drawer */}
      <div className='bg-gray-400 text-white p-3 rounded-lg w-full backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-xl font-bold'>Event Name</h1>
          <p className='text-xl'>Event Details Here</p>
        </div>
      </div>

      {/* Drawer Icons */}
      <div className='flex flex-col gap-2 items-center'>
        <div className='bg-[#ffffff] p-1 rounded-full cursor-pointer'>
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
    </div>
  )
}
