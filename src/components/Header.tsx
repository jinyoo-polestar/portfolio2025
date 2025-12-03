"use client";

import { useState } from "react";
import Image from "next/image";

import useResponsive from "@/hooks/useResponsive";

import MenuIcon from "../../public/ic_menu.svg";
import CloseIcon from "../../public/ic_close.svg";

import "./Header.scss";

const menuItems = [
  { label: "about", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Get in touch", href: "#", isButton: true },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isTablet, isDesktop } = useResponsive();
  const onClickMenuBtn = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <h1 className="header__title en-s1">portfolio</h1>
      {isDesktop ? (
        <nav className="header__nav header__nav--pc">
          <ul className="header__nav-list">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className={`header__nav-item ${
                  item.isButton ? "header__nav-item--contact" : ""
                }`}
              >
                <a className="header__nav-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <nav className="header__nav header__nav--mo">
          <button className="header__nav-btn" onClick={onClickMenuBtn}>
            <Image src={isMenuOpen ? CloseIcon : MenuIcon} alt="" />
          </button>
          {isMenuOpen && (
            <ul className="header__nav-list">
              {menuItems.map((item) => (
                <li key={item.label} className="header__nav-item">
                  <a className="header__nav-link en-b1" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      )}
    </header>
  );
}
