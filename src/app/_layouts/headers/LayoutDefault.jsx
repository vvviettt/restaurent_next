"use client";

import { usePathname } from "@i18n/navigation";
import { useEffect, useState } from "react";

import { OnePageMenu } from "@common/onepageMenu";

import AppData from "@data/app.json";
import CartData from "@data/cart.json";

import MiniCart from "@layouts/cart/MiniCart";
import ReservationForm from "@components/forms/ReservationForm";
import { Header } from "./Header";

const DefaultHeader = ({ data }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [miniCart, setMiniCart] = useState(false);
  const [reservationPopup, setReservationPopup] = useState(false);
  const asPath = usePathname();

  const isPathActive = (path) => {
    return (asPath.endsWith(path) == 1 && path !== "/") || asPath === path;
  };

  //   const handleSubMenuClick = (index, e) => {
  //     if (window !== undefined) {
  //       if (window.innerWidth <= 992) {
  //         e.preventDefault();
  //         setOpenSubMenu(openSubMenu === index ? false : index);
  //       }
  //     }
  //   };

  useEffect(() => {
    // close mobile menu
    setMobileMenu(false);
    setMiniCart(false);
    setReservationPopup(false);
    setOpenSubMenu(false);
  }, [asPath]);

  useEffect(() => {
    if (isPathActive("onepage")) {
      OnePageMenu();
    }
  }, []);

  return (
    <>
      {/* top bar frame */}

      <div className="tst-menu-frame">
        {/* top bar */}
        <div className="tst-dynamic-menu" id="tst-dynamic-menu">
          <Header data={data} />
        </div>
        {/* top bar end */}
      </div>
      {/* top bar frame */}
      {/* popup */}
      
      {/* popup end */}
    </>
  );
};
export default DefaultHeader;
