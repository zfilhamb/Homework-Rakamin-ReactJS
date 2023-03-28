import React from 'react';

export const Box = ({value, onClick}) => {


    return (
        <button class='bg-yellow-200 border-inherit rounded-lg shadow-inherit w-14 h-14 text-center text-5xl font-bold leading-10 m-1' onClick={onClick} > {value} </button>
    )
}