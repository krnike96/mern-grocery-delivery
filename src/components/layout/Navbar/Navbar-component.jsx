import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext.jsx";
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
  // --- USE GLOBAL AUTH STATE ---
  const { isAuthenticated, userRole, logout } = useAuth();
  // ----------------------------

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Adjusted handleLogout to use the context function
  const handleLogout = () => {
    logout(); // Call the context logout function
    toggleMenu(); // Close menu on mobile
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
        return { path: "/", icon: <User size={20} />, label: "Groceries" }; // User home is the main dashboard
    }
  };

  // Only calculate link if authenticated, otherwise null
  const dashboardLink = isAuthenticated ? getDashboardLink() : null;

  return (
    <NavContainer>
      <NavWrapper>
        <Logo>
          <Link to="/">
            🥦 Grocery<span style={{ fontWeight: "900" }}>Sub</span>
          </Link>
        </Logo>

        <MobileMenuButton onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </MobileMenuButton>

        <NavMenu $isOpen={isMenuOpen}>
          {isAuthenticated ? (
            <>
              {/* 1. Dashboard Link based on Role */}
              <NavItem>
                <Link to={dashboardLink.path} onClick={toggleMenu}>
                  {dashboardLink.icon}
                  {dashboardLink.label}
                </Link>
              </NavItem>

              {/* 2. Cart Link (Visible to all logged-in users, but primarily for customers) */}
              {userRole !== "admin" && ( // Admins/Delivery generally don't use the cart
                <NavItem>
                  <Link to="/cart" onClick={toggleMenu}>
                    <ShoppingCart size={20} />
                    Cart (0)
                  </Link>
                </NavItem>
              )}

              {/* 3. Logout */}
              <NavItem>
                <button onClick={handleLogout}>
                  <LogOut size={20} style={{ marginRight: "5px" }} />
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
