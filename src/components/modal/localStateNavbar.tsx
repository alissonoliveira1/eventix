import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/Button";
import { MapPin } from "lucide-react";
import {  type StatesNavbar } from "@/schema/statesnavbarSchema";
import { ChevronDown } from "lucide-react";

import { useStates } from "@/api/queries/getStates";




const capitais = [
    { capital:"Qualquer lugar", estado:"Qualquer Lugar", sigla:"QL" },
    {capital:"Salvador", estado:"Bahia", sigla:"BA"},
    {capital:"Brasilia", estado:"Distrito Federal", sigla:"DF"},
    {capital:"Rio de janeiro", estado:"Rio de Janeiro", sigla:"RJ"},
    {capital:"Sao paulo", estado:"São Paulo", sigla:"SP"},
    {capital:"Fortaleza", estado:"Ceará", sigla:"CE"},
    {capital:"Recife", estado:"Pernambuco", sigla:"PE"},
    {capital:"Curitiba", estado:"Paraná", sigla:"PR"},
    {capital:"Goiânia", estado:"Goiás", sigla:"GO"},
    {capital:"Porto alegre", estado:"Rio Grande do Sul", sigla:"RS"},
    {capital:"Belo horizonte", estado:"Minas Gerais", sigla:"MG"},
    
]

export function StateNavbar() {
    const [modal, setModal] = useState(false);
    const [query, setQuery] = useState(''); 
    const [valor, setValor] = useState(capitais[0].capital);
    const [resultados, setResultados] = useState<StatesNavbar>([]);
    const [erro, setErro] = useState("");

const { data, error } = useStates(query);
console.log(query)
useEffect(() => {
    if (data) {
      setResultados(data);
    }
    if (error) {
      setErro("Erro ao buscar dados");
    }
  }, [data]);
  
const CapitalComp = () =>{
    return(
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {capitais.map((item, inx) =>(
            <div key={inx} onClick={() => handleClick(item.capital)} className="flex border cursor-pointer p-2 rounded-2xl items-center">
              
                <span className="text-black text-base font-normal">
                    {item.capital}
                </span>
            </div>
        ))}
      </div>
    )
}
const handleClick = (item:any) => {


    setValor(item);
    setModal(false);
  }

    return (
        <Dialog open={modal} onOpenChange={setModal}>
            <DialogTrigger  asChild>
                <Button onClick={() => setQuery("")} className="cursor-pointer rounded-tr-none rounded-br-none shadow-none hover:bg-gray-200
                 bg-white" size="lg">
                    <MapPin className="size-5.5 text-zinc-500" />
                    <span className="text-zinc-500 font-sans text-base ">
                    {valor}
                    </span>
                    <ChevronDown className="size-5.5  text-zinc-500  " />
                </Button>
            </DialogTrigger>
            <DialogContent  className="bg-white p-9 ">
                <DialogHeader>
                    <DialogTitle className="text-center">Selecione um local</DialogTitle>
                    <DialogDescription className="text-center ">digite uma localização</DialogDescription>
                </DialogHeader>
                <Input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    
                    onChange={(e) => setQuery(e.target.value)}
                />

                {erro && <p style={{ color: 'red' }}>{erro}</p>}

                {query === "" ? <CapitalComp/> : (
                    <ul className=" scroll-auto  overflow-y-auto max-h-60">
                    {resultados.length > 0 ? (
                        resultados.map((item, idx) => (
                            <li className="cursor-pointer font-normal text-base gap-2 flex p-2 border" onClick={() => handleClick(item.cidade)} key={idx}>
                                <MapPin className="size-5.5 text-zinc-500" />
                                {item.cidade } 
                              
                            </li>
                        ))
                    ) : (
                        query.length > 0 && <li>Nenhum resultado encontrado.</li>
                    )}
                </ul>
                )}
            </DialogContent>
        </Dialog>
    );
}
