import { Search, ShoppingBag, Menu } from "lucide-react";

import logo from "../data/logo";
import clothes from "../data/clothes";
import standSign from "../data/standSign";

function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-black">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Store Logo */}
        <a
          href="/"
          className="text-xl font-bold tracking-widest"
        >
          STORE.
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          {/* Home */}
          <a
            href="/"
            className="text-sm hover:text-zinc-400"
          >
            Home
          </a>

          {/* Clothes */}
          {/* <a
            href="/clothes"
            className="text-sm hover:text-zinc-400"
          >
            Clothes
          </a> */}

          {/* Logo */}
          {/* <a
            href="/logo"
            className="text-sm hover:text-zinc-400"
          >
            Logo
          </a> */}

          {/* Stand Sign */}
          <a
            href="/stand-sign"
            className="text-sm hover:text-zinc-400"
          >
            Stand Sign
          </a>

          {/* About */}
          <a
            href="/about"
            className="text-sm hover:text-zinc-400"
          >
            About
          </a>

        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button>
            <Search size={20} />
          </button>

          <button>
            <ShoppingBag size={20} />
          </button>

          <button className="md:hidden">
            <Menu size={20} />
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;