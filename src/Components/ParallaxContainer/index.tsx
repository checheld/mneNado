import React, {useEffect, useRef} from 'react';
import { Box } from '@mui/material';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import './style.css';

interface IProps {
	height: string,
    parallax: {yPercent: number, scale: number},
    heroContent: {title: string, description: string, src: string, overlay: number},
    parallaxContent: {yPercent: number, autoAlpha: number},
    className?: string
}

gsap.config({
    nullTargetWarn: false,
  });
  
  gsap.set('.null', {opacity: 1})

const ParallaxContainer: React.FC<IProps> = ({ height,
                                    parallax,
                                    heroContent,
                                    parallaxContent,
                                    className }) => {

    gsap.registerPlugin(ScrollTrigger);

    const header = useRef() as React.MutableRefObject<HTMLInputElement>;
    const bg = useRef() as React.MutableRefObject<HTMLInputElement>;
    const holder = useRef() as React.MutableRefObject<HTMLInputElement>;
    const content = useRef();

    const {title, description, src} = heroContent;


    useEffect(() => {

        const animate = gsap.timeline();
        (bg.current && parallax) && animate.to(bg.current.children, {...parallax, ease: "none"}, 0);
        (content.current && parallaxContent) && animate.to(content.current, {...parallaxContent, ease: "none"}, 0);
        animate.to(holder.current, {y: 70, autoAlpha: 0, ease: "none"}, 0);

        ScrollTrigger.create({
            animation: animate,
            trigger: header.current,
            start: "top top",
            scrub: true
        });

        return () => {
            if (animate.scrollTrigger)
                animate.scrollTrigger.kill();

            animate.kill();
        }

    }, []);

    if (!Object.keys(heroContent).length || !src)
        return <></>;

    return (
        <Box ref={header} className={`half-content ${className}`}>
            {src && <Box sx={{ height: height }} data-overlay={heroContent.overlay} className="hero-img" ref={bg}>
                <img src={require("../../assets/images/main_page_bgr.jpg")} className="cover-bg-img" alt='parallaxImage' />
            </Box>}
            {
                heroContent &&
                <Box className="hero-content" ref={content}>
                    {title && <h1 className="main__heading">{title}</h1>}
                    {description && <div className="main__text">{description}</div>}
                </Box>
            }
        </Box>
    );
};

export default ParallaxContainer;
