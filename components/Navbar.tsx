"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { Luggage } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-background/80 backdrop-blur-sm z-10">
      <div className="flex items-center">
        <Luggage />
      </div>
      <div className="hidden md:flex space-x-4">
        <Button variant="ghost" onClick={() => scrollTo("home")}>
          Home
        </Button>
        <Button variant="ghost" onClick={() => scrollTo("about")}>
          About
        </Button>
        <Button variant="ghost" onClick={() => scrollTo("contact")}>
          Contact
        </Button>
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col space-y-4 mt-4">
            <Button variant="ghost" onClick={() => scrollTo("home")}>
              Home
            </Button>
            <Button variant="ghost" onClick={() => scrollTo("about")}>
              About
            </Button>
            <Button variant="ghost" onClick={() => scrollTo("contact")}>
              Contact
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
