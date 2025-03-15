import React from "react";

import AppData from "@data/app.json";

import ScrollHint from "@layouts/scroll-hint/Index";
import Divider from "@layouts/divider/Index";

import PageBanner from "@components/PageBanner";
import ContactInfoSection from "@components/sections/ContactInfo";
import ReservationFormSection from "@components/sections/ReservationForm";

export const metadata = {
    title: {
        default: "Reservation Form",
    },
    description: AppData.settings.siteDescription,
}

const Reservation = () => {
    return (
        <>
            <div id="tst-dynamic-banner" className="tst-dynamic-banner">
                <div style={{height: "130px"}}></div>
                {/* <PageBanner pageTitle={"Đặt chỗ"}
                    description={"Chúng tôi có diện tích tầng 1 và tầng 2 có thể chứa khoảng 500 người, cùng với nhiều phòng riêng để cung cấp không gian riêng tư."} breadTitle={"Đặt bàn"} showMap={1} /> */}
            </div>
            <div id="tst-dynamic-content" className="tst-dynamic-content">
                <div className="tst-content-frame">
                    <div className="tst-content-box">
                        <div className="container tst-p-60-60">
                            <ReservationFormSection />
                            <div id="map" className="row mt-5" style={{justifyContent: 'center'}}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.0391315517995!2d108.24006990955287!3d16.063459039530535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314217ab95c0275b%3A0xe053c50274e683b5!2sLang%20Chai%20SeaFood!5e0!3m2!1sen!2s!4v1742023567740!5m2!1sen!2s" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <Divider onlyBottom={0} />
                            <ContactInfoSection />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Reservation;
