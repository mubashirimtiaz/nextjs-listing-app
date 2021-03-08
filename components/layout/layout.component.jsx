import Footer from "../footer/footer.component";
import Navbar from "../navbar/navbar.component";

const Layout = ({ children }) => {
  return (
    <div className="text-gray-700">
      <Navbar />
      <div className="px-4">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
