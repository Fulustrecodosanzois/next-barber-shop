import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";

const Home = () => {
   return (
      <div>
         {/* HEADER */}
         <Header />

         {/* TEXTO SAUDAÇÃO */}

         <div className="p-5">
            <h2 className="text-xl font-bold">Olá, Fulustreco</h2>
            <p>Quarta-Feira, 14 de Agosto</p>

            {/* BARRA DE PESQUISA */}

            <div className="gap-2 mt-6 flex items-center">
               <Input placeholder="Busque Aqui..." />
               <Button>
                  <SearchIcon />
               </Button>

            </div>

            {/* BANNER PRINCIPAL */}

            <div className="relative mt-6 h-[150px] w-full">
               <Image
                  alt="Banner principal"
                  src="/banner-01.png"
                  fill
                  className="rounded-xl object-cover"
               />
            </div>

            {/* AGENDAMENTOS */}

            



         </div>




      </div>


   );
}

export default Home;