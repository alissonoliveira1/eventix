import { Link } from "@tanstack/react-router";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CalendarDays, Clock, MapPin, ArrowRight, Menu } from "lucide-react"
import 'react-lazy-load-image-component/src/effects/blur.css'


function EventCard(){
return(
    
    <main className="justify-items-center">
    <section className="container py-8 md:py-12">
      <div className="rounded-lg border border-gray-300 shadow-sm bg-white text-gray-900 ">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2 h-[300px] md:h-auto">
            <LazyLoadImage
              src="/src/assets/banner.jpg"
              alt="Festival de Música Moderna"
              className="object-cover w-[607px] h-[312px] rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 md:hidden">
              <h2 className="text-xl font-bold text-white mb-2">Festival de Música Moderna</h2>
            </div>
          </div>
          <div className="flex flex-col justify-between p-6 md:w-1/2">
            <div className="space-y-4">
              <div className="space-y-2 hidden md:block">
                <h2 className="text-3xl font-bold tracking-tight">Festival de Música Moderna</h2>
                <p className="text-sm text-gray-500">
                  Apresentando os melhores artistas nacionais e internacionais em um evento imperdível. Uma
                  experiência musical única com diversos gêneros e performances exclusivas.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-rose-500" />
                  <span className="text-sm">15-17 de Maio, 2025</span>
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <Clock className="h-4 w-4 text-rose-500" />
                  <span className="text-sm">Início às 16:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-rose-500" />
                  <span className="text-sm">Parque da Cidade - São Paulo, SP</span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button className="inline-flex w-full items-center justify-center rounded-md bg-rose-500 px-4 py-3 text-sm font-medium text-white hover:bg-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2">
                Comprar Ingressos
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

   
  </main>
)
}
export default EventCard;