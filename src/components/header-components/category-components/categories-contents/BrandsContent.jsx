import React, { useState, useEffect } from "react";
import { BrandRequest } from "../../../../caller/api-requestor";
import { Link } from "react-router-dom";

const BrandsContent = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const brandResponse = await BrandRequest.getBrandName();
        setBrands(brandResponse);
      } catch (error) {
        console.error("Error fetching brands", error);
      }
    };

    fetchBrands();
  }, []);
  return (
    <div class="relative flex justify-center -translate-x-1/3 h-max bg-white p-9  shadow-xl">
      <div className="items-center grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="relative">
          <p className="text-xl font-bold mb-6">All Brands</p>
          <ul className="grid grid-cols-2 gap-4">
            {brands.map((brand) => (
              <li key={brand.brand_id}>
                <Link
                  to={`/brands/${brand.brand_name}`}
                  className="text-gray-700 font-medium hover:underline"
                >
                  {brand.brand_name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BrandsContent;
