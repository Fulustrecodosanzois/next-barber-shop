import Image from "next/image";
import { BarbershopService } from "@prisma/client";
import { Button } from "./ui/button";
import { Currency } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface ServiceItemProps {
    service: BarbershopService
}



const ServiceItem = ({ service }: ServiceItemProps) => {

    return (
        <Card>
            <CardContent className="flex items-center gap-3 p-3">

                {/* IMAGE */}
                <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
                    <Image
                        alt={service.name}
                        src={service.imageUrl}
                        fill
                        className="object-cover rounded-lg"

                    />
                </div>
                {/* DIREITA */}

                <div className="space-y-2">
                    <h2 className="font-semibold">{service.name}</h2>
                    <p className="text-gray-400 text-sm">{service.description}</p>

                    <div className="flex items-center justify-between">
                        <p className="font-bold text-sm text-primary">
                            {Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(Number(service.price))}
                        </p>

                        <Button variant="secondary" size="">
                            Reservar
                        </Button>
                    </div>


                </div>

            </CardContent>
        </Card>
    );
}
export default ServiceItem;