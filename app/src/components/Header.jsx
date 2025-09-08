import { ShoppingCart } from "lucide-react";

const Header = ({items, total}) => {
  return (
    <header className='flex justify-between w-full bg-gray-500 h-22'>
      <div className='flex justify-start items-center h-full ml-5'>
        <h1 className='text-3xl font-bold text-white'>Mini Catalog</h1>
      </div>

      <div className="flex gap-6 items-center mr-16">
        <div className="relative">
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {items}
          </span>
          <ShoppingCart className="h-8 w-8 text-white" />
        </div>
        <span className="text-lg font-semibold">Total: {total.toFixed(2)} €</span>
</div>
    </header>
  )
}

export default Header