import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Give the page time to render the element
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 0);
        }
    }, [hash]);

    return null;
};

export default ScrollToHashElement;
