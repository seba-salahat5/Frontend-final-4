import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Container } from "./Container";
import ProductCard from "../components/shared/product-card/ProductCard";
import pinkBagImage from '../assets/newArrivals/pink-bag-small.png';

const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ProductCard image={pinkBagImage} productName={"Grande"} productDescreption={"Blossom Pouch"} discount={0.5} showRating={false} price={39.49} showOldPrice={false} ratersNumber={43} />
      <ProductCard image={pinkBagImage} productName={"Grande"} productDescreption={"Blossom Pouch"} discount={0.5} showRating={true} price={39.49} showOldPrice={true} ratersNumber={43} rating={4.0} />
    </Container>
  );
};

export default Layout;
