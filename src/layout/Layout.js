import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Container } from "./Container";

const Layout = () => {
  return (
    <Container>
      <br />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
