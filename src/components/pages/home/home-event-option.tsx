

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Box } from "@radix-ui/themes";
export function EventOption() {

    const event = [
        { icon: "src/assets/icons/8.svg", name: "Palestras e Eventos", id: 1 },
        { icon: "src/assets/icons/7.svg", name: "Artes e Exposições", id: 2 },
        { icon: "src/assets/icons/1.svg", name: "Shows e Festas", id: 3 },
        { icon: "src/assets/icons/2.svg", name: "Concertos e Teatro ", id: 4 },
        { icon: "src/assets/icons/6.svg", name: "Eventos Corporativos", id: 5 },
        { icon: "src/assets/icons/3.svg", name: "Jogos e Esportes", id: 6 },
        { icon: "src/assets/icons/4.svg", name: "Cursos e Workshops", id: 7 },
        { icon: "src/assets/icons/5.svg", name: "Educação e Saúde", id: 8 },
        { icon: "src/assets/icons/team-group-svgrepo-com.svg", name: "Tecnologia e Networking", id: 9 },








    ]


    return (
        <div className='justify-center items-center flex flex-col '> 
            <div className="flex flex-col gap-4 px-2 container  pb-1 overflow-x-auto">
            <div className="flex gap-4">
                {event.map((item) => (
                    <Box className=" w-60 items-center justify-center flex flex-col rounded-md border-gray-200 border shadow-md/30 p-1" key={item.id}><LazyLoadImage  src={item.icon} className="w-9 h-9 text-red-400"  alt="" /><span className="font-bold text-gray-400 text-center ">{item.name}</span></Box>
                ))}
            </div>
        </div>
        </div>
    )
}