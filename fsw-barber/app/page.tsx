import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar } from "./_components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

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

            <div>
               <Card className="mt-6">
                  <CardContent className="flex justify-between p-0">
                     {/* ESQUERDA */}
                     <div className="flex flex-col gap-2 py-5 pl-5">
                        <Badge className="w-fit">Confirmado</Badge>
                        <h3 className="font-semibold">Corte de Cabelo</h3>

                        <div className="flex items-center gap-2">
                           <Avatar className="h-6 w-6">
                              <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                           </Avatar>
                           <p className="text-sm">Barbearia FSW</p>
                        </div>
                     </div>

                     {/* DIREITA */}

                     <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
                        <p className="text-sm">Agosto</p>
                        <p className="text-2xl">05</p>
                        <p className="text-sm">15:00</p>

                     </div>


                  </CardContent>
               </Card>

            </div>



         </div>




      </div>


   );
}

export default Home;