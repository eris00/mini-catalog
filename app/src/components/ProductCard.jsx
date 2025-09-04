import Card from "./Card"
import { Plus } from 'lucide-react';

const ProductCard = ({id, title, price, image, isFeatured, onAdd, onDetails}) => {  
  
  console.log(isFeatured);
  

  return (
    <Card>
      <article className="flex flex-col justify-between h-full border rounded-lg shadow-md p-0 bg-white">
        <div>
          {isFeatured && (
            <span className="text-xs font-medium text-white bg-blue-500 px-2 py-1 rounded">
              Recommended
            </span>
          )}
          <img 
            src={image} 
            alt={`image of ${title}`} 
            className="w-full h-56 object-contain bg-gray-100 rounded-md"
          />
        </div>
        <div className="mt-3">
          <h3 className="text-black text-lg font-semibold truncate" title={title}>
            {title}
          </h3>
          <p className="text-gray-600 font-medium">{price} €</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button 
            onClick={onAdd} 
            className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <Plus size={24} color="black" />
          </button>
          <button 
            onClick={() => onDetails(id)} 
            className="text-blue-800 hover:underline"
          >
            See more
          </button>
        </div>
      </article>
    </Card>
  )
}

export default ProductCard