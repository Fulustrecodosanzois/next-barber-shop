import Image from "next/image";
import { Button } from "./ui/button";
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { signIn } from "next-auth/react";

const SignInDialog = () => {

    const handleLoginWhithGoogleClick = () => signIn("google")

    return (
        <>

            <DialogHeader>
                <DialogTitle>Faça login na plataforma</DialogTitle>
                <DialogDescription>
                    Conecte-se usando uma plataforma do Google
                </DialogDescription>
            </DialogHeader>
            <Button variant="outline" className="gap-1 font-bold" onClick={handleLoginWhithGoogleClick}>
                <Image
                    src="/google.svg"
                    alt="Login Google"
                    width={18}
                    height={18}

                />
                Google
            </Button>

        </>

    );
}

export default SignInDialog;