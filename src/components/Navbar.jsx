import { useState } from "react";
import { Menu, X } from "lucide-react";
import categories from "../data/categoryData";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const isKhmer = language === "kh";

  const toggleLanguage = () => {
    setLanguage(isKhmer ? "en" : "kh");
  };

  return (
    <nav
  className={`relative border-b border-white/10 bg-black text-white ${
    isKhmer ? "khmer-font" : ""
  }`}
>
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
            className="text-sm transition hover:text-zinc-400"
          >
            {isKhmer ? "ទំព័រដើម" : "Home"}
          </a>

          {categories.map((category) => (
            <a
              key={category.slug}
              href={`/#${category.slug}`}
              className="text-sm transition hover:text-zinc-400"
            >
              {category.name[language]}
            </a>
          ))}

          <a
            href="/about"
            className="text-sm transition hover:text-zinc-400"
          >
            {isKhmer ? "អំពីយើង" : "About"}
          </a>

          {/* Language Toggle */}
          <button
  onClick={toggleLanguage}
  className="rounded-full border border-white/20 px-3 py-1.5 text-xs transition hover:border-white/50 hover:bg-white/10"
  aria-label="Change language"
>
  <span className={isKhmer ? "khmer-font" : ""}>
    {isKhmer ? "English" : "ខ្មែរ"}
  </span>
</button>

        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center gap-4 md:hidden">

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium transition hover:border-white/50 hover:bg-white/10"
            aria-label="Change language"
          >
            {isKhmer ? "EN" : "ខ្មែរ"}
          </button>

          {/* Mobile Menu Button */}
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

            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-sm transition hover:text-zinc-400"
            >
              {isKhmer ? "ទំព័រដើម" : "Home"}
            </a>

            {categories.map((category) => (
              <a
                key={category.slug}
                href={`/#${category.slug}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm transition hover:text-zinc-400"
              >
                {category.name[language]}
              </a>
            ))}

            <a
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-sm transition hover:text-zinc-400"
            >
              {isKhmer ? "អំពីយើង" : "About"}
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;