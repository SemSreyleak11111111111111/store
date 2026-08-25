import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductGrid() {
  // Group products by category
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
        ([category, categoryProducts]) => (
          <section key={category}>
            <h3 className="mb-6 text-2xl font-bold uppercase tracking-wider">
              {category}
            </h3>

            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {categoryProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </section>
        )
      )}
    </div>
  );
}

export default ProductGrid;