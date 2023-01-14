import React from "react";

const HamburgerMenu = (props) => {
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-yellow-400 transition ease transform duration-300`;

    return (
        <button
            className="flex flex-col h-10 w-10 rounded justify-center items-center group"
            
        >
            <div
                className={`${genericHamburgerLine} ${
                    props.isOpen
                        ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${
                    props.isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${
                    props.isOpen
                        ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                }`}
            />
        </button>
    );
};

export default HamburgerMenu;
