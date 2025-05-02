import { useNavigate, Link } from "react-router-dom";
import React from "react";
import CheckoutCard from "./CheckoutCard/CheckoutCard";

function Header({
  cartItems,
  removeFromCart,
  quantities,
  updateQuantity,
  totalQty,
}) {
  const navigate = useNavigate();

  return (
    <div className="navbar h-25 bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li>
              <a>About Us</a>
            </li>
            <li>
              <details className="relative">
                <summary>Products</summary>
                <ul className="absolute left-1/2 transform -translate-x-1/2 mt-4 bg-base-100 p-8 rounded-box shadow w-[1100px] h-[400px] grid grid-cols-3 gap-10 z-20">
                  <li className="flex justify-center items-center">
                    <Link to={"/weapons"}>
                      <img
                        src="/images/Weapons.png"
                        alt="Weapons"
                        className="w-80 h-80 object-contain rounded-md hover:shadow-[#dfb800] hover:shadow-lg"
                      />
                    </Link>
                  </li>
                  <li className="flex justify-center items-center">
                    <img
                      src="/images/Armor.png"
                      alt="Armor"
                      className="w-80 h-80 object-contain rounded-md hover:shadow-[#dfb800] hover:shadow-lg"
                    />
                  </li>
                  <li className="flex justify-center items-center">
                    <img
                      src="/images/Accessories.png"
                      alt="Accessories"
                      className="w-80 h-80 object-contain rounded-md hover:shadow-[#dfb800] hover:shadow-lg"
                    />
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Store Locations</a>
            </li>
          </ul>
        </div>
        <a>
          <button
            className="btn btn-ghost text-3xl bg-transparent outline-transparent hover:btn-color[#FFFFFF] font-evolventa border-none"
            onClick={() => navigate("/")}
          >
            Guimbo's
          </button>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="mx-10">
            <a className="text-2xl font-evolventa">About Us</a>
          </li>
          <li className="mx-10">
            <details className="relative">
              <summary className="text-2xl font-evolventa">Products</summary>
              <ul className="absolute left-1/2 transform -translate-x-1/2 mt-4 bg-base-100 p-8 rounded-box shadow w-[1100px] h-[400px] grid grid-cols-3 gap-10 z-20">
                <li className="flex justify-center items-center">
                  <img
                    src="/images/Weapons.png"
                    alt="Weapons"
                    onClick={() => navigate("/weapons")}
                    className="w-80 h-80 object-contain rounded-md hover:shadow-[#dfb800] hover:shadow-lg"
                  />
                </li>
                <li className="flex justify-center items-center">
                  <img
                    src="/images/Armor.png"
                    alt="Armor"
                    onClick={() => navigate("/armor")}
                    className="w-80 h-80 object-contain rounded-md hover:shadow-[#dfb800] hover:shadow-lg"
                  />
                </li>
                <li className="flex justify-center items-center">
                  <img
                    src="/images/Accessories.png"
                    alt="Accessories"
                    onClick={() => navigate("/accessories")}
                    className="w-80 h-80 object-contain rounded-md hover:shadow-[#dfb800] hover:shadow-lg"
                  />
                </li>
              </ul>
            </details>
          </li>
          <li className="mx-10">
            <a className="text-2xl font-evolventa">Store Locations</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div>
          <p className="font-evolventa font-bold pr-5">
            {totalQty > 0 ? `(${totalQty})` : ""}
          </p>
        </div>
        <details className="relative dropdown-end">
          <summary
            role="button"
            className="cursor-pointer marker-hidden list-none"
          >
            <img
              src="/images/shopping-basket.png"
              alt="Cart"
              className="w-12 h-12"
            />
          </summary>
          <div className="absolute right-0 mt-3 w-80 h-200 bg-base-100 border-2 border-solid shadow z-40 overflow-y-auto">
            {cartItems.length > 0 ? (
              <>
                <div className="p-4 text-center border-b">
                  <button
                    onClick={() => navigate("/checkout")}
                    className="btn content-end bg-gradient-to-r from-yellow-500 to-gray-500 w-full text-white overflow-y-auto"
                  >
                    Checkout
                  </button>
                </div>
                {cartItems.map((item) => (
                  <CheckoutCard
                    key={item.id}
                    item={item}
                    removeItem={removeFromCart}
                    quantity={quantities[item.id] || 1}
                    updateQuantity={updateQuantity}
                  />
                ))}
              </>
            ) : (
              <div className="text-center pt-10">
                <h1 className="text-2xl font-evolventa">
                  <b>Your basket is empty!</b>
                </h1>
              </div>
            )}
          </div>
        </details>
      </div>
    </div>
  );
}

export default Header;
