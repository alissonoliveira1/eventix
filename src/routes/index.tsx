import { createFileRoute } from '@tanstack/react-router'
import EventCard from '../components/layouts/event-card'
import Navbar from '../components/layouts/navbar'
import { EventOption } from '@/components/pages/home/home-event-option'
import { AnuncioEventos } from '@/components/pages/home/anuncio-eventos'
import { AuthProvider } from '@/components/context/useAuth'
export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="  mt-30 justify-center items-center  ">
      <Navbar/>
       <EventOption/>
       
      <EventCard/> 
       <AnuncioEventos/>
       <AnuncioEventos/>
       <AnuncioEventos/>
    </div>
  )
}