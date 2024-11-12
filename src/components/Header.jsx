import React from 'react';
import CategoriesLink from './header-components/category-components/CategoriesLink';
import HeaderLogo from './header-components/HeaderLogo';
import { BrandsContent } from './header-components/category-components/panel-contents/BrandsContent';
import { MenContent } from './header-components/category-components/panel-contents/MenContents';
import { WomenContent } from './header-components/category-components/panel-contents/WomenContent';
import { KidContent } from './header-components/category-components/panel-contents/KidContent';

const Header = () => {
    return (
        <header>

            <div class="bg-white border-gray-200 dark:bg-gray-900">
                <HeaderLogo />
            </div>

            <div class="flex justify-center py-4 bg-header-color space-x-10 border-t border-gray-300">
                    <CategoriesLink href="#" Contents={BrandsContent}>
                        <div class="font-bold">
                            Brands
                        </div>
                    </CategoriesLink>
                    <CategoriesLink href="#" Contents={MenContent}>
                        <div class="font-bold">
                            Men
                        </div>
                    </CategoriesLink>
                    <CategoriesLink href="#" Contents={WomenContent}>
                        <div class="font-bold">
                            Women
                        </div>
                    </CategoriesLink>
                    <CategoriesLink href="#" Contents={KidContent}>
                        <div class="font-bold">
                            Kids
                        </div>
                    </CategoriesLink>
            </div>
        </header>
    );
};

export default React.memo(Header);