import React from 'react';

export const ResetButton = ({resetBoard}) => {
    return (
        <button class="bg-green-200 rounded-lg w-40" onClick={resetBoard}>Reset</button>
    )
    }