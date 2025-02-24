import { Eventbar } from '@/components/ui/Eventbar'
import { Sidebar } from '@/components/ui/Sidebar'
import Experience from '@/components/3d-engine/Experience'

export default function Home() {
  return (
    <main className='w-full h-full'>
      <div className='relative h-full'>
        <div className='absolute z-0 top-0 left-0 w-full h-full'>
          <Experience />
        </div>
        {/* Sidebar */}
        <Sidebar />
        {/* Event bar */}
        <Eventbar />
      </div>
    </main>
  )
}
