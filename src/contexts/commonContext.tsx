import { createContext, useEffect, useState, ReactNode } from "react";
import Preloader from '../components/Preloader/Preloader'; // Import Preloader component

// Define the context type
interface CommonContextProps {
  showLoader: boolean;
  setShowLoader: (showLoader: boolean) => void;
}

const CommonContext = createContext<CommonContextProps>({
  showLoader: true,
  setShowLoader: () => { },
});

interface CommonProviderProps {
  children: ReactNode;
}

function CommonProvider({ children }: CommonProviderProps) {
  const [showLoader, setShowLoader] = useState(true);

  // Handle the page fade-in effect
  useEffect(() => {
    // Add the 'fade-in' class to body initially
    document.body.classList.add("fade-in");

    // Simulate an API call or loading time (e.g., 3 seconds delay)
    const timer = setTimeout(() => {
      setShowLoader(false);  // Hide loader after delay
      document.body.classList.add("fade-in-visible");  // Trigger fade-in effect
    }, 800);  // 1-second delay

    return () => {
      clearTimeout(timer);  // Cleanup timer
      document.body.classList.remove("fade-in", "fade-in-visible"); // Cleanup classes
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <CommonContext.Provider value={{ showLoader, setShowLoader }}>
      {showLoader && <Preloader />}  {/* Show preloader when showLoader is true */}
      {children}
    </CommonContext.Provider>
  );
}

export { CommonProvider, CommonContext };
