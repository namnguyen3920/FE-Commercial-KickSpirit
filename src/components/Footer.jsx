import FooterBottom from "./footer-components/FooterBottom";
import FooterGrid from "./footer-components/FooterGrid";
import React from "react";

const Footer = () => {
  const nikeItems = [
    { name: "Nike Air Force 1", link: "#" },
    { name: "Nike Air Max 1", link: "#" },
    { name: "Nike SB Dunk Low", link: "#" },
  ];
  const adidasItems = [
    { name: "adidas Samba OG", link: "#" },
    { name: "adidas Yeezy Slides", link: "#" },
    { name: "adidas Stan Smith", link: "#" },
  ];
  const vansItems = [
    { name: "Vans Old Skool", link: "#" },
    { name: "Bans Sknu", link: "#" },
  ];
  const nbItems = [
    { name: "Nike Air Force 1", link: "#" },
    { name: "Nike Dunk", link: "#" },
    { name: "Nike SB", link: "#" },
  ];
  const yeezyItems = [
    { name: "Yeezy 500 Serires", link: "#" },
    { name: "Yeezy 350 Series", link: "#" },
  ];

  return (
    <footer>
      <div className="bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <FooterGrid title="Nike" items={nikeItems} />
          <FooterGrid title="Adidas" items={adidasItems} />
          <FooterGrid title="Vans" items={vansItems} />
          <FooterGrid title="Yeezy" items={yeezyItems} />
        </div>
      </div>
      <div className="bg-gray-50">
        <FooterBottom />
      </div>
    </footer>
  );
};

export default React.memo(Footer);
