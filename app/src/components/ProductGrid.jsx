import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const ProductGrid = ({products}) => {

  const navigate = useNavigate()


  const onAdd = () => {
    console.log("onAdd");
  }

  const onDetails = (productId) => {
    navigate(`/product-detail/${productId}`)
    
  }  

  console.log(products);
  

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex w-2/3">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {
            products && products.map(product => {
              return (
                <ProductCard 
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                isFeatured={product.isFeatured}
                onAdd={onAdd}
                onDetails={onDetails}
              />
              )
            })
          }
      </section>
      </div>

    </div>
  )
}

export default ProductGrid