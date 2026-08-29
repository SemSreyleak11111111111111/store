
import { useState } from "react";
import { Menu, X } from "lucide-react";
import categories from "../data/categoryData";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold tracking-widest"
        >
          BxCxDx.
        </a>

        {/* ================= MENU BUTTON ================= */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center rounded-full p-2 transition hover:bg-white/10 hover:text-zinc-400"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={25} strokeWidth={1.8} />
            ) : (
              <Menu size={25} strokeWidth={1.8} />
            )}
          </button>

          {/* ================= DROPDOWN MENU ================= */}
          {menuOpen && (
            <div className="absolute right-0 top-12 w-56 overflow-hidden rounded-xl border border-white/10 bg-zinc-950 shadow-2xl">

              {/* Home */}
              <a
                href="/"
                onClick={() => setMenuOpen(false)}
                className="block px-5 py-3.5 text-sm transition hover:bg-white/10 hover:text-zinc-300"
              >
                Home
              </a>

              {/* Categories */}
              {categories.map((category) => (
                <a
                  key={category.slug}
                  href={`/#${category.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="block px-5 py-3.5 text-sm transition hover:bg-white/10 hover:text-zinc-300"
                >
                  {category.name.en}
                </a>
              ))}

              {/* About */}
              <a
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="block px-5 py-3.5 text-sm transition hover:bg-white/10 hover:text-zinc-300"
              >
                About
              </a>

            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
