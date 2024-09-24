import React, { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const GoToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    };

    const listenToScroll = () => {
        let hightToHidden = 200;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > hightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, [])

    return (
        <>
            {
                isVisible && (
                    <div className='btn btn-success group fixed bottom-5 right-5 p-3 rounded-full bg-success text-white shadow-lg
         hover:bg-success-500 hover:scale-90 transition-colors smoothingAnimation' onClick={GoToTop}>
                        <AiOutlineArrowUp className='w-6 h-6 group-hover:translate-y-[-5px] group-hover:animate-bounce font-bold' />
                    </div>
                )
            }
        </>
    );
};

export default ScrollToTop;