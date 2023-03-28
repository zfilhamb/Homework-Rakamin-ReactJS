import React from 'react';

export const ScoreBoard = ({scores, xPlaying}) => {
    const {xScore, oScore} = scores;
    return (
        <div class="flex flex-row items-center justify-evenly w-60 bg-rose-200 mt-5 ml-60 rounded-lg">
            <span className={`score x-score ${!xPlaying && "inactive"}`}>X-{xScore}</span>
            <span className={`score x-score ${xPlaying && "inactive"}`}>O-{oScore}</span>
        </div>
    )
}