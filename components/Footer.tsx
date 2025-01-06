import { Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <p>© 2025. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="X (Twitter)">
            <Twitter className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
