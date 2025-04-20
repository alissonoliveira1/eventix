import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
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

export function StateNavbar() {
    const [modal, setModal] = useState(false);
    const [query, setQuery] = useState("");
    const [valor, setValor] = useState("Qualquer Lugar");
    const [resultados, setResultados] = useState<Resultado[]>([]);
    const [erro, setErro] = useState("");

    useEffect(() => {
        if (query.length > 1) {
          axios.get(`http://localhost:3000/search?query=${query}`)
            .then(res => setResultados(res.data))
            .catch(err => console.error('Erro ao buscar:', err));
        } else {
          setResultados([]);
        }
      }, [query]);


    return (
        <Dialog open={modal} onOpenChange={setModal}>
            <DialogTrigger asChild>
                <Button variant="outline" size="lg">
                    <MapPin className="size-4" />
                    {valor}
                    <ChevronDown className="size-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-white w-[400px] h-[500px] rounded-lg shadow-md p-4">
                <h1 className="text-lg font-bold">State Navbar</h1>
                <Input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                {erro && <p style={{ color: 'red' }}>{erro}</p>}

                <ul>
                    {resultados.length > 0 ? (
                        resultados.map((item, idx) => (
                            <li onClick={() => setValor(item.cidade)} key={idx}>
                                {item.cidade} 
                              
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
