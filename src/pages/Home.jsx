import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";

// function Home() {

//   const [isKhmer, setIsKhmer] = useState(false);

//   const toggleLanguage = () => {
//     setIsKhmer((prev) => !prev);
//   };
function Home() {
  const [isKhmer, setIsKhmer] = useState(false);

  const toggleLanguage = () => {
    setIsKhmer(!isKhmer);
  };


  return (
    <div
      className={`min-h-screen bg-black text-white ${isKhmer ? "khmer-font" : ""
        }`}
    >
      <Navbar
        isKhmer={isKhmer}
        toggleLanguage={toggleLanguage}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">

        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-24">

          <div className="w-full">

            {/* Small label */}
            <div className="mb-8 flex items-center gap-3">

              <span className="h-px w-10 bg-white" />

              <span className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-500">
                {isKhmer
                  ? "ស្ទូឌីយោរចនាច្នៃប្រឌិត"
                  : "Creative Design Studio"}
              </span>

            </div>

            {/* Main heading */}
            <h1 className="max-w-5xl text-xl font-bold leading-tight tracking-tight sm:text-6xl md:text-5xl sm:leading-[0.95]">
              {isKhmer ? (
                <span className="block break-normal">
                  យើងបង្កើត <span className="text-zinc-500">ការរចនាដែល</span> លេចធ្លោ។
                </span>
              ) : (
                <>
                  We create
                  <br />
                  <span className="text-zinc-500">
                    designs that
                  </span>
                  <br />
                  <span>
                    stand out.
                  </span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg">
              {isKhmer
                ? "ស្វែងយល់ពីស្នាដៃច្នៃប្រឌិតរបស់យើង រួមមានការបង្កើតម៉ាកយីហោ អត្តសញ្ញាណរូបភាព ផ្ទាំងផ្សព្វផ្សាយ និងការរចនាឌីជីថល ដែលធ្វើឱ្យគំនិតរបស់អ្នកកាន់តែលេចធ្លោ។"
                : "Explore our collection of creative work, branding, visual identities, posters, and digital designs made to make ideas impossible to ignore."}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">

              <a
                href="#projects"
                className="group flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                {isKhmer
                  ? "មើលស្នាដៃរបស់យើង"
                  : "Explore Our Work"}

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#about"
                className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
              >
                {isKhmer
                  ? "អំពីយើង"
                  : "About Us"}
              </a>

            </div>

            {/* Stats */}
            <div className="mt-20 grid max-w-2xl grid-cols-3 border-y border-white/10 py-6">

              <div>
                <p className="text-2xl font-bold md:text-3xl">
                  100+
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                  {isKhmer ? "ការរចនា" : "Designs"}
                </p>
              </div>

              <div className="border-l border-white/10 pl-6">

                <p className="text-2xl font-bold md:text-3xl">
                  20+
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                  {isKhmer ? "គម្រោង" : "Projects"}
                </p>

              </div>

              <div className="border-l border-white/10 pl-6">

                <p className="text-2xl font-bold md:text-3xl">
                  ∞
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                  {isKhmer ? "គំនិត" : "Ideas"}
                </p>

              </div>

            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-zinc-600 md:flex">

          <span className="text-[10px] uppercase tracking-[0.3em]">
            {isKhmer
              ? "អូសទៅក្រោមដើម្បីមើល"
              : "Scroll to explore"}
          </span>

          <div className="h-10 w-px bg-gradient-to-b from-zinc-500 to-transparent" />

        </div>

      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 pb-32"
      >

        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>

            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-600">
              {isKhmer
                ? "ស្នាដៃដែលបានជ្រើសរើស"
                : "Selected Work"}
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              {isKhmer
                ? "ការរចនារបស់យើង"
                : "Our Designs"}
            </h2>

          </div>

          <p className="max-w-md text-sm leading-6 text-zinc-500">
            {isKhmer
              ? "ស្នាដៃរចនាដែលបង្កើតឡើងដោយផ្តោតលើភាពសាមញ្ញ ភាពច្នៃប្រឌិត និងការយកចិត្តទុកដាក់លើរាល់ព័ត៌មានលម្អិត។"
              : "A collection of visual designs created with simplicity, creativity, and attention to detail."}
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

              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-600">
                {isKhmer ? "អំពីយើង" : "About"}
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">

                {isKhmer ? (
                  <>
                    ការរចនាល្អ
                    <br />

                    <span className="text-zinc-500">
                      បង្កើតឥទ្ធិពល។
                    </span>
                  </>
                ) : (
                  <>
                    Good design
                    <br />

                    <span className="text-zinc-500">
                      makes an impact.
                    </span>
                  </>
                )}

              </h2>

            </div>

            <div>

              <p className="leading-7 text-zinc-400">
                {isKhmer
                  ? "យើងជឿថា ការរចនាមិនគួរត្រឹមតែស្អាតប៉ុណ្ណោះទេ។ វាគួរតែអាចបង្ហាញគំនិត បង្កើតអារម្មណ៍ និងជួយឱ្យម៉ាកយីហោកាន់តែងាយចងចាំ។"
                  : "We believe design should do more than look good. It should communicate an idea, create emotion, and help a brand become memorable."}
              </p>

              <p className="mt-5 leading-7 text-zinc-500">
                {isKhmer
                  ? "ចាប់ពីការបង្កើតម៉ាកយីហោ និងផ្ទាំងផ្សព្វផ្សាយ រហូតដល់រូបភាពឌីជីថល គ្រប់គម្រោងត្រូវបានបង្កើតឡើងដោយមានគោលបំណង និងការយកចិត្តទុកដាក់លើព័ត៌មានលម្អិត។"
                  : "From branding and posters to digital visuals, every project is created with purpose and attention to detail."}
              </p>

              <a
                href="#projects"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-zinc-400"
              >
                {isKhmer
                  ? "មើលស្នាដៃរបស់យើង"
                  : "View our work"}

                <span>→</span>
              </a>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;