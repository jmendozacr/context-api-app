import { createContext, useState } from 'react';

// Create theme global context
const ContextTheme = createContext();

const ProviderTheme = ({ children }) => {
    const [theme, setTheme] = useState({
        align: 'center',
        fontSize: 20,
    });

    const increaseFont = () => setTheme({...theme, fontSize: theme.fontSize + 1});
    const decreaseFont = () => setTheme({...theme, fontSize: theme.fontSize - 1});
    const alignTextLeft = () => setTheme({...theme, align: 'left'});
    const alignTextCenter = () => setTheme({...theme, align: 'center'});
    const alignTextRight = () => setTheme({...theme, align: 'right'});

    return(
        <ContextTheme.Provider 
        value={
            {
                theme,
                increaseFont, 
                decreaseFont, 
                alignTextLeft, 
                alignTextCenter, 
                alignTextRight
            }
        }>
            {children}
        </ContextTheme.Provider>
    );
}

export { ContextTheme, ProviderTheme }; 