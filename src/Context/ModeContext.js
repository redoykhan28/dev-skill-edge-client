import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const modeContext = createContext();

const ModeContext = ({ children }) => {
    //state for mode toogle
    const [mode, setMode] = useState(false)
    const modeInfo = { mode, setMode };
    return (

        <div>
            <modeContext.Provider value={modeInfo}>
                {children}
            </modeContext.Provider>
        </div>
    );
};

export default ModeContext;