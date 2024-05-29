import { useEffect, useState } from "react";


function useIsMobile(breakpoint = 786) {
    
    const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= breakpoint);
       }
        window.addEventListener("resize", handleResize);
        
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    },[breakpoint])

    return isMobile;
}

export default useIsMobile;