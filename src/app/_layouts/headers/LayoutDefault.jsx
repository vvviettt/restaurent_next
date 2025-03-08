"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

import { OnePageMenu } from '@common/onepageMenu';

import AppData from "@data/app.json";
import CartData from "@data/cart.json";

import MiniCart from "@layouts/cart/MiniCart";
import ReservationForm from "@components/forms/ReservationForm";

const DefaultHeader = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const [miniCart, setMiniCart] = useState(false);
    const [reservationPopup, setReservationPopup] = useState(false);
    const asPath = usePathname();

    const isPathActive = (path) => {
        return (asPath.endsWith(path) == 1 && path !== '/') || asPath === path;
    };

    const handleSubMenuClick = (index, e) => {
        if (window !== undefined) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                setOpenSubMenu(openSubMenu === index ? false : index);
            }
        }
    };

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
                    <div className="tst-menu" style={{
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        {/* logo */}

                        {/* menu */}
                        <nav className={`${mobileMenu ? "tst-active" : ""}`}>
                            {isPathActive("onepage") ? (
                                <ul>
                                    {AppData.header.onepage.map((item, index) => (
                                        <li key={`header-menu-onepage-item-${index}`} className={index == 0 ? "current-menu-item" : ""}><a data-no-swup href={item.link}>{item.label}</a></li>
                                    ))}
                                </ul>
                            ) : (
                                <ul>
                                    {AppData.header.menu.map((item, index) =>
                                        index == 2 ?
                                            <Link href="/">
                                                <img src={AppData.header.logo.image} className="tst-logo" alt={AppData.header.logo.alt} />
                                            </Link> :
                                            (
                                                <li className={`""} ${isPathActive(item.link) ? "current-menu-item" : ""}`} key={`header-menu-item-${index}`}>
                                                    <Link href={item.link} onClick={(item.children?.length > 0) ? (e) => handleSubMenuClick(index, e) : null}>
                                                        {item.label}
                                                    </Link>
                                                    {/* {item.children?.length > 0 && (
                                                        <ul className={openSubMenu === index ? 'tst-active' : ''}>
                                                            {item.children.map((subitem, subIndex) => (
                                                                <li key={`header-submenu-item-${subIndex}`} className={isPathActive(subitem.link) ? "tst-active" : ""}>
                                                                    {subitem.link == '/onepage' ? (
                                                                        <a href={subitem.link} target="_blank">
                                                                            {subitem.label}
                                                                        </a>
                                                                    ) : (
                                                                        <Link href={subitem.link}>
                                                                            {subitem.label}
                                                                        </Link>
                                                                    )}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )} */}
                                                </li>
                                            ))}
                                </ul>
                            )}
                        </nav>
                        {/* menu end */}
                        {/* top bar right */}

                        {/* top bar right end  */}
                    </div>
                </div>
                {/* top bar end */}
            </div>
            {/* top bar frame */}

            {/* popup */}
            <div className={`tst-popup-bg ${reservationPopup ? "tst-active" : ""}`}>
                <div className="tst-popup-frame">
                    <div className="tst-popup-body">
                        <div className="tst-close-popup" onClick={() => setReservationPopup(!reservationPopup)}><i className="fas fa-times"></i></div>

                        {/* title */}
                        <div className="text-center">
                            <div className="tst-suptitle tst-suptitle-center"></div>
                            <h4 className="tst-mb-10">Table Reservation</h4>
                        </div>
                        {/* title end */}

                        <ReservationForm />
                    </div>
                </div>
            </div>
            {/* popup end */}
        </>
    );
};
export default DefaultHeader;
