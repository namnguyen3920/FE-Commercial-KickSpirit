import React from "react";
import CategoriesLink from "./header-components/category-components/CategoriesLink";
import HeaderLogo from "./header-components/HeaderLogo";
import {
  BrandsContent,
  SneakerContent,
  ShoesContent,
  SlidesContent,
} from "./header-components/category-components/categories-contents";
const Header = () => {
  return (
    <header>
      <div class="bg-white dark:bg-gray-90 flex justify-center items-center">
        <HeaderLogo />
      </div>

      <div class="flex justify-center py-4 bg-header-color space-x-10 border-t border-gray-300">
        <CategoriesLink href="#" Contents={BrandsContent}>
          <div class="font-bold">Brands</div>
        </CategoriesLink>
        <CategoriesLink href="#" Contents={SneakerContent}>
          <div class="font-bold">Sneaker</div>
        </CategoriesLink>
        <CategoriesLink href="#" Contents={ShoesContent}>
          <div class="font-bold">Shoes</div>
        </CategoriesLink>
        <CategoriesLink href="#" Contents={SlidesContent}>
          <div class="font-bold">Slides</div>
        </CategoriesLink>
      </div>
    </header>
  );
};

export default React.memo(Header);
