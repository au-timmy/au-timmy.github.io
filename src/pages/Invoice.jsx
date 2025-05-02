import "../App.css";
import { useLocation } from "react-router-dom";
import InvoiceTabler from "../components/invoiceTabler";

const Invoice = () => {
  const { state: invoiceData } = useLocation();

  return (
    <>
      <div className="mb-10 mt-10 flex justify-center gap-10 font-evolventa">
        <div className="bg-base-100 h-full w-96 shadow-sm">
          <div className="card-body">
            <h2 className="text-lg text-bold">
              <strong>Contact Information</strong>
            </h2>
            <p>First Name: {invoiceData.firstName}</p>
            <p>Last Name: {invoiceData.lastName}</p>
            <p>Phone Number: {invoiceData.phoneNum}</p>

            <h2 className="text-lg text-bold">
              <strong>Billing and Shipping Address</strong>
            </h2>
            <p>Street Address: {invoiceData.streetAddress}</p>
            <p>City: {invoiceData.city}</p>
            <p>State: {invoiceData.liveState}</p>
            <p>Zip Code: {invoiceData.zipcode}</p>
            <p>Country: {invoiceData.country}</p>

            <h2 className="text-lg text-bold">
              <strong>Shipping Method</strong>
            </h2>
            <p>{invoiceData.shipMethod}</p>

            <h2 className="text-lg text-bold">
              <strong>Costs</strong>
            </h2>
            <p>
              Subtotal: $
              {invoiceData.totalPrice.toLocaleString("en", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p>
              Taxes (6%): $
              {invoiceData.taxAmount.toLocaleString("en", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
            <p className="text-lg pt-5">
              <strong>
                Total with Tax: $
                {invoiceData.totalWithTax.toLocaleString("en", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </strong>
            </p>
          </div>
        </div>

        <div className="card bg-base-100 w-150 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Purchased Items</h2>
            <div className="">
              {invoiceData.cartItems.map((item) => (
                <InvoiceTabler
                  key={item.id}
                  item={item}
                  quantity={invoiceData.quantities?.[item.id] || 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
