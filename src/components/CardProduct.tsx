import { Link } from 'react-router-dom'
import type { Product } from "../schemas/productSchema";


type CardProductProps = {
  product: Product;
  userId: number;
};

export const CardProduct: React.FC<CardProductProps> = ({ product, userId }) => {
  const truncateDescription = (description: string, maxLength: number): string => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.substring(0, maxLength) + '...';
  };

  // Aplica o truncamento com um limite de 50 caracteres
  const shortDescription = truncateDescription(product.description ?? '', 105);
  const shortTitle = truncateDescription(product.title, 30);
  
  return (
    <div>
      
        <div key={product.id} className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
          <h2 className="text-lg font-semibold">{shortTitle}</h2>
          <p className="text-black-700">${product.price}</p>
          <p className="text-gray-500 mt-2">{shortDescription}</p>
          <Link
            to={`/${userId}/products/${product.id}`}
            className="mt-4 inline-block text-white px-4 py-2 rounded"
          >
            View Details
          </Link>
        </div>
    </div>
  )
}