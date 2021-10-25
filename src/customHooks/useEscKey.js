//by Bjorn Reppen https://stackoverflow.com/questions/37440408/how-to-detect-esc-key-press-in-react-and-how-to-handle-it
import React, { useEffect } from 'react';

const useEscape = (onEscape) => {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape')
                onEscape();
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);
}

export default useEscape
