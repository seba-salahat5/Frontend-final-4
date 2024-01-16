import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { CustomContainer } from "./CustomContainer";

const Layout = () => {
  return (
    <>
      <CustomContainer>
        <Header />
      </CustomContainer>

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
