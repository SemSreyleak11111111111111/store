import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

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
        <Footer />

      </section>

    </div>
  );
}

export default Home;