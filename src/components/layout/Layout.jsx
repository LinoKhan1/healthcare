import { Outlet, Link, useLocation } from "react-router-dom";
import Footer from "./Footer";
import NavbarComponent from "./Navbar";

const Layout = () => {
  const location = useLocation();

  // Check if the current page is one where we want to modify the navbar's position
  const isSpecialPage = location.pathname === "/mental" || location.pathname === "/contact";

  return (
    <div className={isSpecialPage ? "special-navbar" : ""}>
      <NavbarComponent />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
