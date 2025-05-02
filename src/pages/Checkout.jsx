import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import "../App.css";
import FullCheckoutCard from "../components/CheckoutCard/FullCheckoutCard";

const Checkout = ({
  cartItems,
  removeFromCart,
  quantities,
  updateQuantity,
  totalQty,
  cartClearer,
}) => {
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => {
    const qty = quantities[item.id] || 1;
    return acc + item.price * qty;
  }, 0);
  const taxRate = 0.06;
  const taxAmount = totalPrice * taxRate;
  const totalWithTax = totalPrice + taxAmount;

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const streetAddressRef = useRef();
  const cityRef = useRef();
  const liveStateRef = useRef();
  const zipcodeRef = useRef();
  const countryRef = useRef();
  const phoneNumRef = useRef();
  const shipMethodRef = useRef();

  const invoiceSubmit = () => {
    const invoiceData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      streetAddress: streetAddressRef.current.value,
      city: cityRef.current.value,
      liveState: liveStateRef.current.value,
      zipcode: zipcodeRef.current.value,
      country: countryRef.current.value,
      phoneNum: phoneNumRef.current.value,
      shipMethod: shipMethodRef.current.value,
      totalPrice: totalPrice,
      taxAmount: taxAmount,
      totalWithTax: totalWithTax,
      cartItems: cartItems,
      quantities: quantities,
    };
    navigate("/invoice", { state: invoiceData });
    cartClearer();
  };

  return (
    <>
      <div className="mb-10">
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-3 ml-20 mr-20 mt-10">
            <div className="col-span-3">
              <h1 className="text-5xl font-evolventa ml-15">
                Your Basket o' Goodies
              </h1>
            </div>
            <div className="pl-10 pt-10 col-span-2">
              {cartItems.map((item) => (
                <FullCheckoutCard
                  key={item.id}
                  item={item}
                  removeItem={removeFromCart}
                  quantity={quantities[item.id] || 1}
                  updateQuantity={updateQuantity}
                />
              ))}
            </div>
            <div className="bg-gray-300 pl-10 pr-10 pt-10 rounded col-span-1 font-evolventa">
              <h1 className="text-3xl mb-3">
                Billing Address and Shipping Address
              </h1>
              <div className="grid grid-cols-3 gap-2">
                <fieldset className="fieldset col-span-2">
                  <legend className="fieldset-legend text-lg">
                    First Name
                  </legend>
                  <input
                    type="text"
                    className="input"
                    placeholder="Given name o'graceful lord/lady."
                    ref={firstNameRef}
                  />
                </fieldset>
                <fieldset className="fieldset col-span-2">
                  <legend className="fieldset-legend text-lg">Last Name</legend>
                  <input
                    type="text"
                    className="input"
                    placeholder="Surname name o'graceful lord/lady."
                    ref={lastNameRef}
                  />
                </fieldset>
                <fieldset className="fieldset col-span-2">
                  <legend className="fieldset-legend text-lg">
                    Street Address
                  </legend>
                  <input
                    type="text"
                    className="input"
                    placeholder="Whermst is thou street?"
                    ref={streetAddressRef}
                  />
                </fieldset>

                <fieldset className="fieldset col-span-1">
                  <legend className="fieldset-legend text-lg">City</legend>
                  <input
                    type="text"
                    className="input"
                    placeholder="What art thou city?"
                    ref={cityRef}
                  />
                </fieldset>

                <fieldset className="fieldset col-span-2">
                  <legend className="fieldset-legend text-lg">State</legend>
                  <input
                    type="text"
                    className="input"
                    placeholder="Whermst is thou state?"
                    ref={liveStateRef}
                  />
                </fieldset>

                <fieldset className="fieldset col-span-1  ">
                  <legend className="fieldset-legend text-lg">Zip Code</legend>
                  <input
                    type="number"
                    className="input"
                    placeholder="Your territory code?"
                    ref={zipcodeRef}
                  />
                </fieldset>

                <fieldset className="fieldset col-span-2">
                  <legend className="fieldset-legend text-lg">Country</legend>
                  <input
                    type="text"
                    class="input"
                    placeholder="Upon which Country are you in?"
                    list="Common Countries"
                    ref={countryRef}
                  />
                  <datalist id="Common Countries">
                    <option value="United States"></option>
                    <option value="China"></option>
                    <option value="Germany"></option>
                    <option value="Japan"></option>
                    <option value="United Kingdom"></option>
                  </datalist>
                </fieldset>

                <fieldset className="fieldset col-span-3 border-b pb-5">
                  <legend className="fieldset-legend text-lg">
                    Phone Number
                  </legend>
                  <input
                    type="tel"
                    className="input"
                    placeholder="What is thou's numbers of contact?"
                    ref={phoneNumRef}
                  />
                </fieldset>

                <h1 className="text-3xl mt-5 mb-3 col-span-2">
                  Payment Information{" "}
                </h1>

                <legend className="fieldset-legend text-lg col-span-3">
                  Payment Method
                  <select class="select">
                    <option disabled selected>
                      Pick your Payment Method
                    </option>
                    <option>Credit Card</option>
                    <option>Berico Funds</option>
                    <option>Aureon Coin</option>
                  </select>
                </legend>

                <fieldset className="fieldset col-span-2">
                  <legend className="fieldset-legend text-lg">
                    Name on Card:
                  </legend>
                  <input
                    type="text"
                    className="input"
                    placeholder="Your full name on le card. "
                  />
                </fieldset>

                <fieldset className="fieldset col-span-3">
                  <legend className="fieldset-legend text-lg">
                    Card Number:
                  </legend>
                  <input
                    type="password"
                    className="input"
                    maxLength={16}
                    placeholder="Le numbers on le card please."
                  />
                </fieldset>

                <fieldset className="fieldset col-span-1 mb-5">
                  <legend className="fieldset-legend text-lg">
                    Expiration Date:
                  </legend>
                  <input type="number" className="input" placeholder="MM" />
                </fieldset>

                <fieldset className="fieldset col-span-1 mt-10">
                  <input type="number" className="input" placeholder="YYYY" />
                </fieldset>

                <fieldset className="fieldset col-span-1">
                  <legend className="fieldset-legend text-lg">CVV:</legend>
                  <input type="number" className="input" placeholder="000" />
                </fieldset>

                <h1 className="text-3xl pt-5 mb-3 border-t col-span-3">
                  Shipping Method{" "}
                </h1>

                <legend className="fieldset-legend text-lg col-span-3 pb-5">
                  <select ref={shipMethodRef} class="select">
                    <option disabled selected>
                      Pick your Shipping Method
                    </option>
                    <option>One-Week Horse Caravan</option>
                    <option>Three-Day Owl Drop</option>
                    <option>One-Day Eagle Drop</option>
                    <option>Same-Day Teleportation</option>
                  </select>
                </legend>

                <h1 className="text-3xl mb-3 col-span-3 pt-5 border-t">
                  Total Costs:{" "}
                </h1>
                <div className="flex justify-between col-span-3 text-lg">
                  <h1>{`(${totalQty})`} Item(s):</h1>
                  <h1>
                    ${" "}
                    {(totalPrice * 1).toLocaleString("en", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </h1>
                </div>

                <div className="flex justify-between col-span-3 text-lg">
                  <h1>Taxes (6%):</h1>
                  <h1>
                    ${" "}
                    {taxAmount.toLocaleString("en", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </h1>
                </div>

                <div className="flex justify-between mt-5 col-span-3 text-lg">
                  <h1 className="text-3xl text-red-700">Total:</h1>
                  <h1 className="text-3xl text-red-700">
                    ${" "}
                    {totalWithTax.toLocaleString("en", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </h1>
                </div>
              </div>

              <button
                onClick={invoiceSubmit}
                className="btn btn-block bg-green-600 btn-ghost text-white mt-10 mb-10"
              >
                <svg
                  aria-label="Email icon"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    fill="none"
                    stroke="black"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                Dispatch the Order Decree
              </button>
            </div>
          </div>
        ) : (
          <div className="relative text-center pt-10 pb-10">
            <h1 className="text-2xl font-evolventa">
              <b>Boss... there ain't anything to check-out here!</b>
            </h1>
          </div>
        )}
      </div>
    </>
  );
};
export default Checkout;
