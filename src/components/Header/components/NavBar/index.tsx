"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  PercentIcon,
} from "lucide-react";

import { SheetHeader } from "../../../ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/avatar";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "../../../ui/button";

const NavBar = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <>
      <SheetHeader className="text-left text-lg font-semibold">
        Menu
      </SheetHeader>

      {status === "authenticated" && data?.user && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2 py-4">
            <Avatar>
              <AvatarFallback>
                {data.user.name?.[0].toUpperCase()}
              </AvatarFallback>

              {data.user.image && <AvatarImage src={data.user.image} />}
            </Avatar>

            <div className="flex flex-col">
              <p className="font-medium">{data.user.name}</p>
              <p className="text-sm opacity-75">Boas compras!</p>
            </div>
          </div>

          <Separator />
        </div>
      )}

      <div className="mt-2 h-[100%] flex-col gap-2">
        <Button variant="outline" className="w-full justify-start gap-2">
          <HomeIcon size={16} />
          Início
        </Button>

        <Button variant="outline" className="w-full justify-start gap-2">
          <PercentIcon size={16} />
          Ofertas
        </Button>

        <Button variant="outline" className="w-full justify-start gap-2">
          <ListOrderedIcon size={16} />
          Catálogo
        </Button>

        {status === "unauthenticated" ? (
          <Button
            onClick={handleLoginClick}
            variant="outline"
            className="w-full justify-start gap-2"
          >
            <LogInIcon size={16} />
            Fazer Login
          </Button>
        ) : (
          <Button
            onClick={handleLogoutClick}
            variant="outline"
            className="w-full justify-start gap-2"
          >
            <LogOutIcon size={16} />
            Fazer Logout
          </Button>
        )}
      </div>
    </>
  );
};

export default NavBar;
