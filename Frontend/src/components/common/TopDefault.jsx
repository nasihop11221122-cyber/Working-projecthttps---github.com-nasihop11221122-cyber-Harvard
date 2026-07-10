import { useEffect } from "react";
import { useLocation } from 'react-router-dom'


export const TopDefault = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [pathname])

}

export default TopDefault
