import Tabs from "../tabs/tab";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { Phone } from "lucide-react";

function Header() {
  return (
    <div className="flex justify-between py-7">
      <div>
        <a href="/" className="hover:opacity-80 transition-opacity">
          <img
            src="/logoo.svg"
            alt="logo"
            className="h-[100px] w-auto dark:brightness-0 dark:invert transition-all duration-300"
          />
        </a>
      </div>
      <Tabs />
      <div className="flex justify-around items-center gap-4">
        <ThemeToggle />
        <a
          href="tel:08010004457"
          aria-label="Call Me"
          className="text-text-main dark:text-text-main hover:text-primary transition-colors"
        >
          <Phone className="w-6 h-6 md:w-8 md:h-8" />
        </a>
      </div>
    </div>
  );
}

export default Header;
