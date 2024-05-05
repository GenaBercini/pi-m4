import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  id,
  images,
  title,
  price,
  description,
}: Product) {
  const maxLengthDescription = 100;
  const maxLengthTitle = 25;
  const shortDescription =
    description.length > maxLengthDescription
      ? `${description.slice(0, maxLengthDescription)}...`
      : description;
  return (
    <Link href="/products/[id].js" as={`/products/${id}`}>
      <div key={id} className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="flex">
          <Image
            height={50}
            width={50}
            className="w-full"
            src={images[0]}
            alt={title}
          />
          <Image
            height={50}
            width={50}
            className="w-full"
            src={images[0]}
            alt={title}
          />
          <Image
            height={50}
            width={50}
            className="w-full"
            src={images[0]}
            alt={title}
          />
        </div>
        <div className="px-6 py-4">
          <div
            className={`font-bold mb-2 ${
              title.length > maxLengthTitle ? "text-sm" : "text-lg"
            }`}
          >
            {title}
          </div>
          <p className="text-gray-700 text-base">{shortDescription}</p>
          <p className="text-gray-900 font-bold text-xl mt-2">${price}</p>
        </div>
      </div>
    </Link>
  );
}
