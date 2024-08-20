import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
// import { Avatar, AvatarImage } from "./ui/avatar";
import { quickSearchOptions } from "../_constants/search";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

const SidebarSheet = () => {
    return (

        <SheetContent>
            <SheetHeader className="overflow-y-auto">
                <SheetTitle className="text-left"> Menu</SheetTitle>
            </SheetHeader>

            <div className="flex items-center gap-3 border-b border-solid py-5">
                <h2 className="font-bold">Olá, Faça seu login</h2>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="icon">
                            <LogOutIcon />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[90%]">
                        <DialogHeader>
                            <DialogTitle>Faça login na plataforma</DialogTitle>
                            <DialogDescription>
                                Conecte-se usando uma plataforma do Google
                            </DialogDescription>
                        </DialogHeader>
                        <Button variant="outline" className="gap-1 font-bold">
                            <Image 
                            src="/google.svg"
                            alt="Login Google"
                            width={18}
                            height={18}
                        
                            />
                            Google
                        </Button>
                    </DialogContent>
                </Dialog>








                {/* <Avatar>
                    <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>

                <div>
                    <p className="font-bold">Fulustreco Dos Anzois</p>
                    <p className="text-xs">Fulus@fulus.com</p>

                </div> */}
            </div>

            <div className="flex flex-col gap-4 border-b border-solid py-5">
                <SheetClose asChild>
                    <Button className="justify-start gap-2" variant="ghost" asChild>
                        <Link href="/">
                            <HomeIcon size={18} />
                            Inicio
                        </Link>
                    </Button>
                </SheetClose>

                <Button className="justify-start gap-2" variant="ghost">
                    <CalendarIcon size={18} />
                    Agendamentos

                </Button>
            </div>

            <div className="flex flex-col gap-4 border-b border-solid py-5">
                {quickSearchOptions.map((option) => (
                    <Button className="justify-start gap-2" variant="ghost" key={option.title}>
                        <Image
                            alt={option.title}
                            src={option.imageUrl}
                            height={18}
                            width={18}
                        />
                        {option.title}
                    </Button>
                ))}
            </div>

            <div className="flex flex-col gap-4 border-b border-solid py-5">
                <Button variant="ghost" className="justify-start gap-2">
                    <LogOutIcon size={18} />
                    Sair da conta
                </Button>
            </div>
        </SheetContent>

    );
}

export default SidebarSheet;