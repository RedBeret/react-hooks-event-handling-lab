import React from 'react';


function Keypad() {
    return (
        <div>
            <label>Enter Password:</label>
            <input type="password" onChange={() => console.log('Entering password...')} />
        </div>
    );
}


export default Keypad;  