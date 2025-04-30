import React, { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CalendarDays, Clock, MapPin, ArrowRight, Menu } from "lucide-react"
import { useKeenSlider } from "keen-slider/react"
import 'react-lazy-load-image-component/src/effects/blur.css'

import "keen-slider/keen-slider.min.css"

export function AnuncioEventos() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 4,
      spacing: 10,
    },
  });
  return (
    <div className=" justify-items-center">
      <section className="flex container flex-col overflow-hidden  py-8 ">
        <h2 className="text-2xl font-bold mb-6">Próximos Eventos</h2>

        {/* Wrapper do scroll horizontal */}
        <div className="relative" >
          {/* Lista horizontal com gap entre os itens */}
          <div ref={sliderRef} className=" keen-slider   px-1 pb-1  md:px-0">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
             <div
             key={item}
             className="keen-slider__slide cursor-pointer hover:shadow-2xl transition: ease-in-out min-w-2xs rounded-lg border bg-white text-gray-300 shadow-sm overflow-hidden"
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
          {loaded && instanceRef.current && instanceRef.current.track && (
  <div className="flex mt-1 justify-end gap-1">
    <Arrow
      left
      
      onClick={(e: any) => {
        e.stopPropagation();
        instanceRef.current?.prev();
      }}
      disabled={currentSlide === 0}
    />

    <Arrow
   
      onClick={(e: any) => {
        e.stopPropagation();
        instanceRef.current?.next();
      }}
      disabled={
        currentSlide ===
        (instanceRef.current?.track?.details?.slides?.length ?? 0) - 1
      }
    />
  </div>
)}
        </div>
      </section>
      

    </div>
  )
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? " fill-gray-400 " : "";
  return (
  
     <div onClick={props.onClick} className="border border-gray-200 cursor-pointer   p-1 justify-center items-center flex  shadow-sm">
      <svg
      
      className={` w-[20px]  h-[20px]   top-[50%] translateY-[50%]  ${props.left ? " left-[5px]" : "left-auto right-[5px]"
        } ${disabled} `}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
     </div>
  
  );
}
