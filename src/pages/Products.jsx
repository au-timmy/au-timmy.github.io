import { useState } from "react";
import "../App.css";
import Landingvid from "../components/landingvid";
import Landingtext1 from "../components/landingtext1";
import Footer from "../components/footer";

const Products = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Landingvid />

      <Landingtext1 />
    </>
  );
};

export default Products;
