"use client";

import Confetti from "react-confetti";
import { useRef, useEffect, useState } from "react";

export default function Festa() {
    const ref = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    const updateSize = () => {
        if (ref.current) {
            const { offsetWidth, offsetHeight } = ref.current;
            setSize({ width: offsetWidth, height: offsetHeight });
        }
    };

    useEffect(() => {
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div ref={ref} className="w-full h-full absolute top-0 left-0">
            {size.width > 0 && size.height > 0 && (
                <Confetti
                    width={size.width}
                    height={size.height}
                    numberOfPieces={140}
                    recycle={true}
                    gravity={0.2}
                    wind={0.01}
                />
            )}
        </div>
    );
}