import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";

function Home() {
  return (
    <div className="min-h-screen bg-black">

      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            New Collection
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Simple.
            <br />
            Modern.
            <br />
            Yours.
          </h1>

          <p className="mt-6 max-w-xl text-zinc-400">
            Discover our latest collection of products designed
            for modern lifestyles.
          </p>

          <button className="mt-8 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-zinc-300">
            Shop Now
          </button>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-zinc-500">
              {/* Featured */}
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {/* Popular Products */}
            </h2>
          </div>

          <button className="hidden text-sm text-zinc-400 hover:text-white md:block">
            {/* View All → */}
          </button>
        </div>

        <ProductGrid />

      </section>

    </div>
  );
}

export default Home;