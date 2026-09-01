import products from "../data/products";
import ProductCard from "./ProductCard";
import categories from "../data/categoryData";

function ProductGrid() {
  const groupedProducts = products.reduce((groups, product) => {
    const category = product.category;

    if (!groups[category]) {
      groups[category] = [];
    }

    groups[category].push(product);

    return groups;
  }, {});

  return (
    <div className="space-y-16">
      {Object.entries(groupedProducts).map(
        ([categoryKey, categoryProducts]) => {
          // Find the category object to get the clean name
          const matchedCategory = categories.find(
            (cat) => cat.slug === categoryKey || cat.name === categoryKey
          );

          const slug = matchedCategory 
            ? matchedCategory.slug 
            : categoryKey.toLowerCase().trim().replace(/\s+/g, "-");

          // const displayName = matchedCategory 
          //   ? matchedCategory.name 
          //   : categoryKey;
          const displayName = matchedCategory
  ? matchedCategory.displayName
  : categoryKey;

          return (
            <section
              key={categoryKey}
              id={slug}
              className="scroll-mt-24"
            >
              <h3 className="mb-6 text-2xl font-bold tracking-wider">
                {displayName}
              </h3>

              {/* One horizontal row */}
              <div className="flex gap-4 overflow-x-auto pb-4">
                {categoryProducts.map((product) => (
                  <div
                    key={product.id}
                    className="w-[280px] shrink-0 sm:w-[320px]"
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </section>
          );
        }
      )}
    </div>
  );
}

export default ProductGrid;