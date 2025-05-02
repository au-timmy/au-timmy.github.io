import React from "react";

const FullCheckoutCard = ({ item, removeItem, quantity, updateQuantity }) => {
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
    <div className="items-center p-4">
      <div>
        <table className="table content-evenly font-evolventa">
          <thead>
            <tr className="text-black text-md">
              <th className="w-1/8">Item Image</th>
              <th className="w-1/8">Equipment Name</th>
              <th className="w-1/8">Rarity</th>
              <th className="w-1/8">Element</th>
              <th className="w-1/8">Type</th>
              <th className="w-1/8">Rating</th>
              <th className="w-1/8">Quantity</th>
              <th className="w-1/8">Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-base-300">
              <td>
                <img
                  src={`/images/${item.image}`}
                  alt={item.name}
                  className="w-24 h-24"
                />
              </td>
              <td>
                {item.name}
                <p className="opacity-50">ID: {item.id}</p>
              </td>
              <td
                className={
                  item.rarity === "Uncommon"
                    ? "text-green-500"
                    : item.rarity === "Rare"
                    ? "text-blue-500"
                    : item.rarity === "Epic"
                    ? "text-purple-500"
                    : item.rarity === "Legendary"
                    ? "text-yellow-500"
                    : item.rarity === "Mythic"
                    ? "text-pink-500"
                    : ""
                }
              >
                {item.rarity}
              </td>
              <td>{item.element}</td>
              <td>{item.category}</td>
              <td>{item.rating.toFixed(1)} / 5.0</td>
              <td>
                <div className="space-x-4">
                  <button
                    onClick={decreaseQuantity}
                    className="py-1 text-lg rounded-full cursor-pointer"
                  >
                    -
                  </button>
                  <span>
                    <strong>{quantity}</strong>
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="py-1 text-lg rounded-full cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </td>
              <td>
                $
                {(item.price * quantity).toLocaleString("en", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FullCheckoutCard;
