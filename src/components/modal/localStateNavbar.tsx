import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/Button";
import { MapPin } from "lucide-react";

import { ChevronDown } from "lucide-react";
import axios from "axios";

type Resultado = {
    estado: string;
    sigla: string;
    cidade: string;
};

const capitais = [
    { capital:"Qualquer lugar", estado:"Qualquer Lugar", sigla:"QL" },
    {capital:"Salvador", estado:"Bahia", sigla:"BA"},
    {capital:"Brasilia", estado:"Distrito Federal", sigla:"DF"},
    {capital:"Rio de janeiro", estado:"Rio de Janeiro", sigla:"RJ"},
    {capital:"Sao paulo", estado:"São Paulo", sigla:"SP"},
    {capital:"Fortaleza", estado:"Ceará", sigla:"CE"},
    {capital:"Recife", estado:"Pernambuco", sigla:"PE"},
    {capital:"Curitiba", estado:"Paraná", sigla:"PR"},
    {capital:"Porto alegre", estado:"Rio Grande do Sul", sigla:"RS"},
    {capital:"Belo horizonte", estado:"Minas Gerais", sigla:"MG"},
]

export function StateNavbar() {
    const [modal, setModal] = useState(false);
    const [query, setQuery] = useState("");
    const [valor, setValor] = useState(capitais[0].capital);
    const [resultados, setResultados] = useState<Resultado[]>([]);
    const [erro, setErro] = useState("");



  
    useEffect(() => {
        if (query.length > 1) {
          axios.get(`http://localhost:3000/cidades?query=${query}`)
            .then(res => setResultados(res.data))
            .catch(err => console.error('Erro ao buscar:', err));
        } else {
          setResultados([]);
        }
      }, [query]);

       const handleCidades = query === '' ? capitais : resultados;
    return (
        <Dialog open={modal} onOpenChange={setModal}>
            <DialogTrigger  asChild>
                <Button  className="cursor-pointer rounded-tr-none rounded-br-none shadow-none hover:bg-gray-200
                 bg-white" size="lg">
                    <MapPin className="size-5.5 text-black" />
                    <span className="text-black text-sm font-normal">
                    {valor}
                    </span>
                    <ChevronDown className="size-4" />
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

                <ul>
                    {handleCidades.length > 0 ? (
                        handleCidades.map((item, idx) => (
                            <li onClick={() => setValor('cidade' in item ? item.cidade : item.capital)} key={idx}>
                                {'cidade' in item ? item.cidade : item.capital} 
                              
                            </li>
                        ))
                    ) : (
                        query.length > 0 && <li>Nenhum resultado encontrado.</li>
                    )}
                </ul>
            </DialogContent>
        </Dialog>
    );
}
