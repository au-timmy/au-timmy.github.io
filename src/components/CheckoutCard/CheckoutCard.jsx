import React from "react";

const CheckoutCard = ({ item, removeItem, quantity, updateQuantity }) => {
  const increaseQuantity = () => {
    updateQuantity(item.id, quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity === 1) {
      removeItem(item.id);
    } else {
      updateQuantity(item.id, quantity - 1);
    }
  };

  return (
    <div className="flex items-center p-4 border-b">
      <img
        src={`/images/${item.image}`}
        alt={item.name}
        className="w-24 h-24 mr-4"
      />
      <div className="flex-1 flex flex-col justify-between h-full font-evolventa">
        <div>
          <p>
            <strong>Type: </strong> {item.category}
          </p>
          <p>
            <strong>Name:</strong> {item.name}
          </p>
          <p>
            <strong>Total Price:</strong> $
            {(item.price * quantity).toLocaleString("en", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
        <div className="flex items-center justify-start space-x-4 mt-4">
          <button
            onClick={decreaseQuantity}
            className="px-2 py-1 bg-red-500 text-white rounded-full cursor-pointer"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="px-2 py-1 bg-green-500 text-white rounded-full cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
