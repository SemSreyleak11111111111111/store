import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      {/* Selected Work */}
      <section
        id="projects"
        className="mx-auto max-w-7xl px-2 pb-12 pt-12"
      >
        {/* Section Heading */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
           <p className="mb-3 text-xs tracking-[0.3em] text-zinc-600 lowercase">
 welcome here.
</p>

            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
             something found below.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-zinc-500">
           provided what you’re spend.
          </p>

        </div>

        <ProductGrid />
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-white/10"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div>
              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                CAMBODIA
                <div className="h-2" />
                <span className="text-zinc-500">
                  made.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-sm text-zinc-500">
                Find us. Everywhere in your pocket, Cambodia.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;