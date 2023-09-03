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
                    <div className='btn btn-success fixed right-10 bottom-10 hover:text-white' onClick={GoToTop}>
                        <AiOutlineArrowUp />
                    </div>
                )
            }
        </>
    );
};

export default ScrollToTop;