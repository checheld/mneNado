import React, {useRef} from 'react';
import {useEffectScroll} from "../../../../hooks/hooks";
import './style.scss';


const NavbarContainer = ({children}: any) => {

    const nav: React.MutableRefObject<any> = useRef();
    let scrDown = 0;

    useEffectScroll((e: any, x: any, y: any) => {

        if (y > 170) {
            if (scrDown < y && nav.current !== undefined) {
                nav.current.classList.add("nav-bg", "hide-nav");
            } else {
                nav.current !== undefined && nav.current.classList.remove("hide-nav");
            }
        } else {
            nav.current !== undefined && nav.current.classList.remove("nav-bg", "hide-nav");
        }

        scrDown = y;
    });

    return (
        <header className={'site-header container-fluid'} ref={nav}>
            {children}
            <div className="bg background-section"/>
            <div className="bg background-main"/>
        </header>
    );
};

export default NavbarContainer;
