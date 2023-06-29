import React, { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <ul className={isMobile ? "mobile" : "desktop"}>
        <li>
          <a href="/">Budget Calculator</a>
        </li>
        <li>
          <a href="/ExpenseTracker">Expense Tracker</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
