import { Link } from "@tanstack/react-router";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CalendarDays, Clock, MapPin, ArrowRight, Menu } from "lucide-react"
import 'react-lazy-load-image-component/src/effects/blur.css'


export function AnuncioEventos() {
    return(
       <div className=" justify-items-center">
         <section className="flex container flex-col overflow-hidden  py-8 ">
  <h2 className="text-2xl font-bold mb-6">Próximos Eventos</h2>

  {/* Wrapper do scroll horizontal */}
  <div className="overflow-x-auto">
    {/* Lista horizontal com gap entre os itens */}
    <div className="flex gap-4 px-1 pb-1  md:px-0">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <div
          key={item}
          className="min-w-2xs  rounded-lg border  bg-white text-gray-300 shadow-sm overflow-hidden"
        >
          <div className="relative h-32 w-full">
            <LazyLoadImage
              src={`/src/assets/banner.jpg`}
              alt={`Evento ${item}`}
              fill
              className="object-cover w-full h-[128px]"
            />
          </div>
          <div className="p-3">
            <h1 className="font-semibold text-xl mb-1 text-gray-600">
              Nome do Evento {item}
            </h1>
            <div className="flex items-center gap-1 mb-1">
              <CalendarDays className="h-3 w-3 text-amber-300" />
              <span className="text-xs text-amber-300">20 de Junho, 2025</span>
            </div>
            <div className="flex items-center gap-1 mb-2">
              <MapPin className="h-3 w-3 text-rose-500" />
              <span className="text-xs text-gray-600">Local do Evento</span>
            </div>
            <button className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-transparent px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2">
              Ver Detalhes
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

       </div>
    )
}