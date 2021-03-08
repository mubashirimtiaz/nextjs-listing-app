import Footer from "../footer/footer.component";
import Navbar from "../navbar/navbar.component";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
