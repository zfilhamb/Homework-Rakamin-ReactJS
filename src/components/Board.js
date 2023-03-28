import React from 'react';
import {Box} from './Box';

export const Board = ({board, onClick}) => {

    return (
        <div class='grid grid-cols-3 place-items-center justify-center mx-64'>
            {board.map((value, index) => {
                return <Box value ={value} onClick={() => value === null && onClick(index)} />
            })}
            </div>
    )
}