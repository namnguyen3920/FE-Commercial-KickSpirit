import React from 'react';
import { filteredProductState, filteredProductState } from '../../../recoil/atoms/productAtoms';

const SearchDropdown = (props) => {

    return (
        <div className="fixed border inset-0 bg-black bg-opacity-70 flex justify-center items-center transition-opacity duration-500 ease-in-out opacity-100">
            <div className="bg-white p-8 w-full h-full flex flex-col justify-center items-center space-y-6 overflow-y-auto">
                <button 
                    onClick={() => setSearchQuery('')} 
                    className="absolute top-5 right-5 text-white font-bold text-xl"
                >
                    X
                </button>
                <ul className="space-y-6 text-center text-xl w-full">
                    <li className="flex items-center space-x-4">                        
                        <img src={props.img} alt={props.name} className="w-16 h-16 object-cover rounded-full" />
                        <span className="text-blue-500 hover:text-blue-700">{props.name}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SearchDropdown;