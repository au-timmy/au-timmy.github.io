import React from "react";

const InvoiceTabler = ({ item, quantity }) => {
  return (
    <div className="items-center p-4">
      <div>
        <table className="table content-evenly font-evolventa">
          <thead>
            <tr className="text-black text-md">
              <th className="w-1/8">Item Image</th>
              <th className="w-1/8">Equipment Name</th>
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
              <td>
                <strong>{quantity}</strong>
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

export default InvoiceTabler;
