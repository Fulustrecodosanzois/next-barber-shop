import PhoneItem from "@/app/_components/phone-item";
import ServiceItem from "@/app/_components/service-item";
import SidebarSheet from "@/app/_components/sidebar-sheet";
import { Button } from "@/app/_components/ui/button";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";



interface BarbershopPageProps {
    params: {
        id: string
    }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
    //  chamar o banco de dados

    const Barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },

        include: {
            services: true

        }

    })

    if (!Barbershop) {
        return notFound()
    }


    return (
        <div>

            {/* IMAGEM */}
            <div className="relative h-[250px] w-full">
                <Image
                    alt={Barbershop?.name}
                    src={Barbershop?.imageUrl}
                    fill
                    className="object-cover"
                />

                <Button
                    size="icon"
                    variant="secondary"
                    className="absolute left-4 top-4"
                    asChild
                >
                    <Link href="/">
                        <ChevronLeftIcon />
                    </Link>
                </Button>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            size="icon"
                            variant="outline"
                            className="absolute right-4 top-4">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SidebarSheet />
                </Sheet>


            </div>

            {/* TEXTO */}

            <div className="border-b border-solid p-5">
                <h1 className="mb-3 text-xl font-bold">{Barbershop?.name}
                </h1>
                <div className="mb-2 flex items-center gap-1">
                    <MapPinIcon className="text-primary" size={18} />
                    <p className="text-sm">
                        {Barbershop?.address}
                    </p>

                </div>
                <div className="flex itemms-center gap-2">
                    <StarIcon className="fill-primary text-primary" size={18} />
                    <p className="text-sm">
                        5,0 (499 avaliações)
                    </p>
                </div>


            </div>

            {/* DESCRIÇÂO */}

            <div className="border-b border-solid p-5 space-y-2">
                <h2 className="text-xs font-bold uppercase text-gray-400">Sobre nós</h2>
                <p className="text-sm text-justify">{Barbershop?.description}</p>
            </div>


            {/* SERVIÇOS */}

            <div className="space-y-3 p-5 border-b border-solid">
                <h2 className="text-xs font-bold uppercase text-gray-400">
                    Serviços
                </h2>

                <div className="space-y-3">
                    {Barbershop.services.map((service) => (
                        <ServiceItem
                            key={service.id}
                            barbershop={Barbershop}
                            service={service}
                        />
                    ))}
                </div>
            </div>

            {/* CONTATO */}

            <div className="space-y-3 p-5">
                {Barbershop.phones.map((phone) => (
                    <PhoneItem
                        key={phone}
                        phone={phone}
                    />
                ))}
            </div>

        </div>
    );
}

export default BarbershopPage;