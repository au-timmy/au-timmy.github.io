import { useState, useEffect } from "react";
import "../App.css";
import Items from "../data/items";
import Armorvid from "../components/armorvid";

const Armor = ({ addToCart }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const armor = Items().filter((item) => item.category === "Armor");
    setItems(armor);
  }, []);

  return (
    <>
      <Armorvid />

      <div className="mt-8 space-y-4 p-10">
        <p className="text-center text-3xl font-evolventa">
          Guimbo's has a long tradition of stocking the finest defensive magic &
          armor across the centuries.
        </p>
        <p className="text-center text-xl font-evolventa p-10">
          Each item represents centuries of hand-picking the best in class in
          terms of defense and comfort. These are items and apparel made to
          last.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 p-6">
        {items.map((item) => (
          <div key={item.id} className="max-w-113">
            <div className="block rounded-lg bg-gray-200 hover:bg-gray-200 transition-colors duration-300 shadow-secondary-1 dark:bg-surface-dark">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <div className="text-4xl text-center px-9 font-raleway mb-4 pt-5">
                  {item.name}
                </div>
                <img src={`/images/${item.image}`} alt="" />

                <div
                  onClick={() => addToCart(item)}
                  className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,100%,0.8)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 flex items-center justify-center text-lg font-raleway text-center px-4 cursor-pointer pl-20 pr-20"
                >
                  {item.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Armor;
