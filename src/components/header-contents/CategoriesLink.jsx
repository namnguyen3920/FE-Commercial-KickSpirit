

const CategoriesLink = ({children, href, HeaderContents}) => {
    return (
        <div class="relative h-fit w-fit">
            <a href={href} class="relative">
                {children}
                <span 
                style ={{ 
                    transform: "scaleX(0.5)",
                 }}
                class="absolute -bottom-2 -left-2 -right-2 h-1
                origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
                
                />
            </a>
        </div>
    );
};

export default CategoriesLink;