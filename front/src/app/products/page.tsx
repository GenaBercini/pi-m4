import ProductCard from "@/components/Products/ProductCard";

export default async function Products() {
  const products: Product[] = await fetch(
    "https://api.escuelajs.co/api/v1/products"
  ).then((response) => response.json());
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard {...product} />
        ))}
      </div>
    </div>
  );
}
