import { Outlet, Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const Layout = () => {
  return (
    <>
      <Header />

      <Footer />

      <Outlet />
    </>
  );
};

export default Layout;
