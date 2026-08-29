import { ShoppingBag } from "lucide-react";

function ProductCard({ product }) {
  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden rounded bg-zinc-900">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <p className="text-sm uppercase tracking-widest text-zinc-500">CODE :
       <span className="ml-1"> {product.name}</span>
        </p>
        <h3 className="mt-1 text-sm font-medium">
          Size : <span className="ml-1">{product.size}</span>
        </h3>
        <p className="mt-2 text-sm text-zinc-400">
          ${product.price}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;