import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavContainer,
  NavWrapper,
  Logo,
  NavMenu,
  NavItem,
  MobileMenuButton,
} from "./Navbar-style";
import {
  ShoppingCart,
  User,
  LogIn,
  Menu,
  X,
  Package,
  Truck,
} from "lucide-react";

// --- Placeholder State ---
// This would eventually come from a global state (e.g., Context API)
const isAuthenticated = true; // Set to true to test logged-in view
const userRole = "admin"; // 'user', 'delivery', or 'admin'
// --- End Placeholder State ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLogout = () => {
    console.log("Logging out...");
    // Future: Clear JWT, reset state, redirect to login
  };

  const getDashboardLink = () => {
    switch (userRole) {
      case "admin":
        return {
          path: "/admin",
          icon: <Package size={20} />,
          label: "Admin Panel",
        };
      case "delivery":
        return {
          path: "/delivery",
          icon: <Truck size={20} />,
          label: "Deliveries",
        };
      case "user":
      default:
        return {
          path: "/dashboard",
          icon: <User size={20} />,
          label: "My Account",
        };
    }
  };

  const dashboardLink = getDashboardLink();

  return (
    <NavContainer>
      <NavWrapper>
        <Logo>
          <Link to="/">
            🥦 Grocery<span>Sub</span>
          </Link>
        </Logo>

        <MobileMenuButton onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </MobileMenuButton>

        <NavMenu $isOpen={isMenuOpen}>
          {isAuthenticated ? (
            <>
              {/* Dashboard Link based on Role */}
              <NavItem>
                <Link to={dashboardLink.path} onClick={toggleMenu}>
                  {dashboardLink.icon}
                  {dashboardLink.label}
                </Link>
              </NavItem>

              {/* User/Customer specific links */}
              {userRole === "user" && (
                <NavItem>
                  <Link to="/cart" onClick={toggleMenu}>
                    <ShoppingCart size={20} />
                    Cart (0)
                  </Link>
                </NavItem>
              )}

              {/* Logout */}
              <NavItem>
                <button onClick={handleLogout}>
                  <LogIn size={20} style={{ transform: "rotate(180deg)" }} />
                  Logout
                </button>
              </NavItem>
            </>
          ) : (
            <>
              {/* Public/Guest links */}
              <NavItem>
                <Link to="/login" onClick={toggleMenu}>
                  <User size={20} />
                  Login
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/register" onClick={toggleMenu}>
                  <LogIn size={20} />
                  Register
                </Link>
              </NavItem>
            </>
          )}
        </NavMenu>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
