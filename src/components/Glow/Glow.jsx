import { useEffect, useRef } from 'react';

function Glow() {
    const ref = useRef(null);

    useEffect(() => {
        const onMouseMove = (e) => {
            const x = e.clientX;
            const y = e.clientY;
            if (ref.current) {
                ref.current.style.background = `radial-gradient(500px at ${x}px ${y}px, rgba(3, 105, 161, 0.15), transparent 80%)`;
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition duration-300"
            ref={ref}
        />
    );
}

export default Glow;
