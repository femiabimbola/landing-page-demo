"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation";

const Header = () => {
  //Navar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  //stick Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };
  
  const usePathName = usePathname();

  return (
    <header className={`header left-0 top-0 z-40 flex w-full items-center ${
      sticky
        ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
        : "absolute bg-transparent"
    }`}>

    </header>
  )
}

export default Header