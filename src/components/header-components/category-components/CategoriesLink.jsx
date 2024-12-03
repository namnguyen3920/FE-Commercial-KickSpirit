import { useState } from "react";


const CategoriesLink = ({ children, href, Contents }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = open && Contents;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            class="relative h-fit w-fit">
            <a href={href} class="relative">
                {children}
                <span
                    style={{
                        transform: open ? "scaleX(1)" : "scaleX(0)",
                    }}
                    class="absolute -bottom-2 -left-2 -right-2 h-1
                origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-out"

                />
            </a>
            {showFlyout && (
                <div class="absolute w-max top-10 h-fit">
                    <Contents />
                </div>)}
        </div>
    );
};



export default CategoriesLink;