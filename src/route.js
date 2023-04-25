import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
    const [activepage, setActivepage] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setActivepage(window.location.pathname) // Only for re rendering the component
        }
        window.addEventListener('popstate', onLocationChange);
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, [])

    return window.location.pathname === path
        ? children
        : null;

}

export default Route