export function BrandsContent() {
    const brandsList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'X',
        'Y', 'Z', '#'
    ];

    const brandsMap = {

    };
    
    return (
        <div class="relative flex justify-center w-full -translate-x-1/3 -left-[107px] h-max bg-white p-9  shadow-xl">
            <div className="items-center grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="relative items-center">
                    <p className="font-bold mb-4">Brands</p>
                    <div className="absoloute grid md:grid-cols-5 gap-2">
                        {brandsList.map(letter => (
                            // <a href={hrefMap[letter]} className={`hover:underline ${letter}`}>
                            //     {letter}
                            // </a>
                            <a href="#" className={`hover:underline ${letter}`}>
                                {letter}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <p className="font-bold mb-4">Top Brands</p>
                    <div>This if second col contents</div>
                </div>
            </div>
        </div>
    );
};
