import Drawers from '@/components/ui/Drawers'
import Experience from '@/components/3d-engine/Experience'

export default function Home() {
  return (
    <main className='w-full h-full overflow-hidden'>
      <div className='relative h-full'>
        <div className='absolute z-0 top-0 left-0 w-full h-full'>
          <Experience />
        </div>
        {/* Drawers */}
        <Drawers />
      </div>
    </main>
  )
}
