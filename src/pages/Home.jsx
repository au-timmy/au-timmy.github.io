import { useState } from "react";
import "../App.css";
import Landingvid from "../components/landingvid";
import Landingtext1 from "../components/landingtext1";
import BrandCards1 from "../components/brandCards1";
import BrandCards2 from "../components/brandCards2";
import BrandCards3 from "../components/brandCards3";
import BrandCards4 from "../components/brandCards4";
import Footer from "../components/footer";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Landingvid />

      <Landingtext1 />

      <div className="card bg-base-100 max-w-full min-h-10">
        <div className="card-body">
          <h2 className="card-title mt-16">
            <p className="text-center text-xl font-evolventa">Our Brands</p>
          </h2>
        </div>
      </div>

      <div class="flex gap-2 pt-10">
        <BrandCards1 />
      </div>

      <div class="flex gap-2 pt-10">
        <BrandCards2 />
      </div>

      <div class="flex gap-2 pt-10">
        <BrandCards3 />
      </div>

      <div class="flex gap-2 pt-10">
        <BrandCards4 />
      </div>
    </>
  );
};

export default Home;
