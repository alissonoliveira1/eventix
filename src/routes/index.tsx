import { createFileRoute } from '@tanstack/react-router'
import EventCard from '../components/layouts/event-card'
import Navbar from '../components/layouts/navbar'
import { StateNavbar } from '@/components/modal/localStateNavbar'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className=" mt-30 justify-center items-center  ">
      <Navbar/>
    
      <EventCard/> 
       
    </div>
  )
}