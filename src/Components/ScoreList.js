import React from 'react'

export default function ScoreList(props) {

    return <React.Fragment>
        <div className='scores-text'>Your Scores</div>
        {props.scores.map((score,index) => {

            return <div key={index} className="score-result">{index===0&&<span>Last Score:</span>}{score}</div>
        })}
    </React.Fragment>
}