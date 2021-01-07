import { useState, useContext } from 'react'
import Answer from "./Answer";
import Question from "./Question";
import ScoreContext from "./ScoreContext";

export default function QuestionGroup(props) {

    
    const [selectedAnswer, setSelectedAnswer] = useState({})

    const scoreHandler = useContext(ScoreContext)


    function changeSelection(newAnswer) {    
        let scoreChange = 0;
        if (Object.keys(selectedAnswer).length > 0 && selectedAnswer.score) {
            scoreChange -= selectedAnswer.score
        }

        if (newAnswer.score) {
            scoreChange += newAnswer.score;
        }

        if (scoreChange !== 0) {
            scoreHandler.setScore(scoreHandler.score+scoreChange)
        }
        
        setSelectedAnswer(newAnswer);

    }


    return (
        <form className="form">
            <Question data={props.q} />

            {props.answers.map((a) => {
                return <Answer selected={selectedAnswer.id} key={a.id} {...a} qid={props.id} changeSelection={changeSelection} />
            })}

        </form >
    )



}