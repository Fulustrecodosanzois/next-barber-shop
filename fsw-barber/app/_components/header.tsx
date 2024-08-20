import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import SidebarSheet from "./sidebar-sheet";

const Header = () => {
    return (
        <Card>
            <CardContent className="justify-between flex flex-row items-center p-5">
                <Image src="/logo.png" alt="FSW Barber" width={120} height={18} />

                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SidebarSheet/>
                </Sheet>
            </CardContent>
        </Card>


    );
}

export default Header