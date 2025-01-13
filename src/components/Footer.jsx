import FooterBottom from "./footer-components/FooterBottom";
import FooterGrid from "./footer-components/FooterGrid";
import React from "react";

const Footer = () => {
  const nikeItems = [
    { name: "Nike Air Force 1", link: "#" },
    { name: "Nike Dunk", link: "#" },
    { name: "Nike SB", link: "#" },
  ];

  return (
    <footer>
      <div className="bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <FooterGrid title="Nike" items={nikeItems} />
          <FooterGrid title="Nike" items={nikeItems} />
          <FooterGrid title="Nike" items={nikeItems} />
          <FooterGrid title="Nike" items={nikeItems} />
          <FooterGrid title="Nike" items={nikeItems} />
          <FooterGrid title="Nike" items={nikeItems} />
        </div>
      </div>
      <div className="bg-gray-50">
        <FooterBottom />
      </div>
    </footer>
  );
};

export default React.memo(Footer);
