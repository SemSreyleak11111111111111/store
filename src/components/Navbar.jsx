import { useState } from "react";
import { Menu, X } from "lucide-react";
import categories from "../data/categoryData";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // <nav className="relative border-b border-white/10 bg-black text-white">
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black text-white">
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

          {/* Home */}
          <a
            href="/"
            className="text-sm transition hover:text-zinc-400"
          >
            Home
          </a>

          {/* Categories */}
          {categories.map((category) => (
            <a
              key={category.slug}
              href={`/#${category.slug}`}
              className="text-sm transition hover:text-zinc-400"
            >
              {category.name.en}
            </a>
          ))}

          {/* About */}
          <a
            href="/about"
            className="text-sm transition hover:text-zinc-400"
          >
            About
          </a>

        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center gap-4 md:hidden">

          {/* Mobile Menu Toggle */}
          <button
            className="transition hover:text-zinc-400"
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

            {/* Home */}
            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-sm transition hover:text-zinc-400"
            >
              Home
            </a>

            {/* Categories */}
            {categories.map((category) => (
              <a
                key={category.slug}
                href={`/#${category.slug}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm transition hover:text-zinc-400"
              >
                {category.name.en}
              </a>
            ))}

            {/* About */}
            <a
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-sm transition hover:text-zinc-400"
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