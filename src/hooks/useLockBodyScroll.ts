"use client"
import { useEffect, useRef } from "react";

const useLockScroll = (toggle: boolean) => {
    const position = useRef<number | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (toggle) {
                position.current = window.scrollY;
            }

            document.body.style.top = toggle ? `-${position.current}px` : '';
            document.body.style.height = toggle ? '100vh' : '';
            document.body.style.position = toggle ? 'fixed' : '';

            window.scrollTo(0, position.current || 0);
        }
    }, [toggle]);

    useEffect(() => {
        return () => {
            if (typeof window !== 'undefined') {
                document.body.style.top = '';
                document.body.style.height = '';
                document.body.style.position = '';
                window.scrollTo(0, position.current || 0);
            }
        };
    }, []);

};

export default useLockScroll;
