import { ShoppingBag } from "lucide-react";

function ProductCard({ product }) {
  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-900">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <button className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black opacity-0 transition group-hover:opacity-100">
          <ShoppingBag size={18} />
        </button>
      </div>

      <div className="mt-4">
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          {product.category}
        </p>

        <h3 className="mt-1 text-base font-medium">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-zinc-400">
          ${product.price}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;