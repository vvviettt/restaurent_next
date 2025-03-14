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
            <PageBanner pageTitle={"Đặt chỗ"} 
            description={"Chúng tôi có diện tích tầng 1 và tầng 2 có thể chứa khoảng 500 người, cùng với nhiều phòng riêng để cung cấp không gian riêng tư."} breadTitle={"Đặt bàn"} showMap={1} />
        </div>
        <div id="tst-dynamic-content" className="tst-dynamic-content">
            <div className="tst-content-frame">
                <div className="tst-content-box">
                    <div className="container tst-p-60-60">
                        <ScrollHint />

                        <ReservationFormSection />
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
