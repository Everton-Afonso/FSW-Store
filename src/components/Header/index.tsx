"use client";

import { MenuIcon, ShoppingCartIcon } from "lucide-react";

import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

import NavBar from "./components/NavBar";
import Link from "next/link";

const Header = () => {
  return (
    <Card className="fixed top-0 z-[1]  flex w-full items-center justify-between rounded-none p-[1.875rem] shadow-md">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <NavBar />
        </SheetContent>
      </Sheet>

      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="text-primary">FSW</span> Store
        </h1>
      </Link>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
