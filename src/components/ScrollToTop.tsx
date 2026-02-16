import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Function to scroll to the top of the page
        const scrollToTop = () => {
            setTimeout(() => {
                // Only scroll to top if no hash and no scrollTo state
                if (!location.hash && !(location.state && (location.state as any).scrollTo)) {
                    window.scrollTo(0, 0);
                }
            }, 100); // Delay to handle smooth scroll
        };

        // Scroll to top on location change (for both path and hash changes)
        scrollToTop();

        // For hash changes, also force scroll to top if no hash and no scrollTo state
        const handleHashChange = () => {
            setTimeout(() => {
                if (!location.hash && !(location.state && (location.state as any).scrollTo)) {
                    window.scrollTo(0, 0);
                }
            }, 100); // Delay to handle hash navigation smoothly
        };

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);

        // Cleanup listener on unmount or location change
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [location]);

    // Show the "Back to Top" button when the user scrolls down
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top when the button is clicked
    const scrollToTopOnClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    // Attach scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <button className='backtotop'  onClick={scrollToTopOnClick} style={{opacity: isVisible ? 1 : 0,  transform: isVisible ? 'translateY(0)' : 'translateY(20px)', }}>
                <img src={`${process.env.PUBLIC_URL}/images/icons/backtotop.svg`} alt="" />
            </button>
        </>
    );
};

export default ScrollToTop;
