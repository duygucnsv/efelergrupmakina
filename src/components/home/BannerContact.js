import React from "react";
import BannerContactItem from "./BannerContactItem";

const BannerContact = () => {
  return (
    <>
      <div className="header-support">
        <div className="container">
          <div className="header-support-group">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg order-md-2 order-lg-4">
                  <div className="support-bank">
                  <div className="support-bank-info ">
                    <span>⭐⭐⭐⭐⭐ </span>                    
                    <h3>
                      EFELER GRUP                     
                    </h3>
                    <p>Efeler Grup uzman kadrosu ile kaliteli, sorunsuz, hassas ve hızlı üretim anlayışı çerçevesinde hizmet vermeye devam etmektedir.</p>
                    <div className="support-logo">
                      <img src="assets/img/efeler.png" alt="logo" />
                    </div>
                  </div>
                </div>
                </div>
              <div className="col-sm-6 col-md-6 col-lg order-md-1 order-lg-1">
                <BannerContactItem
                  img="assets/img/envelop.png"
                  link="mailto:efelergrup@gmail.com"
                  icerik="efelergrubdemircelik@gmail.com"
                />
              </div>
              <div className="col-sm-6 col-md-12 col-lg order-md-3 order-lg-2">
                <BannerContactItem
                  img="assets/img/phone.png"
                  link="tel:(+90)5305249519"
                  icerik="(+90) 530 524 95 19"
                />
              </div>

              <div className="col-sm-6 col-md-12 col-lg order-md-4 order-lg-3">
                <BannerContactItem
                  img="assets/img/map.png"
                  link="456 Labisto Parkways"
                  icerik="Osmangazi Mh.Mareşal Fevzi Çakmak Cd. No:33/1 Esenyurt/İSTANBUL"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerContact;
