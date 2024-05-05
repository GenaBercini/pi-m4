import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";
import { ReadonlyURLSearchParams } from "next/navigation";

export default async function ProductDetail({
  params,
}: {
  params: Params;
  searchParams: ReadonlyURLSearchParams;
}) {
  const product: Product = await fetch(
    `https://api.escuelajs.co/api/v1/products/${params.id}`
  ).then((response) => response.json());
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {product.title ? (
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="relative md:flex-shrink-0">
              <Link
                href="/products"
                className="absolute bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                X
              </Link>
              <img
                className="h-48 w-full object-cover md:w-48"
                src={product.images[0]}
                alt={product.title}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {product.category?.name}
              </div>
              <h2 className="text-2xl text-gray-800 font-bold">
                {product.title}
              </h2>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <div className="mt-4">
                <span className="text-gray-600">Precio:</span>
                <span className="text-gray-800 font-semibold ml-2">
                  ${product.price}
                </span>
              </div>
              <div className="mt-4">
                <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-md mx-auto mt-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md shadow-md flex items-center">
          <Link href="/products">
            <svg
              className="w-6 h-6 mr-2 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </Link>
          <p className="text-sm">Error</p>
        </div>
      )}
    </div>
  );
}
