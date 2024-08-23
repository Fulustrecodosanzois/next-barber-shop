import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import { quickSearchOptions } from "./_constants/search";
import BookingItem from "./_components/booking-item";
import Search from "./_components/search";
import Link from "next/link";


const Home = async () => {
   // chamar banco
   const barbershops = await db.barbershop.findMany({})
   const popularBarbershop = await db.barbershop.findMany({
      orderBy: {
         name: "desc"
      }
   })

   return (
      <div>
         {/* HEADER */}
         <Header />


         {/* TEXTO SAUDAÇÃO */}

         <div className="p-5">
            <h2 className="text-xl font-bold">Olá, Fulustreco</h2>
            <p>Quarta-Feira, 14 de Agosto</p>

            {/* BUSCA */}
            <div className="mt-6">
               <Search />
            </div>

            {/* BUSCA RÁPIDA */}

            <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">

               {quickSearchOptions.map((option) => (
                  <Button
                     className="gap-2"
                     variant="secondary"
                     key={option.title}
                     asChild
                  >
                     <Link href={`/barbershops?service=${option.title}`}>
                        <Image
                           src={option.imageUrl}
                           width={16}
                           height={16}
                           alt={option.title}

                        />
                        {option.title}
                     </Link>
                  </Button>
               ))}

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

            <BookingItem />


            {/* RECOMENDADOS */}

            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
               RECOMENDADOS
            </h2>

            <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
               {barbershops.map((barbershop) => (
                  <BarbershopItem key={barbershop.id} barbershop={barbershop} />
               ))}
            </div>

            {/* POPULARES */}

            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
               POPULARES
            </h2>

            <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
               {popularBarbershop.map((barbershop) => (
                  <BarbershopItem key={barbershop.id} barbershop={barbershop} />
               ))}
            </div>

         </div>


      </div>


   );
}

export default Home;