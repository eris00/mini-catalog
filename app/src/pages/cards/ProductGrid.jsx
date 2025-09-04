import { useEffect } from 'react'
import { getAllProducts } from '../../api/services/products'

const ProductGrid = () => {

  useEffect(() => {
    getAllProducts().then(data => {
      console.log(data);
      
    })
  }, [])

  return (
    <div>Cards</div>
  )
}

export default ProductGrid