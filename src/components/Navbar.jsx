import { useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import categories from "../data/categoryData";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Store Logo */}
        <a
          href="/"
          className="text-xl font-bold tracking-widest"
        >
         BxCxDx.
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="/"
            className="text-sm hover:text-zinc-400"
          >
            Home
          </a>

          {categories.map((category) => (
            <a
              key={category.slug}
              href={`/#${category.slug}`}
              className="text-sm hover:text-zinc-400"
            >
              {category.name}
            </a>
          ))}

          <a
            href="/about"
            className="text-sm hover:text-zinc-400"
          >
            About
          </a>

        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">

          {/* <button className="hover:text-zinc-400">
            <Search size={20} />
          </button> */}

          {/* <button className="hover:text-zinc-400">
            <ShoppingBag size={20} />
          </button> */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden hover:text-zinc-400"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">

          <div className="flex flex-col gap-5">

            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-sm hover:text-zinc-400"
            >
              Home
            </a>

            {categories.map((category) => (
              <a
                key={category.slug}
                href={`/#${category.slug}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm hover:text-zinc-400"
              >
                {category.name}
              </a>
            ))}

            <a
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-sm hover:text-zinc-400"
            >
              About
            </a>

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;