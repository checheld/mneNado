import { useEffect } from 'react';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer';
import Scrollbar from "smooth-scrollbar";


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useEffectScroll = (listener: any) => {
            //@ts-ignore
    const scrollbar: React.MutableRefObject<null | Scrollbar> = useSelector(state => state.scrollbar);

    useEffect(() => {
        const scrollbarCurrent = scrollbar.current;
        const scroll = (e: number) => {
            listener(e, window.scrollX, window.scrollY);
        }
        if (scrollbarCurrent) {
            scrollbarCurrent.addListener((e: any) => {
                listener(e, e.offset.x, e.offset.y);
            });
        } else
        //@ts-ignore
            window.addEventListener("scroll", scroll);


        return () => {
            if (!scrollbarCurrent)
                    //@ts-ignore
                window.removeEventListener("scroll", scroll);
        }
    }, [scrollbar]);


    return null;
}
