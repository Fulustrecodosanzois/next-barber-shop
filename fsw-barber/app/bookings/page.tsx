import { getServerSession } from "next-auth";
import Header from "../_components/header";
import { db } from "../_lib/prisma";
import { authOptions } from "../_lib/auth";
import { notFound } from "next/navigation";
import BookingItem from "../_components/booking-item";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../_components/ui/accordion";

const bookings = async () => {
    const session = await getServerSession(authOptions)
    if (!session?.user) {

        // colocar o pop-up do login aqui
        return notFound()
    }

    const confirmedBookings = await db.booking.findMany({
        where: {
            userId: (session?.user as any).id,
            date: {
                gte: new Date(),

            }
        },

        include: {
            service: {
                include: {
                    barbershop: true
                }
            }
        },
        orderBy: {
            date: "asc"
        }

    })
    const concludedBookings = await db.booking.findMany({
        where: {
            userId: (session?.user as any).id,
            date: {
                lt: new Date(),

            }
        },

        include: {
            service: {
                include: {
                    barbershop: true
                }
            }
        },
        orderBy: {
            date: "asc"
        }

    })



    return (
        <>
            <Header />

            <div className="p-5 space-y-3">
                <h1 className="text-xl font-bold ">Agendamentos</h1>

                {/* Confirmados */}

                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger><h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
                            Confirmados
                        </h2>
                        </AccordionTrigger>
                        <AccordionContent>
                            {confirmedBookings.map(booking =>
                                <BookingItem
                                    key={booking.id}
                                    booking={booking}
                                />
                            )}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>


                {/* Finalizados */}

                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger><h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
                            Finalizados
                        </h2>
                        </AccordionTrigger>
                        <AccordionContent>
                            {concludedBookings.map(booking =>
                                <BookingItem
                                    key={booking.id}
                                    booking={booking}
                                />
                            )}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

            </div>
        </>
    );
}

export default bookings;