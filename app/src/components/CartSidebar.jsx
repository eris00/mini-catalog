import Button from "./Button";

const CartSidebar = ({ cart, onRemove, onChangeQuantity, onCheckout, isProcessing, items, total }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = items >= 3 ? subtotal * 0.1 : 0;

  console.log(cart);
  

  return (
    <aside className="w-80 bg-gray-500 shadow-lg p-4 flex flex-col sticky top-0 h-screen">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

      <div className="flex-1 overflow-y-auto">
        {cart.length === 0 ? (
          <p className="text-black">Cart is empty</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.price} €</p>
                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    onChange={(e) => onChangeQuantity(item.id, Number(e.target.value))}
                    className="border rounded px-2 py-1 w-16 mt-1"
                  />
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-400 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {cart.length > 0 && (
        <div className="border-t pt-4 space-y-1 text-sm mb-4 text-black">
          <div className="flex justify-between">
            <span>Items:</span>
            <span>{items}</span>
          </div>
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>{subtotal.toFixed(2)} €</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount:</span>
            <span>-{discount.toFixed(2)} €</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span>{total.toFixed(2)} €</span>
          </div>
        </div>
      )}

      <Button
        onClick={onCheckout}
        disabled={cart.length === 0 || isProcessing}
        className="mt-auto w-full"
        variant="primary"
      >
        {isProcessing ? "Processing..." : "Checkout"}
      </Button>
    </aside>
  );
};

export default CartSidebar;