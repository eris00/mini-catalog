
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import Toolbar from "./Toolbar";
import { useMemo, useState } from "react";

const ProductGrid = ({products, onAdd }) => {

  const navigate = useNavigate();
 
  const productOptions = [
    {value:"price-desc", label: "Price: High to Low"},
    {value:"price-asc", label: "Price: Low to High"},
    {value:"rating-desc", label: "Rating: High to Low"},
  ]

  const [searchQuery, setSearchQuery] = useState("");
  const [onlyFeatured, setIsOnlyFeatured] = useState(false);
  const [selectedOption, setSelectedOption] = useState(productOptions[0]);

  const onDetails = (productId) => {
    navigate(`/product-detail/${productId}`)
  }    
  
  const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchQuery.toLocaleLowerCase()));

  const sortedProducts = useMemo(() => {
    if (selectedOption.value === "price-desc") {
      return [...filteredProducts].sort((a, b) => b.price - a.price);
    } else if (selectedOption.value === "price-asc") {
      return [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (selectedOption.value === "rating-desc") {
      return [...filteredProducts].sort((a, b) => b.rating.rate - a.rating.rate);
    } else {
      return filteredProducts;
    }
  }, [filteredProducts, selectedOption]);

  const selectedProducts = onlyFeatured ? sortedProducts.filter(product => product.isFeatured) : sortedProducts;

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Toolbar 
        handleSearch={(e) => { setSearchQuery(e.target.value)} }
        handleCheck={(e) => { setIsOnlyFeatured(e.target.checked); }}
        selectedOption={selectedOption} setSelectedOption={setSelectedOption}
        productOptions={productOptions} 
      />
      <div className="flex w-2/3">
          { selectedProducts.length === 0 ? (
            <p className="w-full text-center mt-16 text-xl">No content</p>
          ) : (
            <>
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {selectedProducts.map(product => {
                  return (
                    <ProductCard 
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      price={product.price}
                      image={product.image}
                      isFeatured={product.isFeatured}
                      onAdd={() => onAdd(product)}
                      onDetails={onDetails}
                  />
                  )
                })}
              </section>
            </> 
          )}
            

      </div>

    </div>
  )
}

export default ProductGrid