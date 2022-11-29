import React, {useEffect, useRef} from 'react';
import { useLocation } from 'react-router-dom';
import {useEffectScroll} from "../../../../hooks/hooks";
import './style.scss';


const NavbarContainer = ({children}: any) => {
    
    const location = useLocation();
    const currentPath = location.pathname;

    const nav: React.MutableRefObject<any> = useRef();
    let scrDown = 0;

	useEffect(() => {
        (currentPath !== '/') ? (nav.current.classList.add("nav-bg")) : (nav.current.classList.remove("nav-bg"))
	}, [currentPath]);

    useEffectScroll((e: any, x: any, y: any) => {
        // currentPath === '/'
        if (currentPath === '/' && y > 170) {
            if (scrDown < y && nav.current !== undefined) {
                nav.current.classList.add("nav-bg", "hide-nav");
            } else {
                nav.current !== undefined && nav.current.classList.remove("hide-nav");
            }
        } else if (currentPath === '/' && y <= 170) {
            nav.current !== undefined && nav.current.classList.remove("nav-bg", "hide-nav");
        } else {
            if (scrDown < y && nav.current !== undefined) {
                nav.current.classList.add("nav-bg", "hide-nav");
            } else {
                nav.current !== undefined && nav.current.classList.remove("hide-nav");
            }
        }

        scrDown = y;
    });

    return (
        <header className={'site-header container-fluid'} ref={nav}>
            {children}
            <div className="bg background-section" />
            <div className="bg background-main" />
        </header>
    );
};

export default NavbarContainer;
